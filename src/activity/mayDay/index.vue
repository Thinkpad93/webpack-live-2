<template>
  <div class="page">
    <div class="page-hd">
      <div class="banner">
        <img src="./images/banner.png" alt="" />
      </div>
      <div class="act-notify">
        <div class="act-time text-center fs-16">4月28日-5月11日</div>
        <div class="act-desc text-center">
          <div class="act-desc-box fs-15 lh-2">
            <p>爱情需要诺言更需要陪伴</p>
            <p>陪伴是最长情的告白</p>
            <p>在五一长假营造最浪漫的气氛。</p>
            <p>五一有假，浪漫无价！</p>
            <img src="./images/xin.png" alt="" />
          </div>
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
        title-active-color="#a34400"
        title-inactive-color="#6d2d00"
        :border="false"
        @change="tabsChange"
        @rendered="tabsRendered"
      >
        <van-tab title="活动规则">
          <div class="container">
            <div class="mod mod-skin mb-16">
              <div class="mod-box text-center pd-10">
                <img
                  src="./images/title.png"
                  alt=""
                  width="308"
                  height="35"
                  style="margin-bottom: 16px;"
                />
                <div class="mod flex flex-wrap" style="margin: 0 -4px;">
                  <div class="col" style="width: 33.3333%;">
                    <div class="card">
                      <div class="card-bd">
                        <div class="tag">心心相印</div>
                        <img src="./images/gift-1.png" alt="" />
                      </div>
                      <p class="card-ft">5200金豆</p>
                    </div>
                  </div>
                  <div class="col" style="width: 33.3333%;">
                    <div class="card">
                      <div class="card-bd">
                        <div class="tag">爱的告白</div>
                        <img src="./images/gift-2.png" alt="" />
                      </div>
                      <p class="card-ft">13140金豆</p>
                    </div>
                  </div>
                  <div class="col" style="width: 33.3333%;">
                    <div class="card">
                      <div class="card-bd">
                        <div class="tag">浪漫满屋</div>
                        <img src="./images/gift-3.png" alt="" />
                      </div>
                      <p class="card-ft">38800金豆</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mod mod-skin mb-16">
              <div
                class="mod-box text-center fs-14 lh-2"
                style="padding: 20px 10px 20px 10px;"
              >
                <img
                  src="./images/title2.png"
                  alt=""
                  width="218"
                  height="35"
                  style="margin-bottom: 20px;"
                />
                <p style="color: #cb1d3d;">
                  活动期间上架<b>3款劳动节限时礼物!</b>
                </p>
                <p style="color: #cb1d3d;">
                  收到赠送的限时礼物可获得相对应的<b>浪漫值</b>；
                </p>
                <p style="color: #cb1d3d;">
                  送出限时礼物可获得相对应的<b>温馨值</b>；
                </p>
                <div style="margin: 20px 0 20px 0;">
                  <img src="./images/img.png" alt="" width="195" height="305" />
                </div>
                <p class="flex j-c-c a-i-c">
                  赠送礼物<img
                    src="./images/1442.png"
                    alt=""
                    width="20"
                    height="20"
                  />可获得限时背景<b>（1天）</b>
                </p>
                <p class="flex j-c-c a-i-c">
                  赠送礼物<img
                    src="./images/1440.png"
                    alt=""
                    width="20"
                    height="20"
                  />可获得限时背景<b>（2天）</b>
                </p>
                <p class="flex j-c-c a-i-c">
                  赠送礼物<img
                    src="./images/1441.png"
                    alt=""
                    width="20"
                    height="20"
                  />可获得限时背景<b>（3天）</b>
                </p>
              </div>
            </div>
            <div class="mod mod-skin mb-16">
              <div
                class="mod-box text-center fs-14"
                style="padding: 20px 10px 20px 10px;"
              >
                <img
                  src="./images/title3.png"
                  alt=""
                  width="308"
                  height="35"
                  style="margin-bottom: 25px;"
                />
                <p class="lh-2" style="margin-bottom: 30px;">
                  每天获得浪漫值或温馨值日榜前10名的可获得相对应的头饰奖励以及座驾奖励
                </p>
                <div class="mod flex flex-wrap" style="margin: 0 -4px;">
                  <div class="col">
                    <div class="award">
                      <div class="lg-1 rank">日榜浪漫奖励</div>
                      <img class="gift" src="./images/ic-lm.png" alt="" />
                      <img class="gift" src="./images/ic-lm-car.png" alt="" />
                    </div>
                  </div>
                  <div class="col">
                    <div class="award">
                      <div class="lg-2 rank">日榜温馨奖励</div>
                      <img class="gift" src="./images/ic-wx.png" alt="" />
                      <img class="gift" src="./images/ic-wx-car.png" alt="" />
                    </div>
                  </div>
                </div>
                <p class="lh-2" style="margin: 30px 0;">
                  在活动结束后浪漫榜第一和温馨榜第一更能获得榜单特别座驾
                </p>
                <div class="mod flex flex-wrap" style="margin: 0 -4px;">
                  <div class="col">
                    <div class="award">
                      <div class="lg-1 rank">总榜浪漫奖励</div>
                      <img class="gift" src="./images/ic-lm-hot.png" alt="" />
                      <img
                        class="gift"
                        src="./images/ic-lm-car-hot.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="award">
                      <div class="lg-2 rank">总榜温馨奖励</div>
                      <img class="gift" src="./images/ic-wx-hot.png" alt="" />
                      <img
                        class="gift"
                        src="./images/ic-wx-car-hot.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mod">
              <div class="copyright text-center fs-14">
                <!-- <img
                  src="./images/qrcode.jpg"
                  alt=""
                  width="150"
                  height="150"
                />
                <p>
                  bibi约玩微信公众号
                </p> -->
                <p></p>
                <p>本活动最终解释权归官方所有</p>
                <p>本活动及提供奖品均与苹果公司无关</p>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="浪漫日榜">
          <div class="container">
            <div class="mod mod-skin mb-20">
              <div class="mod-box color-1">
                <div class="gift-box">
                  <img class="gift" src="./images/ic-lm.png" alt="" />
                  <img class="gift" src="./images/ic-lm-car.png" alt="" />
                  <p>每天榜单前十名可获得</p>
                  <p><b> 浪漫头饰（3天）和浪漫驯鹿（1天）</b></p>
                </div>
              </div>
            </div>
            <div class="mod mod-skin mb-20">
              <div class="mod-box">
                <div class="min-h250">
                  <van-tabs
                    v-model="tabIndex"
                    line-width="46%"
                    line-height="2px"
                    :border="false"
                    @change="tabsLmChange"
                  >
                    <van-tab title="今日榜单">
                      <van-list
                        v-if="actStatus"
                        v-model="list[0].loading"
                        :finished="list[0].finished"
                        :offset="10"
                        :immediate-check="false"
                        @load="onLoad(0)"
                      >
                        <user
                          :uid="user.uid"
                          :data="list[0].items"
                          :tip-text="tipText"
                          @on-click="onUserClick"
                        />
                      </van-list>
                    </van-tab>
                    <van-tab title="昨日榜单">
                      <van-list
                        v-if="actStatus"
                        v-model="list[1].loading"
                        :finished="list[1].finished"
                        :offset="10"
                        :immediate-check="false"
                        @load="onLoad(1)"
                      >
                        <user
                          :uid="user.uid"
                          :data="list[1].items"
                          :tip-text="tipText"
                          @on-click="onUserClick"
                        />
                      </van-list>
                    </van-tab>
                  </van-tabs>
                  <!-- empty -->
                  <empty
                    :act-obj="actObj"
                    :tip-text="tipText"
                    :status="actStatus"
                  />
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="温馨日榜">
          <div class="container">
            <div class="mod mod-skin mb-20">
              <div class="mod-box color-1">
                <div class="gift-box">
                  <img class="gift" src="./images/ic-wx.png" alt="" />
                  <img class="gift" src="./images/ic-wx-car.png" alt="" />
                  <p>每天榜单前十名可获得</p>
                  <p><b>温馨头饰（3天）和温馨天马（1天）</b></p>
                </div>
              </div>
            </div>
            <div class="mod mod-skin mb-20">
              <div class="mod-box">
                <div class="min-h250">
                  <van-tabs
                    v-model="tabIndexs"
                    line-width="46%"
                    line-height="2px"
                    :border="false"
                    @change="tabswxChange"
                  >
                    <van-tab title="今日榜单">
                      <van-list
                        v-if="actStatus"
                        v-model="list[2].loading"
                        :finished="list[2].finished"
                        :offset="10"
                        :immediate-check="false"
                        @load="onLoad(2)"
                      >
                        <user
                          :uid="user.uid"
                          :data="list[2].items"
                          :text-type="2"
                          :tip-text="tipText"
                          @on-click="onUserClick"
                        />
                      </van-list>
                    </van-tab>
                    <van-tab title="昨日榜单">
                      <van-list
                        v-if="actStatus"
                        v-model="list[3].loading"
                        :finished="list[3].finished"
                        :offset="10"
                        :immediate-check="false"
                        @load="onLoad(3)"
                      >
                        <user
                          :uid="user.uid"
                          :data="list[3].items"
                          :text-type="2"
                          :tip-text="tipText"
                          @on-click="onUserClick"
                        />
                      </van-list>
                    </van-tab>
                  </van-tabs>
                  <!-- empty -->
                  <empty
                    :act-obj="actObj"
                    :tip-text="tipText"
                    :status="actStatus"
                  />
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="浪漫总榜">
          <div class="container">
            <div class="mod mod-skin mb-20">
              <div class="mod-box color-1">
                <div class="gift-box">
                  <img class="gift" src="./images/ic-lm-hot.png" alt="" />
                  <img class="gift" src="./images/ic-lm-car-hot.png" alt="" />
                  <p>活动结束后榜单前十名可获得</p>
                  <p><b> 最佳浪漫头饰（30天）、浪漫鹿车（30天）</b></p>
                </div>
              </div>
            </div>
            <div class="mod mod-skin mb-20">
              <div class="mod-box">
                <div class="min-h250">
                  <div class="act-endTime flex fs-16" v-if="actStatus">
                    <!-- 1活动运行 2活动结束 -->
                    <div class="flex" style="color: #cf3650;">
                      <p>距离活动结束时间：</p>
                      <van-count-down
                        :time="time"
                        format="DD天HH时mm分ss秒"
                        style="color: #cf3650;"
                      />
                    </div>
                  </div>
                  <p
                    class="act-endTime flex fs-16"
                    style="color: #999;"
                    v-if="actObj.actStatus == 2"
                  >
                    {{ tipText }}
                  </p>
                  <van-list
                    v-if="actStatus || actObj.actStatus == 2"
                    v-model="list[4].loading"
                    :finished="list[4].finished"
                    loading-text=""
                    :offset="10"
                    :immediate-check="false"
                    @load="onLoad(4)"
                  >
                    <user
                      :uid="user.uid"
                      :data="list[4].items"
                      :tip-text="tipText"
                      @on-click="onUserClick"
                    />
                  </van-list>
                  <!-- empty -->
                  <!-- <empty
                    :act-obj="actObj"
                    :tip-text="tipText"
                    :status="actStatus"
                  /> -->
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="温馨总榜">
          <div class="container">
            <div class="mod mod-skin mb-20">
              <div class="mod-box color-1">
                <div class="gift-box">
                  <img class="gift" src="./images/ic-wx-hot.png" alt="" />
                  <img class="gift" src="./images/ic-wx-car-hot.png" alt="" />
                  <p>活动结束后榜单前十名可获得</p>
                  <p><b>最佳温馨头饰（30天）、温馨马车（30天）</b></p>
                </div>
              </div>
            </div>
            <div class="mod mod-skin mb-20">
              <div class="mod-box">
                <div class="min-h250">
                  <div class="act-endTime flex fs-16" v-if="actStatus">
                    <!-- 1活动运行 2活动结束 -->
                    <div class="flex" style="color: #cf3650;">
                      <p>距离活动结束时间：</p>
                      <van-count-down
                        :time="time"
                        format="DD天HH时mm分ss秒"
                        style="color: #cf3650;"
                      />
                    </div>
                  </div>
                  <p
                    class="act-endTime flex fs-16"
                    style="color: #999;"
                    v-if="actObj.actStatus == 2"
                  >
                    {{ tipText }}
                  </p>
                  <van-list
                    v-if="actStatus || actObj.actStatus == 2"
                    v-model="list[5].loading"
                    :finished="list[5].finished"
                    loading-text=""
                    :offset="10"
                    :immediate-check="false"
                    @load="onLoad(5)"
                  >
                    <user
                      :uid="user.uid"
                      :data="list[5].items"
                      :text-type="2"
                      :tip-text="tipText"
                      @on-click="onUserClick"
                    />
                  </van-list>
                  <!-- empty -->
                  <!-- <empty
                    :act-obj="actObj"
                    :tip-text="tipText"
                    :status="actStatus"
                  /> -->
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="page-ft fixed" v-show="active != 0">
      <template>
        <div class="person flex fs-16">
          <div class="person-hd fs-14">
            <span v-if="user.rankNo == 0" style="color: #999;">未上榜</span>
            <span v-else style="color: #f15a76;">{{ user.rankNo }}</span>
          </div>
          <div class="person-bd flex flex-1">
            <img class="avatar" :src="user.avatar" alt="" />
            <div class="person-info">
              <p class="text-ellipsis">{{ user.nick }}</p>
            </div>
          </div>
          <div class="persion-ft">
            <div class="flex" style="align-items: center;">
              <img
                src="./images/ic-flower.png"
                alt=""
                width="12"
                height="10"
                v-if="giftType == 1"
              />
              <img
                src="./images/ic-heat.png"
                alt=""
                width="13"
                height="11.5"
                v-else
              />
              <span style="color: #999;margin-left: 4px"
                >{{ giftType == 1 ? '浪漫' : '温馨' }}值</span
              >
            </div>
            <span class="amount" v-if="actObj.actStatus == 2">
              <template v-if="active == 3 || active == 4">
                {{ user.value | formatTotal }}
              </template>
              <template v-else>
                0
              </template>
            </span>
            <span class="amount" v-if="actObj.actStatus == 1">
              <template v-if="actStatus">
                {{ user.value | formatTotal }}
              </template>
              <template v-else>
                0
              </template>
            </span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { List, Tab, Tabs, CountDown, Toast } from 'vant';
