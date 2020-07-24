<template>
  <div class="page">
    <header-bar>
      <router-link to="/guildAudioAdd">发公告</router-link>
    </header-bar>
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
  name: 'GuildAudioList',
  components: {
    HeaderBar
  },
  data() {
    return {
      list: [
        {
          items: [],
          pageNum: 1,
          pageSize: 10,
          loading: false,
          finished: false
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped></style>