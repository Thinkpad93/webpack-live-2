<template>
  <div class="page">
    <div class="page-hd">
      <img src="./images/7c_hd.jpg" alt="">
    </div>
    <div class="page-bd">
      <div class="">
        <van-list :offset="50" :immediate-check="false">
          <ul class="list">
            <li class="item" v-for="item in list">
              <div class="hd"></div>
              <div class="bd">
                <div class="">
                  <img :src="item.loverUser.avatar" alt="" class="avatar">
                  <p>{{ item.loverUser.nick }}</p>
                </div>
                <div class="">
                  <img :src="item.user.avatar" alt="" class="avatar">
                  <p>{{ item.user.nick }}</p>
                </div>
              </div>
              <div class="ft"></div>
            </li>
          </ul>
        </van-list>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'Vue';
import { List } from 'vant';
Vue.use(List);

import service from '@/api';
export default {
  name: 'datingRank',
  data() {
    return {
      query: {
        pageNum: 1,
        pageSize: 10,
      },
      list: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 获取真爱榜数据
      service.datingRank(this.query).then((res) => {
        if (res.code === 200) {
          console.log(res);
          let result = res.data;
          if (result.length) {
            this.list = result;
          }
        }
      });
    },
  },
};
</script>
<style lang="scss">
@function px2rem($px, $rem: 75) {
  @return $px / $rem + rem;
}
body {
  background-color: #f0f0f0;
}
.page-bd {
  padding: px2rem(30);
}
.list {
  li {
    min-height: 160px;
    margin-bottom: 10px;
    background-color: #fff;
  }
}
.avatar {
  width: px2rem(100);
  height: px2rem(100);
  border-radius: 50%;
}
</style>
