<template>
  <div class="page">
    <header-bar></header-bar>
    <div class="page-bd">
      <van-list
        :offset="10"
        :immediate-check="false"
        v-model="list[0].loading"
        :finished="list[0].finished">
      </van-list>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { List } from 'vant';
import HeaderBar from './components/HeaderBar';
Vue.use(List);

export default {
  name: 'GuildRoomList',
  components: {
    HeaderBar
  },
  data() {
    return {
      list: [
        {
          items: [],
          pageNum: 1,
          pageSize: 30,
          loading: false,
          finished: false
        }
      ]
    };
  },
  methods: {
    // 跳转个人房间
    handleRoomPage(uid) {
      return this.$utils.appTools.jumpAppointPage('ROOM_PAGE', uid);
    }
  }
};
</script>
<style lang="scss" scoped></style>