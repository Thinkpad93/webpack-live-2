<template>
  <div class="page">
    <header-bar title="公会房间列表"></header-bar>
    <div class="page-bd">
      <van-list
        :offset="10"
        :immediate-check="false"
        v-model="loading"
        :finished="finished"
        @load="onLoad">
        <room-list :list-data="list"></room-list>
      </van-list>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { List } from 'vant';
import HeaderBar from './components/HeaderBar';
import RoomList from './components/RoomList';
import { guildRoomList } from '@/api/guild';
Vue.use(List);

export default {
  name: 'GuildRoomList',
  components: {
    HeaderBar,
    RoomList
  },
  data() {
    return {
      loading: false,
      finished: false,
      query: {
        guildId: this.$state.guild.guildId,
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
    onLoad() {
      this.query.pageNum++;
      this.getData();
    },
    // 获取数据
    getData() {
      guildRoomList({ data: this.query }).then(res => {
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