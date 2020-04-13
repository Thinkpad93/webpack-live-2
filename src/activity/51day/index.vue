<template>
  <div class="page">
    <div class="page-hd">
      <div class="banner">
        <img
          src="https://img.erbanyy.com/default_head.png"
          alt=""
          height="160"
        />
      </div>
    </div>
    <div class="page-bd">
      <van-tabs
        class="page-tabs"
        v-model="active"
        animated
        line-width="6px"
        line-height="4px"
        color="#000"
        title-inactive-color="#8c8c8c"
        title-active-color="#262626"
        :border="false"
        @click="tabsClick"
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
                  <van-list>
                    <ul>
                      <li v-for="item in list[0].items">
                        <img :src="item.avatar" alt="" />
                        <p>{{ item.rankNo }}</p>
                        <p>{{ item.nick }}</p>
                        <p>{{ item.value }}</p>
                        <p
                          v-if="item.userRoomStatus"
                          @click="openRoom(item.uid)"
                        >
                          去找他->
                        </p>
                      </li>
                    </ul>
                  </van-list>
                </van-tab>
                <van-tab title="昨日榜单">
                  <van-list>
                    <ul>
                      <li v-for="item in list[1].items">
                        <img :src="item.avatar" alt="" />
                        <p>{{ item.rankNo }}</p>
                        <p>{{ item.nick }}</p>
                        <p>{{ item.value }}</p>
                        <p
                          v-if="item.userRoomStatus"
                          @click="openRoom(item.uid)"
                        >
                          去找他->
                        </p>
                      </li>
                    </ul>
                  </van-list>
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
                  <van-list>
                    <ul>
                      <li v-for="item in list[2].items">
                        <img :src="item.avatar" alt="" />
                        <p>{{ item.rankNo }}</p>
                        <p>{{ item.nick }}</p>
                        <p>{{ item.value }}</p>
                      </li>
                    </ul>
                  </van-list>
                </van-tab>
                <van-tab title="昨日榜单">
                  <van-list>
                    <ul>
                      <li v-for="item in list[3].items">
                        <img :src="item.avatar" alt="" />
                        <p>{{ item.rankNo }}</p>
                        <p>{{ item.nick }}</p>
                        <p>{{ item.value }}</p>
                      </li>
                    </ul>
                  </van-list>
                </van-tab>
              </van-tabs>
            </div>
          </div>
        </van-tab>
        <van-tab title="浪漫总榜">
          <div class="mod">
            <p>活动结束后榜单第十名可获得</p>
            <p>最佳浪漫头饰（30天）、粉红玛莎拉蒂（30天）</p>
            <div class="">
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </van-tab>
        <van-tab title="温馨总榜">
          <div class="mod">
            <p>活动结束后榜单第十名可获得</p>
            <p>首富头饰（30天）、深蓝玛莎拉蒂（30天）</p>
            <div class="">
              <!-- <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" /> -->
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="page-ft fixed" v-show="active != 0">
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
import Vue from "vue";
import { List, Tab, Tabs, CountDown } from "vant";
Vue.use(List)
  .use(Tab)
  .use(Tabs)
  .use(CountDown);

import service from "@/api";
import { serializeData, dateFormat } from "assets/js/utils";
import { getUid, openRoom } from "assets/js/appNativeFun";
import cookies from "assets/js/cookies";

export default {
  name: "51day",
  data() {
    return {
      active: 0,
      tabIndex: 0,
      time: 30 * 60 * 60 * 1000,
      uid: getUid() || cookies.get("uid") || "90106", //获取uid
      list: [
        {
          items: [],
          actId: 1,
          giftType: 1,
          rankType: 1,
          date: dateFormat(new Date(), "yyyy-MM-dd"), //查询时间
          dimension: 1,
          giftId: "",
          page: 1,
          pageSize: 10
        },
        {
          items: [],
          actId: 1,
          giftType: 1,
          rankType: 2,
          date: dateFormat(new Date(), "yyyy-MM-dd"), //查询时间
          dimension: 1,
          giftId: "",
          page: 1,
          pageSize: 10
        },
        {
          items: [],
          actId: 1,
          giftType: 2,
          rankType: 1,
          date: dateFormat(new Date(), "yyyy-MM-dd"), //查询时间
          dimension: 1,
          giftId: "",
          page: 1,
          pageSize: 10
        },
        {
          items: [],
          actId: 1,
          giftType: 2,
          rankType: 2,
          date: dateFormat(new Date(), "yyyy-MM-dd"), //查询时间
          dimension: 1,
          giftId: "",
          page: 1,
          pageSize: 10
        },
        {
          items: [],
          actId: 1,
          giftType: 1,
          rankType: 1,
          date: dateFormat(new Date(), "yyyy-MM-dd"), //查询时间
          dimension: 4,
          giftId: "",
          page: 1,
          pageSize: 10
        },
        {
          items: [],
          actId: 1,
          giftType: 2,
          rankType: 1,
          date: dateFormat(new Date(), "yyyy-MM-dd"), //查询时间
          dimension: 4,
          giftId: "",
          page: 1,
          pageSize: 10
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      //todo...
      this.getData(0);
    },
    tabsClick() {
      console.log("e");
    },
    //请求榜单数据
    getData(index) {
      let { items, ...args } = this.list[index];
      service.labouractRanking(serializeData(args)).then(res => {
        if (res.data.code === 200) {
          let result = res.data.data;
          if (result.length) {
            this.list[index].items =result;
          }
        }
      });
      this.getUserRank(args);
    },
    getUserRank(obj = {}) {
      let { page, pageSize, ...args } = obj;
      let params = Object.assign({}, { uid: this.uid }, args);
      console.log(params);
      service.labouractRankingByUid(serializeData(params)).then(res => {
        console.log(res);
      });
    },
    //打开房间
    openRoom(params = {}) {
      console.log(params);
    }
  }
};
</script>
<style lang="scss">
@import "./css/index";
</style>
