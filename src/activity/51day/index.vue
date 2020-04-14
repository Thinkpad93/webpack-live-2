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
        @change="tabsChange"
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
                  <van-list
                    v-model="list[0].loading"
                    :finished="list[0].finished"
                    :offset="10"
                    :immediate-check="false"
                    @load="onLoad(0)"
                  >
                    <ul>
                      <li class="user flex" v-for="item in list[0].items">
                        <div class="user-hd">No{{ item.rankNo }}</div>
                        <div class="user-bd flex flex-1">
                          <img class="avatar" :src="item.avatar" alt="" />
                          <div class="user-info">
                            <h5 class="text-ellipsis">{{ item.nick }}</h5>
                            <span>浪漫值{{ item.value | formatTotal }}</span>
                          </div>
                        </div>
                        <div class="user-ft" v-show="item.userRoomStatus">
                          去找他->
                        </div>
                      </li>
                    </ul>
                  </van-list>
                </van-tab>
                <van-tab title="昨日榜单">
                  <van-list
                    v-model="list[1].loading"
                    :finished="list[1].finished"
                    :offset="10"
                    :immediate-check="false"
                    @load="onLoad(1)"
                  >
                    <ul>
                      <li class="user flex" v-for="item in list[1].items">
                        <div class="user-hd">No{{ item.rankNo }}</div>
                        <div class="user-bd flex flex-1">
                          <img class="avatar" :src="item.avatar" alt="" />
                          <div class="user-info">
                            <h5 class="text-ellipsis">{{ item.nick }}</h5>
                            <span>浪漫值{{ item.value | formatTotal }}</span>
                          </div>
                        </div>
                        <div class="user-ft" v-show="item.userRoomStatus">
                          去找他->
                        </div>
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
              <van-tabs v-model="tabIndexs">
                <van-tab title="今日榜单">
                  <van-list
                    v-model="list[2].loading"
                    :finished="list[2].finished"
                    :offset="10"
                    :immediate-check="false"
                    @load="onLoad(2)"
                  >
                    <ul>
                      <li class="user flex" v-for="item in list[2].items">
                        <div class="user-hd">No{{ item.rankNo }}</div>
                        <div class="user-bd flex flex-1">
                          <img class="avatar" :src="item.avatar" alt="" />
                          <div class="user-info">
                            <h5 class="text-ellipsis">{{ item.nick }}</h5>
                            <span>浪漫值{{ item.value | formatTotal }}</span>
                          </div>
                        </div>
                        <div class="user-ft" v-show="item.userRoomStatus">
                          去找他->
                        </div>
                      </li>
                    </ul>
                  </van-list>
                </van-tab>
                <van-tab title="昨日榜单">
                  <van-list
                    v-model="list[3].loading"
                    :finished="list[3].finished"
                    :offset="10"
                    :immediate-check="false"
                    @load="onLoad(3)"
                  >
                    <ul>
                      <li class="user flex" v-for="item in list[3].items">
                        <div class="user-hd">No{{ item.rankNo }}</div>
                        <div class="user-bd flex flex-1">
                          <img class="avatar" :src="item.avatar" alt="" />
                          <div class="user-info">
                            <h5 class="text-ellipsis">{{ item.nick }}</h5>
                            <span>浪漫值{{ item.value | formatTotal }}</span>
                          </div>
                        </div>
                        <div class="user-ft" v-show="item.userRoomStatus">
                          去找他->
                        </div>
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
              <van-list
                v-model="list[4].loading"
                :finished="list[4].finished"
                :offset="10"
                :immediate-check="false"
                @load="onLoad(4)"
              >
                <ul>
                  <li class="user flex" v-for="item in list[4].items">
                    <div class="user-hd">No{{ item.rankNo }}</div>
                    <div class="user-bd flex flex-1">
                      <img class="avatar" :src="item.avatar" alt="" />
                      <div class="user-info">
                        <h5 class="text-ellipsis">{{ item.nick }}</h5>
                        <span>浪漫值{{ item.value | formatTotal }}</span>
                      </div>
                    </div>
                    <div class="user-ft" v-show="item.userRoomStatus">
                      去找他->
                    </div>
                  </li>
                </ul>
              </van-list>
            </div>
          </div>
        </van-tab>
        <van-tab title="温馨总榜">
          <div class="mod">
            <p>活动结束后榜单第十名可获得</p>
            <p>首富头饰（30天）、深蓝玛莎拉蒂（30天）</p>
            <div class="">
              <!-- <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" /> -->
              <van-list
                v-model="list[5].loading"
                :finished="list[5].finished"
                :offset="10"
                :immediate-check="false"
                @load="onLoad(5)"
              >
                <ul>
                  <li class="user flex" v-for="item in list[5].items">
                    <div class="user-hd">No{{ item.rankNo }}</div>
                    <div class="user-bd flex flex-1">
                      <img class="avatar" :src="item.avatar" alt="" />
                      <div class="user-info">
                        <h5 class="text-ellipsis">{{ item.nick }}</h5>
                        <span>浪漫值{{ item.value | formatTotal }}</span>
                      </div>
                    </div>
                    <div class="user-ft" v-show="item.userRoomStatus">
                      去找他->
                    </div>
                  </li>
                </ul>
              </van-list>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="page-ft fixed" v-show="active != 0">
      <div class="person flex">
        <div class="person-hd">
          {{ user.rankNo == 0 ? "未上榜" : "No" + user.rankNo }}
        </div>
        <div class="person-bd flex flex-1">
          <img class="avatar" :src="user.avatar" alt="" />
          <div class="person-info">
            <p>{{ user.nick }}</p>
          </div>
        </div>
        <div class="persion-ft">
          <span class="amount">{{ user.value | formatTotal }}</span>
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
import { getQueryString, serializeData, dateFormat } from "assets/js/utils";
import { getUid, openRoom } from "assets/js/appNativeFun";
import cookies from "assets/js/cookies";

