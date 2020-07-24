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
import Empty from './components/Empty';
Vue.use(List);

export default {
  name: 'GuildJoinList',
  components: {
    HeaderBar,
    Empty
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
  },
  methods: {
    handleAgree(obj = {}) {

    }
  }
};
</script>
<style lang="scss" scoped></style>