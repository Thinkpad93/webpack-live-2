<template>
  <div class="page">
    <div class="page-hd">
      <img src="./images/banner.png" alt="" />
      <div class="title">
        <img src="./images/img-title.png" alt="" />
      </div>
    </div>
    <div class="page-bd">
      <van-tabs
        class="page-tabs"
        animated
        line-width="0px"
        line-height="0px"
        v-model="tabActive"
        :border="false"
      >
        <van-tab
          :title="tabItem"
          v-for="(tabItem, tabIndex) in tabList"
          :key="tabIndex"
        >
          <div class="container">
            <!-- default -->
            <div class="default" v-if="!list[tabIndex].items.length">
              <img src="./images/default.png" alt="" width="118" height="118" />
              <p>空空如也</p>
            </div>
            <van-list
              :offset="10"
              :immediate-check="false"
              v-model="list[tabIndex].loading"
              :finished="list[tabIndex].finished"
              @load="onLoad(tabIndex)"
            >
              <ul class="list">
                <li
                  class="item"
                  v-for="(item, index) in list[tabIndex].items"
                  :key="index"
                >
                  <div
                    class="box flex j-c-c a-i-c"
                    :style="{
                      backgroundImage: 'url(' + item.backgroudUrl + ')',
                    }"
                  >
                    <div class="hd">
                      <div class="text-center">
                        <div
                          class="header"
                          @click="handlePersonPage(item.user.uid)"
                        >
                          <template v-if="item.user.userHeadwear">
                            <div
                              class="header-wear"
                              :style="{
                                backgroundImage:
                                  'url(' + item.user.userHeadwear.pic + ')',
                              }"
                            ></div>
                          </template>
                          <img :src="item.user.avatar" alt="" class="avatar" />
                        </div>
                        <div class="user-info flex j-c-c a-i-c">
                          <div class="nick text-ellipsis">
                            {{ item.user.nick }}
                          </div>
                          <template v-if="item.user.gender == 1">
                            <img
                              src="./images/ic-gender-male.png"
                              width="12"
                              height="12"
                            />
                          </template>
                          <template v-else>
                            <img
                              src="./images/ic-gender-female.png"
                              width="12"
                              height="12"
                            />
                          </template>
                        </div>
                      </div>
                    </div>
                    <div class="bd text-center">
                      <img
                        src="./images/obj.png"
                        alt=""
                        width="74"
                        height="27"
                      />
                      <div class="love-value">
                        <span :data-value="item.loveValue">
                          {{ item.loveValue | toTenThousand }}
                        </span>
                      </div>
                    </div>
                    <div class="ft">
                      <div class="text-center">
                        <div
                          class="header"
                          @click="handlePersonPage(item.loverUser.uid)"
                        >
                          <template v-if="item.loverUser.userHeadwear">
                            <div
                              class="header-wear"
                              :style="{
                                backgroundImage:
                                  'url(' +
                                  item.loverUser.userHeadwear.pic +
                                  ')',
                              }"
                            ></div>
                          </template>
                          <img
                            :src="item.loverUser.avatar"
                            alt=""
                            class="avatar"
                          />
                        </div>
                        <div class="user-info flex j-c-c a-i-c">
                          <div class="nick text-ellipsis">
                            {{ item.loverUser.nick }}
                          </div>
                          <template v-if="item.loverUser.gender == 1">
                            <img
                              src="./images/ic-gender-male.png"
                              width="12"
                              height="12"
                            />
                          </template>
                          <template v-else>
                            <img
                              src="./images/ic-gender-female.png"
                              width="12"
                              height="12"
                            />
                          </template>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </van-list>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { List, Tabs, Tab } from 'vant';
import { datingRank, datingRankList } from '@/api';
import { openPersonPage } from '@/utils/appNativeFun';
import { EventBus } from '@/eventBus';
import downLoadBar from '@/components/downloadBar';

Vue.use(List)
  .use(Tabs)
  .use(Tab);

export default {
  name: 'DatingRank',
  data() {
    return {
      maxPage: 4, // 最大请求页数
      tabActive: 2,
      tabList: [], // tabList
      list: [],
    };
  },
  mounted() {
    this.init();
  },
  filters: {
    toTenThousand(number) {
      let num = String(number);
      if (num.length >= 8) {
        return '999W+';
      } else if (num.length == 7) {
        return num.slice(0, 3) + '.' + num.slice(3, 5) + 'W';
      }
      return number;
    },
  },
  methods: {
    init() {
      this.getTabList(); // 初始化tabList
    },
    bus() {
      this.clickCount++;
      EventBus.$emit('i-got-clicked', this.clickCount);
    },
    // 打开个人中心
    handlePersonPage(uid) {
      openPersonPage(uid);
    },
    // 获取tabList数据
    getTabList() {
      datingRankList({}).then((res) => {
        console.log(res);
        if (res.code === 200) {
          let result = res.data;
          if (result.length) {
            this.tabList = result;
            this.list = [];
            for (let i = 0; i < result.length; i++) {
              let obj = {
                items: [],
                tag: result[i],
                pageNum: 1,
                pageSize: 10,
                loading: false,
                finished: false,
              };
              this.list.push(obj);
            }
            this.getData(0);
            this.getData(1);
            this.getData(2);
            this.getData(3);
          }
        }
      });
    },
    // 获取真爱榜数据
    getData(index) {
      let { tag, pageNum, pageSize } = this.list[index];
      datingRank({ tag, pageNum, pageSize }).then((res) => {
        if (res.code === 200) {
          let result = res.data;
          if (result.length) {
            this.list[index].items = result;
          }
        }
      });
    },
    // 加载更多数据
    onLoad(index) {
      let obj = this.list[index];
      obj.pageNum += 1; // 请求下一页数据
      if (obj.pageNum > this.maxPage) {
        obj.finished = true;
        return;
      }
      let params = {
        pageNum: obj.pageNum,
        pageSize: obj.pageSize,
        tag: obj.tag,
      };
      datingRank(params).then((res) => {
        if (res.code === 200) {
          // 加载结束
          obj.loading = false;
          let result = res.data;
          if (result.length) {
            for (let i = 0; i < result.length; i++) {
              obj.items.push(result[i]);
            }
          } else {
            // 请求完成
            obj.finished = true;
          }
        }
      });
    },
  },
};
</script>
<style lang="scss">
@import './css/index';
</style>
