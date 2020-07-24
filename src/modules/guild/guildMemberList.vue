<template>
  <div class="page">
    <header-bar title="公会成员列表"></header-bar>
    <div class="page-bd">
      <!-- <user-list :list-data="leaderList">
        <template #default="{ row }">
          <div class="ids">贡献值: {{ $utils.dealScore(row.amount) }}</div>
        </template>
        <template #handle>
          <div class="role">会长</div>
        </template>
      </user-list> -->
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
            <template v-if="row.position === 0 && $index != 0">
              <b class="b admin" @click="handleAdmin(row)">管理</b>
            </template>
            <template v-if="$index == 0">
              <div class="role">会长</div>
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
      // position: this.$state.guild.position, // 角色
      query: {
        guildId: this.$state.guild.guildId,
        pageNum: 1,
        pageSize: 10
      },
      leader: {},
      expelParmas: {
        guildId: this.$state.guild.guildId,
        uid: this.$state.info.uid,
        ticket: this.$state.info.ticket,
        memberUid: null,
        memberName: ''
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
    // 打开个人中心
    handlePersonPage(uid) {
      return this.$utils.appTools.jumpAppointPage('PERSON_PAGE', uid);
    },
    handleAdmin(row) {
      this.expelParmas.memberName = row.userGeneralVo.nick;
      this.expelParmas.memberUid = row.uid;
      this.actionSheetVisible = true;
    },
    onSelect(item) {
      let { memberName, ...args } = this.expelParmas; // eslint-disable-line no-unused-vars
      Dialog.confirm({
        title: '提示',
        message: `是否确认开除${memberName}`
      }).then(() => {
        guildMemberExpel({ data: args }).then(res => {
          if (res.code === 200) {
            this.actionSheetVisible = false;
            this.$toast(`已开除${memberName}`);
          }
        });
      });
    },
    onLoad() {
      this.query.pageNum++;
      this.getData();
    },
    // 获取数据
    getData() {
      guildRankMemberTotal({ data: this.query, loading: { show: true }}).then(res => {
        if (res.code === 200) {
          this.loading = false;
          let leader = res.data.leader; // 会长信息
          let rankings = res.data.rankings;
          let leaderList = [];
          let rankingsList = [];
          if (rankings.length) {
            rankings.forEach(item => {
              if (item.position != leader.position) {
                rankingsList.push(item);
              } else {
                leaderList.push(item);
              }
            });
            let result = leaderList.concat(rankingsList);
            this.list = this.list.concat(result);
            // console.log(leaderList);
            // let result = rankings.filter(item => {
            //   if (item.position != leader.position) {
            //     return item;
            //   } else {
            //     if (!this.leaderList.length) {
            //       this.leaderList.push(item);
            //     }
            //   }
            // });
            // this.list = this.list.concat(result);
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