import mixins from "@/mixins/page";

export default {
  name: "51day",
  mixins: [mixins],
  data() {
    return {
      active: 0,
      tabIndex: 0,
      tabIndesx: 0,
      time: 30 * 60 * 60 * 1000,
      uid: getUid() || cookies.get("uid") || "90293691", //获取uid
      user: {}, //用户信息
      actStatus: "", //活动状态 1运行 2结束
      actEndDate: "", //结束时间
      querySearch: getQueryString(),
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
          pageSize: 10,
          loading: false,
          finished: false
        },
        {
          items: [],
          actId: 1,
          giftType: 1,
          rankType: 1,
          date: "2020-04-13", //查询时间
          dimension: 1,
          giftId: "",
          page: 1,
          pageSize: 10,
          loading: false,
          finished: false
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
          pageSize: 10,
          loading: false,
          finished: false
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
          pageSize: 10,
          loading: false,
          finished: false
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
          pageSize: 10,
          loading: false,
          finished: false
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
          pageSize: 10,
          loading: false,
          finished: false
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  filters: {
    formatTotal: function(val) {
      if (val > 10000) {
        var r = (val / 10000).toFixed(1);
        return r + "w";
      } else {
        return val;
      }
    }
  },
  methods: {
    init() {
      //todo...
      this.getUserRank(0);
      for (let i = 0; i <= 5; i++) {
        this.getData(i);
      }
      //this.labouractStatus(this.querySearch.actId);
    },
    tabsChange(index, title) {
      let i = index - 1;
    },
    //打开房间
    openRoom(params = {}) {
      console.log(params);
    },
    onLoad(index) {
      const obj = this.list[index];
      obj.page += 1; //请求下一页
      let { items, loading, finished, ...args } = obj;
      console.log(args);
      if (args.page > 10) {
        //设置请求完成
        obj.finished = true;
        return;
      }
      service.labouractRanking(serializeData(args)).then(res => {
        if (res.data.code === 200) {
          // 加载状态结束
          obj.loading = false;
          let result = res.data.data;
          if (result.length) {
            for (let i = 0; i < result.length; i++) {
              obj.items.push(result[i]);
            }
          } else {
            obj.finished = true;
          }
        }
      });
    },
    //请求榜单数据
    getData(index) {
      let { items, loading, finished, ...args } = this.list[index];
      service.labouractRanking(serializeData(args)).then(res => {
        if (res.data.code === 200) {
          let result = res.data.data;
          if (result.length) {
            this.list[index].items = result;
          }
        }
      });
      //请求个人榜单值
      //this.getUserRank(args);
    },
    getUserRank(index) {
      let { items, page, pageSize, loading, finished, ...args } = this.list[
        index
      ];
      let params = Object.assign({}, { uid: this.uid }, args);
      console.log(params);
      service.labouractRankingByUid(serializeData(params)).then(res => {
        if (res.data.code === 200) {
          let result = res.data.data;
          this.user = Object.assign({}, result);
        }
      });
    },
    //活动状态
    labouractStatus(actId) {
      service.labouractStatus({ actId }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style lang="scss">
@import "./css/index";
</style>
