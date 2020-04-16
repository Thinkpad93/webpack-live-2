<template>
  <div class="page">
    <div class="page-hd">
      <div class="banner">
        <img src="./images/banner.png" alt="" />
      </div>
      <div class="act-time text-center fs-16">4月27日-5月11日</div>
      <div class="act-desc text-center">
        <div class="act-desc-box fs-15 lh-2">
          <p>爱情需要诺言更需要陪伴</p>
          <p>陪伴是最长情的告白</p>
          <p>在五一长假营造最浪漫的气氛。</p>
          <p>五一有假，浪漫无价！</p>
        </div>
      </div>
    </div>
    <div class="page-bd">
      <van-tabs
        class="page-tabs"
        v-model="active"
        animated
        line-width="0px"
        line-height="0px"
        color="#000"
        title-active-color="#a34400"
        :border="false"
        @change="tabsChange"
      >
        <van-tab title="活动规则">
          <div class="container">
            <div class="mod mod-skin mb-16">
              <div class="mod-box text-center">
                <img src="./images/title.png" alt="" width="308" height="35" />
                <div class="mod flex flex-wrap" style="margin: 0 -4px;">
                  <div class="col" style="width: 33.3333%;">
                    <div class="award"></div>
                  </div>
                  <div class="col" style="width: 33.3333%;">
                    <div class="award"></div>
                  </div>
                  <div class="col" style="width: 33.3333%;">
                    <div class="award"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mod mod-skin mb-16">
              <div class="mod-box text-center fs-14 lh-2">
                <img src="./images/title2.png" alt="" width="218" height="35" />
                <p>活动期间上架3款劳动节限时礼物!!</p>
                <p>收到赠送的限时礼物可获得相对应的浪漫值；</p>
                <p>送出限时礼物可获得相对应的温馨值；</p>
              </div>
            </div>
            <div class="mod mod-skin mb-16">
              <div class="mod-box text-center fs-14">
                <img src="./images/title3.png" alt="" width="308" height="35" />
                <p class="lh-2">
                  每天获得浪漫值或温馨值日榜前10名的可获得相对应的头饰奖励以及座驾奖励
                </p>
                <div class="mod flex flex-wrap" style="margin: 0 -4px;">
                  <div class="col">
                    <div class="award">
                      <div class="lg-1 rank">日榜浪漫奖励</div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="award">
                      <div class="lg-2 rank">日榜温馨奖励</div>
                    </div>
                  </div>
                </div>
                <p class="lh-2">
                  在活动结束后浪漫榜第一和温馨榜第一更能获得玛莎拉蒂座驾
                </p>
                <div class="mod flex flex-wrap" style="margin: 0 -4px;">
                  <div class="col">
                    <div class="award">
                      <div class="lg-1 rank">总榜浪漫奖励</div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="award">
                      <div class="lg-2 rank">总榜温馨奖励</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mod text-center fs-14 lh-2">
              <img
                src="https://img.erbanyy.com/default_head.png"
                alt=""
                width="149"
                height="149"
              />
              <p>
                bibi约玩微信公众号
              </p>
              <p>本活动最终解释权归bibi约玩所有</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="浪漫榜">
          <div class="container">
            <div class="mod mod-skin mb-20">
              <div class="mod-box">
                <p>每天榜单前十名可获得</p>
                <p>浪漫头饰（3天）和粉红小摩托（1天）</p>
                <div class="circle-1"></div>
              </div>
            </div>
            <div class="mod mod-skin mb-20">
              <div class="mod-box">
                <div class="">
                  <van-tabs
                    v-model="tabIndex"
                    line-width="50%"
                    line-height="2px"
                    :border="false"
                    @change="tabsLmChange"
                  >
                    <van-tab title="今日榜单">
                      <van-list
                        v-model="list[0].loading"
                        :finished="list[0].finished"
                        :offset="10"
                        :immediate-check="false"
                        @load="onLoad(0)"
                      >
                        <user :data="list[0].items" @on-click="onUserClick"/>
                        <!-- <ul>
                          <li
                            class="user flex"
                            :class="{
                              no1: item.rankNo == 1,
                              no2: item.rankNo == 2,
                              no3: item.rankNo == 3,
                            }"
                            v-for="item in list[0].items"
                          >
                            <div class="user-hd">
                              <template v-if="item.rankNo == 1">
                                <img
                                  src="./images/ic-1st.png"
                                  alt=""
                                  width="16.5"
                                  height="21"
                                />
                              </template>
                              <template v-else-if="item.rankNo == 2">
                                <img
                                  src="./images/ic-2st.png"
                                  alt=""
                                  width="16.5"
                                  height="21"
                                />
                              </template>
                              <template v-else-if="item.rankNo == 3">
                                <img
                                  src="./images/ic-3st.png"
                                  alt=""
                                  width="16.5"
                                  height="21"
                                />
                              </template>
                              <template v-else>
                                {{ item.rankNo }}
                              </template>
                            </div>
                            <div class="user-bd flex flex-1">
                              <div class="figure flex">
                                <img class="avatar" :src="item.avatar" alt="" />
                              </div>
                              <div class="user-info">
                                <h5 class="text-ellipsis">{{ item.nick }}</h5>
                                <span
                                  >浪漫值{{ item.value | formatTotal }}</span
                                >
                              </div>
                            </div>
                            <div
                              class="user-ft flex"
                              v-show="item.userRoomStatus"
                              @click="openRoom(item.uid)"
                            >
                              <div class="go text-center">
                                去找TA
                              </div>
                            </div>
                          </li>
                        </ul> -->
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
                      <user :data="list[1].items" @on-click="onUserClick"/>
                        <!-- <ul>
                          <li
                            class="user flex"
                            :class="{
                              no1: item.rankNo == 1,
                              no2: item.rankNo == 2,
                              no3: item.rankNo == 3,
                            }"
                            v-for="item in list[1].items"
                          >
                            <div class="user-hd">{{ item.rankNo }}</div>
                            <div class="user-bd flex flex-1">
                              <div class="figure flex">
                                <img class="avatar" :src="item.avatar" alt="" />
                              </div>
                              <div class="user-info">
                                <h5 class="text-ellipsis">{{ item.nick }}</h5>
                                <span
                                  >浪漫值{{ item.value | formatTotal }}</span
                                >
                              </div>
                            </div>
                            <div
                              class="user-ft flex"
                              v-show="item.userRoomStatus"
                              @click="openRoom(item.uid)"
                            >
                              <div class="go text-center">
                                去找TA
                              </div>
                            </div>
                          </li>
                        </ul> -->
                      </van-list>
                    </van-tab>
                  </van-tabs>
                  <!-- 没有数据 -->
                  <div class="default text-center">
                    <img
                      src="./images/default.png"
                      alt=""
                      width="118"
                      height="118"
                    />
                    <p>活动暂未开启，敬请期待</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="温馨榜">
          <div class="container">
            <div class="mod mod-skin mb-20">
              <div class="mod-box">
                <p>每天榜单前十名可获得</p>
                <p>温馨头饰（3天）和深蓝小摩托（1天）</p>
              </div>
            </div>
            <div class="mod mod-skin mb-20">
              <div class="mod-box">
                <div class="">
                  <van-tabs
                    v-model="tabIndexs"
                    line-width="50%"
                    line-height="2px"
                    :border="false"
                  >
                    <van-tab title="今日榜单">
                      <van-list
                        v-model="list[2].loading"
                        :finished="list[2].finished"
                        :offset="10"
                        :immediate-check="false"
                        @load="onLoad(2)"
                      >
                      <user :data="list[2].items" :textType="2" @on-click="onUserClick"/>
                        <!-- <ul>
                          <li
                            class="user flex"
                            :class="{
                              no1: item.rankNo == 1,
                              no2: item.rankNo == 2,
                              no3: item.rankNo == 3,
                            }"
                            v-for="item in list[2].items"
                          >
                            <div class="user-hd">{{ item.rankNo }}</div>
                            <div class="user-bd flex flex-1">
                              <div class="figure flex">
                                <img class="avatar" :src="item.avatar" alt="" />
                              </div>
                              <div class="user-info">
                                <h5 class="text-ellipsis">{{ item.nick }}</h5>
                                <span
                                  >浪漫值{{ item.value | formatTotal }}</span
                                >
                              </div>
                            </div>
                            <div
                              class="user-ft flex"
                              v-show="item.userRoomStatus"
                              @click="openRoom(item.uid)"
                            >
                              <div class="go text-center">
                                去找TA
                              </div>
                            </div>
                          </li>
                        </ul> -->
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
                        <user :data="list[2].items" :textType="2" @on-click="onUserClick"/>
                        <!-- <ul>
                          <li
                            class="user flex"
                            :class="{
                              no1: item.rankNo == 1,
                              no2: item.rankNo == 2,
                              no3: item.rankNo == 3,
                            }"
                            v-for="item in list[3].items"
                          >
                            <div class="user-hd">{{ item.rankNo }}</div>
                            <div class="user-bd flex flex-1">
                              <div class="figure flex">
                                <img class="avatar" :src="item.avatar" alt="" />
                              </div>
                              <div class="user-info">
                                <h5 class="text-ellipsis">{{ item.nick }}</h5>
                                <span
                                  >浪漫值{{ item.value | formatTotal }}</span
                                >
                              </div>
                            </div>
                            <div
                              class="user-ft flex"
                              v-show="item.userRoomStatus"
                              @click="openRoom(item.uid)"
                            >
                              <div class="go text-center">
                                去找TA
                              </div>
                            </div>
                          </li>
                        </ul> -->
                      </van-list>
                    </van-tab>
                  </van-tabs>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="浪漫总榜">
          <div class="container">
            <div class="mod mod-skin mb-20">
              <div class="mod-box">
                <p>活动结束后榜单第十名可获得</p>
                <p>最佳浪漫头饰（30天）、粉红玛莎拉蒂（30天）</p>
              </div>
            </div>
            <div class="mod mod-skin mb-20">
              <div class="mod-box">
                <div class="">
                  <div class="act-endTime flex fs-16">
                    <!-- 1活动运行 2活动结束 -->
                    <p v-if="actObj.actStatus == 1" style="color: #cf3650;">
                      距离活动结束时间：
                      <van-count-down :time="time" format="DD天HH时mm分ss秒" />
                    </p>
                    <p v-else style="color: #999;">活动已结束</p>
                  </div>
                  <van-list
                    v-model="list[4].loading"
                    :finished="list[4].finished"
                    :offset="10"
                    :immediate-check="false"
                    @load="onLoad(4)"
                  >
                  <user :data="list[4].items" @on-click="onUserClick"/>
                    <!-- <ul>
                      <li
                        class="user flex"
                        :class="{
                          no1: item.rankNo == 1,
                          no2: item.rankNo == 2,
                          no3: item.rankNo == 3,
                        }"
                        v-for="item in list[4].items"
                      >
                        <div class="user-hd">
                          <template v-if="item.rankNo == 1">
                            <img
                              src="./images/ic-1st.png"
                              alt=""
                              width="16.5"
                              height="21"
                            />
                          </template>
                          <template v-else-if="item.rankNo == 2">
                            <img
                              src="./images/ic-2st.png"
                              alt=""
                              width="16.5"
                              height="21"
                            />
                          </template>
                          <template v-else-if="item.rankNo == 3">
                            <img
                              src="./images/ic-3st.png"
                              alt=""
                              width="16.5"
                              height="21"
                            />
                          </template>
                          <template v-else>
                            {{ item.rankNo }}
                          </template>
                        </div>
                        <div class="user-bd flex flex-1">
                          <div class="figure flex">
                            <img class="avatar" :src="item.avatar" alt="" />
                          </div>
                          <div class="user-info">
                            <h5 class="text-ellipsis">{{ item.nick }}</h5>
                            <span>浪漫值{{ item.value | formatTotal }}</span>
                          </div>
                        </div>
                        <div
                          class="user-ft flex"
                          v-show="item.userRoomStatus"
                          @click="openRoom(item.uid)"
                        >
                          <div class="go text-center">
                            去找TA
                          </div>
                        </div>
                      </li>
                    </ul> -->
                  </van-list>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="温馨总榜">
          <div class="container">
            <div class="mod mod-skin mb-20">
              <div class="mod-box">
                <p>活动结束后榜单第十名可获得</p>
                <p>首富头饰（30天）、深蓝玛莎拉蒂（30天）</p>
              </div>
            </div>
            <div class="mod mod-skin mb-20">
              <div class="mod-box">
                <div class="">
                  <div class="act-endTime flex fs-16">
                    <div v-if="actObj.actStatus == 1" style="color: #cf3650;">
                      距离活动结束时间：
                      <van-count-down :time="time" format="DD天HH时mm分ss秒" />
                    </div>
                    <p v-else style="color: #999;">活动已结束</p>
                  </div>
                  <van-list
                    v-model="list[5].loading"
                    :finished="list[5].finished"
                    :offset="10"
                    :immediate-check="false"
                    @load="onLoad(5)"
                  >
                  <user :data="list[5].items":textType="2" @on-click="onUserClick"/>
                    <!-- <ul class="user-list">
                      <li
                        class="user flex"
                        :class="{
                          no1: item.rankNo == 1,
                          no2: item.rankNo == 2,
                          no3: item.rankNo == 3,
                        }"
                        v-for="item in list[5].items"
                      >
                        <div class="user-hd">
                          <template v-if="item.rankNo == 1">
                            <img
                              src="./images/ic-1st.png"
                              alt=""
                              width="16.5"
                              height="21"
                            />
                          </template>
                          <template v-else-if="item.rankNo == 2">
                            <img
                              src="./images/ic-2st.png"
                              alt=""
                              width="16.5"
                              height="21"
                            />
                          </template>
                          <template v-else-if="item.rankNo == 3">
                            <img
                              src="./images/ic-3st.png"
                              alt=""
                              width="16.5"
                              height="21"
                            />
                          </template>
                          <template v-else>
                            {{ item.rankNo }}
                          </template>
                        </div>
                        <div class="user-bd flex flex-1">
                          <div class="figure flex">
                            <img class="avatar" :src="item.avatar" alt="" />
                          </div>
                          <div class="user-info">
                            <h5 class="text-ellipsis">{{ item.nick }}</h5>
                            <span>浪漫值{{ item.value | formatTotal }}</span>
                          </div>
                        </div>
                        <div
                          class="user-ft flex"
                          v-show="item.userRoomStatus"
                          @click="openRoom(item.uid)"
                        >
                          <div class="go text-center">
                            去找TA
                          </div>
                        </div>
                      </li>
                    </ul> -->
                  </van-list>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="page-ft fixed" v-show="active != 0">
      <div class="person flex fs-16">
        <div class="person-hd fs-14">
          {{ user.rankNo == 0 ? "未上榜" : user.rankNo }}
        </div>
        <div class="person-bd flex flex-1">
          <img class="avatar" :src="user.avatar" alt="" />
          <div class="person-info">
            <p>{{ user.nick }}</p>
          </div>
        </div>
        <div class="persion-ft">
          <div class="flex">
            <img src="./images/ic-flower.png" alt="" width="12" height="10" />
            <span>浪漫值</span>
          </div>
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

