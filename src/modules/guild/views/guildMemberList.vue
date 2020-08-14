<template>
  <div class="page">
    <header-bar title="公会成员列表"></header-bar>
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
            <template v-if="position === 0 && $index != 0">
              <b class="b admin" @click="handleAdmin(row, $index)">管理</b>
            </template>
            <template v-if="$index == 0">
              <img src="./assets/ic-president.png" alt="" width="38" height="20">
              <!-- <div class="role">会长</div> -->
            </template>
          </template>
        </user-list>
      </van-list>
      <van-action-sheet
        class="page-action-sheet"
        v-model="actionSheetVisible"
        :actions="actions"
        cancel-text="取消"
        @select="onSelect"
      />
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { Dialog, List, ActionSheet } from 'vant';
import HeaderBar from './components/HeaderBar';
import UserList from './components/UserList';
import { guildRankMemberTotal, guildMemberExpel } from '@/api/guild';
Vue.use(List).use(ActionSheet);

export default {
  name: 'GuildMemberList',
  components: {
    HeaderBar,
    UserList
  },
  data() {
    return {
      actionSheetVisible: false,
      loading: false,
      finished: false,
      position: this.$state.guild.position, // 角色
      query: {
        guildId: this.$state.guild.guildId,
        uid: this.$state.info.uid,
        ticket: this.$state.info.ticket,
        pageNum: 1,
        pageSize: 10
      },
      expelParmas: {
        guildId: this.$state.guild.guildId,
        uid: this.$state.info.uid,
        ticket: this.$state.info.ticket,
        memberUid: null,
        memberName: '',
        index: 0 // 记录点击索引
      },
      // 通过color设置选项的颜色
      actions: [{ name: '开除成员', color: '#ff0f3a' }],
      leaderList: [],
      list: [] // 数据列表
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    handleAdmin(row, index) {
      this.expelParmas.memberName = row.userGeneralVo.nick;
      this.expelParmas.memberUid = row.uid;
      this.expelParmas.index = index;
      this.actionSheetVisible = true;
    },
    onSelect(item) {
      let { memberName, index, ...args } = this.expelParmas; // eslint-disable-line no-unused-vars
      Dialog.confirm({
        title: '提示',
        message: `是否确认开除${memberName}`
      }).then(() => {
        guildMemberExpel({ data: args, isReturnResponse: true }).then(res => {
          let result = res.data;
          if (result.code === 200) {
            // this.list.splice(index, 1);
            this.$toast(`已开除${memberName}`);
          } else if (result.code === 60001) {
            this.$toast(result.message);
          }
          this.actionSheetVisible = false;
          this.loading = true;
          this.finished = false;
          this.query.pageNum = 1;
          this.leaderList = [];
          this.list = [];
          this.getData();
        });
      });
    },
    onLoad() {
      this.loading = true;
      this.query.pageNum++;
      setTimeout(() => {
        this.getData();
      }, 500);
    },
    // 获取数据
    getData() {
      guildRankMemberTotal({ data: this.query }).then(res => {
        if (res.code === 200) {
          this.loading = false;
          let leader = res.data.leader; // 会长信息
          let rankings = res.data.rankings;
          let rankingsList = [];
          let result;
          if (rankings.length) {
            rankings.forEach(item => {
              if (item.position != leader.position) {
                rankingsList.push(item);
              }
            });
            if (!this.leaderList.length) {
              this.leaderList.push(leader);
              result = this.leaderList.concat(rankingsList);
            } else {
              result = this.list.concat(rankingsList);
            }
            console.log(result);
            this.list = result;
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
.page-action-sheet {
  padding: 0 px2rem(30) 10px px2rem(30);
  background-color: transparent;
  .van-popup--bottom.van-popup--round {
    position: relative;
  }
  .van-action-sheet__gap {
    background-color: transparent;
  }
  button {
    border-radius: 12px;
    &::after {
      border: none;
    }
  }
}
</style>