<template>
  <div class="page">
    <header-bar title="入会申请"></header-bar>
    <div class="page-bd">
      <!-- <base-empty /> -->
      <van-list
        :offset="10"
        :immediate-check="false"
        v-model="loading"
        :finished="finished"
        @load="onLoad">
        <user-list :list-data="list" :show-nameplate="false">
          <template #default="{ row }">
            <div class="ids">ID: {{ row.userGeneralVo.erbanNo }}</div>
          </template>
          <template #handle="{ row, $index }">
            <b class="b agree" @click="dealApplyIn(row, 2, $index)">同意</b>
            <b class="b refused" @click="dealApplyIn(row, 3, $index)">拒绝</b>
          </template>
        </user-list>
      </van-list>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { List } from 'vant';
import HeaderBar from './components/HeaderBar';
import UserList from './components/UserList';
// import BaseEmpty from './components/Empty';
import { guildApplyList, guildApplyDealApplyIn } from '@/api/guild';
Vue.use(List);

export default {
  name: 'GuildJoinList',
  components: {
    HeaderBar,
    UserList
    // BaseEmpty
  },
  data() {
    return {
      loading: false,
      finished: false,
      query: {
        guildId: this.$state.guild.guildId,
        type: 1, // 申请类型 1入会 2退会
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
    // 会长入会审批 2-同意3-拒绝
    dealApplyIn(obj = {}, type, index) {
      let params = {
        uid: this.$state.info.uid,
        ticket: this.$state.info.ticket,
        applyUid: obj.uid,
        recordId: obj.recordId,
        type
      };
      guildApplyDealApplyIn({ data: params, loading: { show: true }}).then(res => {
        if (res.code === 200) {
          if (type == 2) {
            this.$toast(`已同意${obj.userGeneralVo.nick}的入会申请`);
          } else {
            this.$toast(`已拒绝${obj.userGeneralVo.nick}的入会申请`)
          }
          this.list.splice(index, 1);
        }
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
            this.list = this.list.concat(res.data);
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
</style>