<template>
  <div class="page">
    <header-bar title="退会申请"></header-bar>
    <div class="page-bd">
      <van-list
        :offset="10"
        :immediate-check="false"
        v-model="loading"
        :finished="finished"
        @load="onLoad">
        <user-list :list-data="list">
          <template #default="{ row }">
            <div class="ids">贡献值: {{ $utils.dealScore(row.amount) }}</div>
          </template>
          <template #handle="{ row, $index }">
            <div class="text-right">
              <b class="b refused" @click="dealApplyOut(row, $index)">同意</b>
              <div class="count-down flex">
                <van-count-down :time="row.createTime" format="HH时mm分ss秒" />
                <span>后自动退会</span>
              </div>
            </div>
          </template>
        </user-list>
      </van-list>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { List, CountDown } from 'vant';
import HeaderBar from './components/HeaderBar';
import UserList from './components/UserList';
import { guildApplyList, guildApplyDealApplyOut } from '@/api/guild';
Vue.use(List).use(CountDown);

export default {
  name: 'GuildExitList',
  components: {
    HeaderBar,
    UserList
  },
  data() {
    return {
      loading: false,
      finished: false,
      query: {
        guildId: this.$state.guild.guildId,
        type: 2, // // 申请类型 1入会 2退会
        pageNum: 1,
        pageSize: 10
      },
      list: [] // 数据列表
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    // 同意
    dealApplyOut(obj = {}, index) {
      let params = {
        uid: this.$state.info.uid,
        ticket: this.$state.info.ticket,
        applyUid: obj.uid,
        recordId: obj.recordId
      };
      guildApplyDealApplyOut({ data: params, isReturnResponse: true }).then(res => {
        let result = res.data;
        if (result.code === 200) {
          this.$toast(`已同意${obj.userGeneralVo.nick}的退会申请`);
          // this.list.splice(index, 1);
        } else if (result.code === 60011) {
          this.$toast(result.message);
        }
        this.loading = true;
        this.finished = false;
        this.query.pageNum = 1;
        this.list = [];
        this.getData();
      });
    },
    onLoad() {
      this.query.pageNum++;
      this.getData();
    },
    // 获取数据
    getData() {
      guildApplyList({ data: this.query }).then(res => {
        if (res.code === 200) {
          this.loading = false;
          if (res.data.length) {
            // 当前时间
            let currentTime = +new Date();
            let result = res.data.map(item => {
              let createTime = item.createTime; // 用户申请退会时间戳
              let nextDay = createTime + (24 * 60 * 60 * 1000);
              let time = nextDay - currentTime;
              item.createTime = time;
              return item;
            });
            this.list = this.list.concat(result);
          } else {
            this.finished = true;
          }
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import './css/index.scss';
.count-down {
  font-size: 12px;
  color: #8c8c8c;
  margin-top: 6px;
  align-items: center;
  /deep/ .van-count-down {
    font-size: inherit;
    color: inherit;
    line-height: inherit;
  }
}
</style>