Vue.use(List)
  .use(Tab)
  .use(Tabs)
  .use(CountDown)
  .use(Toast);

import {
  labouractRanking,
  labouractRankingByUid,
  labouractStatus,
} from '@/api';
import { getQueryString, serializeData, dateFormat } from '@/utils';
import { getUid, openRoom } from '@/utils/appNativeFun';
import cookies from '@/utils/cookies';

import mixins from '@/mixins/page';

import user from './components/User';
import empty from './components/Empty';

export default {
  name: 'mayDay',
  mixins: [mixins],
  components: {
    user,
    empty,
  },
  data() {
    return {
      active: 0,
      tabIndex: 0,
      tabIndexs: 0,
      time: '', // 倒计时
      uid: getUid() || '90293691', // 获取uid
      user: {}, // 用户信息
      actObj: {}, // 活动对象
      tipText: '',
      giftType: 1, // 收礼类型
      actStatus: false, // 活动状态
      querySearch: getQueryString(),
      list: [
        {
          items: [],
          actId: getQueryString().actId,
          giftType: 1,
          rankType: 1,
          date: dateFormat(new Date(), 'yyyy-MM-dd'), //查询时间
          dimension: 1,
          giftId: '',
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
            'yyyy-MM-dd'
          ), //查询时间
          dimension: 1,
          giftId: '',
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
          date: dateFormat(new Date(), 'yyyy-MM-dd'), //查询时间
          dimension: 1,
          giftId: '',
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
            'yyyy-MM-dd'
          ), //查询时间
          dimension: 1,
          giftId: '',
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
          date: dateFormat(new Date(), 'yyyy-MM-dd'), //查询时间
          dimension: 4,
          giftId: '',
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
          date: dateFormat(new Date(), 'yyyy-MM-dd'), //查询时间
          dimension: 4,
          giftId: '',
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
  methods: {
    init() {
      this.getActStatus(this.querySearch.actId);
      this.getUserRank(0);
    },
    // 标签内容首次渲染时触发
    tabsRendered(index, title) {
      let { actStartDate, actEndDate } = this.actObj;
      // 当前时间
      let currentTime = +new Date();
      // 开始时间
      let startTime = new Date(parseInt(actStartDate));
      // 结束时间
      let endTime = new Date(parseInt(actEndDate));

      if (this.actStatus) {
        let number = endTime - currentTime;
        this.time = number; // 设置倒计时
      }
    },
    tabsChange(index, title) {
      let { actStatus } = this.actObj;
      title.includes('浪漫') ? (this.giftType = 1) : (this.giftType = 2);
      if (actStatus === 1) {
        if (this.actStatus) {
          switch (index) {
            case 1:
              this.getUserRank(0);
              break;
            case 2:
              this.getUserRank(2);
              break;
            case 3:
              this.getUserRank(4);
              break;
            case 4:
              this.getUserRank(5);
              break;
          }
        }
      } else if (actStatus === 2) {
        if (index === 3) {
          this.getUserRank(4);
        }
        if (index === 4) {
          this.getUserRank(5);
        }
      }
      //
      window.logger.track({
        __topic__: 'batter-log',
        path: location.href,
        remark: title,
      });
    },
    tabsLmChange(index, title) {
      let { actStatus } = this.actObj;
      if (this.actStatus) {
        let indexOf = index == 0 ? 0 : 1;
        this.loadRankData(indexOf);
      }
    },
    tabswxChange(index, title) {
      let { actStatus } = this.actObj;
      if (this.actStatus) {
        let indexOf = index == 0 ? 2 : 3;
        this.loadRankData(indexOf);
      }
    },
    // 打开房间
    onUserClick(userInRoomVo) {
      let { isFollowInRoom, userInRoom } = userInRoomVo;
      // 是否允许别人跟随进入房间(1-允许,0-不允许)
      if (isFollowInRoom === 1) {
        // 在房间内
        if (Object.keys(userInRoom).length) {
          openRoom(userInRoom.uid);
        } else {
          this.$toast('该用户不在房间');
        }
      } else {
        this.$toast('该用户暂时无法跟随');
      }
    },
    loadRankData(indexOf) {
      this.list[indexOf].page = 1;
      this.list[indexOf].finished = false; // 设置请求没完成
      this.getUserRank(indexOf);
      this.getData(indexOf);
    },
    // 加载更多数据
    onLoad(index) {
      const obj = this.list[index];
      obj.page += 1; // 请求下一页
      let { items, loading, finished, ...args } = obj;
      if (args.page > 10) {
        // 设置请求完成
        obj.finished = true;
        return;
      }
      labouractRanking(serializeData(args)).then((res) => {
        if (res.code === 200) {
          // 加载状态结束
          obj.loading = false;
          let result = res.data;
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
    // 请求榜单数据
    getData(index) {
      let { items, loading, finished, ...args } = this.list[index];
      let params = {
        showLoading: true,
      };
      labouractRanking(serializeData(args), params).then((res) => {
        if (res.code === 200) {
          let result = res.data;
          if (result.length) {
            this.list[index].items = result;
          } else {
          }
        }
      });
    },
    // 个人榜单数据
    getUserRank(index) {
      let { items, page, pageSize, loading, finished, ...args } = this.list[
        index
      ];
      let params = Object.assign({}, { uid: this.uid }, args);
      labouractRankingByUid(serializeData(params)).then((res) => {
        if (res.code === 200) {
          let result = res.data;
          this.user = Object.assign({}, result);
        }
      });
    },
    // 获取活动状态
    async getActStatus(actId) {
      let result = await labouractStatus({ actId });
      let data = result.data;
      if (result.code === 200) {
        this.actObj = Object.assign({}, data);
        let { actStatus } = data;
        // 设置活动标题
        document.title = data.actTitle || '';
        // 活动运行
        if (actStatus === 1) {
          // 当前时间
          let currentTime = +new Date();
          // 开始时间
          let startTime = new Date(parseInt(data.actStartDate));
          // 判断活动是否开始
          if (currentTime < startTime) {
            this.actStatus = false;
            this.tipText = '活动暂未开启，敬请期待';
          } else {
            this.tipText = '活动已经开启啦';
            this.actStatus = true;
            // 请求数据
            for (let i = 0; i <= 5; i++) {
              this.getData(i);
            }
          }
        } else if (actStatus === 2) {
          this.actStatus = false;
          this.tipText = '活动已结束';
          // 只展示总榜数据
          this.getData(4);
          this.getData(5);
        }
      }
    },
  },
};
</script>
<style lang="scss">
@import './css/index';
</style>