import user from "./components/User";


export default {
  name: "51day",
  mixins: [mixins],
  components: {
    user
  },
  data() {
    return {
      active: 0,
      tabIndex: 0,
      tabIndesx: 0,
      time: "",
      uid: getUid() || cookies.get("uid") || "90293701", //获取uid
      user: {}, //用户信息
      actObj: {}, //活动对象
      actStatus: "", //活动状态 1运行 2结束
      actEndDate: "", //结束时间
      querySearch: getQueryString(),
      list: [
        {
          items: [],
          actId: getQueryString().actId,
          giftType: 1,
          rankType: 1,
          date: dateFormat(new Date(), "yyyy-MM-dd"), //查询时间
          dimension: 1,
          giftId: "",
          page: 1,
          pageSize: 10,
          loading: false,
          finished: false,
        },
        {
          items: [],
          actId: getQueryString().actId,
          giftType: 1,
          rankType: 1,
          date: dateFormat(
            new Date().getTime() - 24 * 60 * 60 * 1000,
            "yyyy-MM-dd"
          ), //查询时间
          dimension: 1,
          giftId: "",
          page: 1,
          pageSize: 10,
          loading: false,
          finished: false,
        },
        {
          items: [],
          actId: getQueryString().actId,
          giftType: 2,
          rankType: 1,
          date: dateFormat(new Date(), "yyyy-MM-dd"), //查询时间
          dimension: 1,
          giftId: "",
          page: 1,
          pageSize: 10,
          loading: false,
          finished: false,
        },
        {
          items: [],
          actId: getQueryString().actId,
          giftType: 2,
          rankType: 1,
          date: dateFormat(
            new Date().getTime() - 24 * 60 * 60 * 1000,
            "yyyy-MM-dd"
          ), //查询时间
          dimension: 1,
          giftId: "",
          page: 1,
          pageSize: 10,
          loading: false,
          finished: false,
        },
        {
          items: [],
          actId: getQueryString().actId,
          giftType: 1,
          rankType: 1,
          date: dateFormat(new Date(), "yyyy-MM-dd"), //查询时间
          dimension: 4,
          giftId: "",
          page: 1,
          pageSize: 10,
          loading: false,
          finished: false,
        },
        {
          items: [],
          actId: getQueryString().actId,
          giftType: 2,
          rankType: 1,
          date: dateFormat(new Date(), "yyyy-MM-dd"), //查询时间
          dimension: 4,
          giftId: "",
          page: 1,
          pageSize: 10,
          loading: false,
          finished: false,
        },
      ],
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
    },
  },
  methods: {
    init() {
      //todo...
      for (let i = 0; i <= 5; i++) {
        this.getData(i);
      }
      this.getUserRank(0);
      this.labouractStatus(this.querySearch.actId);
    },
    tabsChange(index, title) {
      console.log(index);
      // switch (index) {
      //   case 1:
      //     this.getData(0);
      //     break;
      //   case 2:
      //     this.getData(2);
      //     break;
      //   case 3:
      //     this.getData(4);
      //     break;
      //   case 4:
      //     this.getData(5);
      //     break;
      // }
    },
    tabsLmChange(index, title) {
      this.getUserRank(index);
    },
    //打开房间
    onUserClick(uid) {
      openRoom(uid);
      console.log(uid);
    },
    //打开房间
    openRoom(uid) {
      openRoom(uid);
    },
    onLoad(index) {
      const obj = this.list[index];
      obj.page += 1; //请求下一页
      let { items, loading, finished, ...args } = obj;
      if (args.page > 10) {
        //设置请求完成
        obj.finished = true;
        return;
      }
      service.labouractRanking(serializeData(args)).then((res) => {
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
      service.labouractRanking(serializeData(args)).then((res) => {
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
      service.labouractRankingByUid(serializeData(params)).then((res) => {
        if (res.data.code === 200) {
          let result = res.data.data;
          this.user = Object.assign({}, result);
        }
      });
    },
    //活动状态
    labouractStatus(actId) {
      service.labouractStatus({ actId }).then((res) => {
        if (res.data.code === 200) {
          let result = res.data.data;
          this.actObj = Object.assign({}, result);
          //this.time = new Date(result.actEndDate).getTime();
        }
      });
    },
  },
};
</script>
<style lang="scss">
@import "./css/index";
</style>
