<template>
  <div class="page">
    <div class="page-hd">
      <div class="banner"></div>
      <SwipeCell />
    </div>
    <div class="page-bd">
      <van-tabs
        v-model="active"
        animated
        line-width="6px"
        line-height="4px"
        color="#000"
        title-inactive-color="#8c8c8c"
        title-active-color="#262626"
        :border="false"
      >
        <van-tab title="活动规则">
          <div class="mod">
            <p>劳动节上线3款限时礼物！</p>
          </div>
        </van-tab>
        <van-tab title="浪漫榜">
          <div class="mod">
            <p>每天榜单前十名可获得</p>
            <p>浪漫头饰（3天）和粉红小摩托（1天）</p>
            <div class="">
              <van-tabs v-model="tabIndex">
                <van-tab title="今日榜单">
                  <ul>
                    <li v-for="item in 10">{{ item }}</li>
                  </ul>
                </van-tab>
                <van-tab title="昨日榜单">
                  <ul>
                    <li v-for="item in 20">{{ item }}</li>
                  </ul>
                </van-tab>
              </van-tabs>
            </div>
          </div>
        </van-tab>
        <van-tab title="温馨榜">
          <div class="mod">
            <p>每天榜单前十名可获得</p>
            <p>温馨头饰（3天）和深蓝小摩托（1天）</p>
            <div class="">
              <van-tabs v-model="tabIndex">
                <van-tab title="今日榜单">
                  <ul>
                    <li v-for="item in 10">{{ item }}</li>
                  </ul>
                </van-tab>
                <van-tab title="昨日榜单">
                  <ul>
                    <li v-for="item in 20">{{ item }}</li>
                  </ul>
                </van-tab>
              </van-tabs>
            </div>
          </div>
        </van-tab>
        <van-tab title="浪漫总榜">
          <div class="mod">
            <p>活动结束后榜单第十名可获得</p>
            <p>最佳浪漫头饰（30天）、粉红玛莎拉蒂（30天）</p>
            <div class=""></div>
          </div>
        </van-tab>
        <van-tab title="温馨总榜">
          <div class="mod">
            <p>活动结束后榜单第十名可获得</p>
            <p>首富头饰（30天）、深蓝玛莎拉蒂（30天）</p>
            <div class="">
              <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="page-ft fixed">
      <div class="person">
        <div class="person-bd">
          <div class="avatar">
            <img src="" alt="" />
          </div>
        </div>
        <div class="persion-ft">
          <span class="amount"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Vue from "vue";
// import { Tab, Tabs, CountDown } from "vant";
// Vue.use(Tab).use(Tabs).use(CountDown);

import service from "@/api";
import { openRoom } from "assets/js/appNativeFun";

import SwipeCell from "@/components/SwipeCell";

export default {
  name: "51day",
  components: {
    SwipeCell
  },
  data() {
    return {
      active: 0,
      tabIndex: 0,
      time: 30 * 60 * 60 * 1000
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      //todo...
      let obj = Object.assign({}, { name: "Jack", age: 25 });
      console.log(obj);
      let result = (name) => {
        console.log(`${name}`);
      }
      result(obj.name);
    }
  }
};
</script>
<style lang="scss">
@import "./css/index";
</style>
