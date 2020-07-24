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
import { List, CountDown } from 'vant';
import HeaderBar from './components/HeaderBar';
Vue.use(List).use(CountDown);

export default {
  name: 'GuildExitList',
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