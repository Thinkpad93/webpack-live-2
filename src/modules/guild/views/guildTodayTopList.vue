<template>
  <div class="page">
    <header-bar title="今日捐献榜单"></header-bar>
    <div class="page-bd">
      <van-list
        :offset="10"
        :immediate-check="false"
        v-model="loading"
        :finished="finished"
        @load="onLoad">
        <user-list :list-data="list">
          <template #default="{ row }">
            <div class="ids">今日贡献值: {{ $utils.dealScore(row.amount) }}</div>
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
import { guildRankMemberDay } from '@/api/guild';
Vue.use(List);

export default {
  name: 'GuildTodayTopList',
  components: {
    HeaderBar,
    UserList
  },
  data() {
    return {
      loading: false,
      finished: false,
      query: {
        uid: this.$state.info.uid,
        ticket: this.$state.info.ticket,
        guildId: this.$state.guild.guildId,
        date: this.$utils.formatDate(new Date(), 'yyyy-MM-dd'),
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
    // 打开个人中心
    handlePersonPage(uid) {
      return this.$utils.appTools.jumpAppointPage('PERSON_PAGE', uid);
    },
    onLoad() {
      this.query.pageNum++;
      this.getData();
    },
    // 获取数据
    getData() {
      guildRankMemberDay({ data: this.query }).then(res => {
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