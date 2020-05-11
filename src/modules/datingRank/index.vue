<template>
  <div class="page">
    <div class="page-hd" @click="bus">
      <img src="./images/banner.png" alt="" />
    </div>
    <div class="page-bd">
      <div class="left-fixed">
        <img src="./images/dian.png" alt="" width="33" height="45" />
      </div>
      <div class="bottom-fixed">
        <img src="./images/dians.png" alt="" width="76" height="28" />
      </div>
      <div class="container">
        <!-- default -->
        <div class="default text-center" v-if="!list.length">
          <img src="./images/default.png" alt="" width="118" height="118" />
          <p>空空如也~</p>
        </div>
        <van-list
          v-if="list.length > 1"
          v-model="loading"
          :finished="finished"
          :offset="10"
          :immediate-check="false"
          @load="onLoad"
        >
          <ul class="list">
            <li class="item" v-for="(item, index) in list" :key="index">
              <div
                class="box flex j-c-c a-i-c"
                :style="{ backgroundImage: 'url(' + item.backgroudUrl + ')' }"
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
                      <div class="nick text-ellipsis">{{ item.user.nick }}</div>
                      <template v-if="item.user.gender == 1">
                        <img
                          src="./images/ic-gender-male.png"
                          alt=""
                          width="12"
                          height="12"
                        />
                      </template>
                      <template v-else>
                        <img
                          src="./images/ic-gender-female.png"
                          alt=""
                          width="12"
                          height="12"
                        />
                      </template>
                    </div>
                  </div>
                </div>
                <div class="bd text-center">
                  <img src="./images/obj.png" alt="" width="74" height="27" />
                  <div class="love-value">
                    <span :data-value="item.loveValue">{{
                      item.loveValue | toTenThousand
                    }}</span>
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
                              'url(' + item.loverUser.userHeadwear.pic + ')',
                          }"
                        ></div>
                      </template>
                      <img :src="item.loverUser.avatar" alt="" class="avatar" />
                    </div>
                    <div class="user-info flex j-c-c a-i-c">
                      <div class="nick text-ellipsis">
                        {{ item.loverUser.nick }}
                      </div>
                      <template v-if="item.loverUser.gender == 1">
                        <img
                          src="./images/ic-gender-male.png"
                          alt=""
                          width="12"
                          height="12"
                        />
                      </template>
                      <template v-else>
                        <img
                          src="./images/ic-gender-female.png"
                          alt=""
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
    </div>
  </div>
</template>
<script>
import Vue from 'Vue';
import { List } from 'vant';
Vue.use(List);

import service from '@/api';
import { openPersonPage } from '@/utils/appNativeFun';
import { EventBus } from '@/eventBus';
import downLoadBar from '@/components/downloadBar';

export default {
  name: 'datingRank',
  data() {
    return {
      clickCount: 0,
      maxPage: 2,
      query: {
        pageNum: 1,
        pageSize: 10,
      },
      loading: false,
      finished: false,
      list: [], // 数据
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
      this.getData();
    },
    toFixed(num, s) {
      var times = Math.pow(10, s);
      var des = num * times + 0.5;
      des = parseInt(des, 10) / times;
      return des + '';
    },
    bus() {
      this.clickCount++;
      EventBus.$emit('i-got-clicked', this.clickCount);
    },
    // 打开个人中心
    handlePersonPage(uid) {
      openPersonPage(uid);
    },
    // 获取真爱榜数据
    getData() {
      service.datingRank(this.query).then((res) => {
        if (res.code === 200) {
          let result = res.data;
          if (result.length) {
            this.list = result;
          }
        }
      });
    },
    // 加载更多数据
    onLoad() {
      this.query.pageNum++; // 请求下一页
      if (this.query.pageNum > this.maxPage) {
        this.finished = true;
        return;
      }
      service.datingRank(this.query).then((res) => {
        if (res.code === 200) {
          // 加载状态结束
          this.loading = false;
          let result = res.data;
          if (result.length) {
            for (let i = 0; i < result.length; i++) {
              this.list.push(result[i]);
            }
          } else {
            // 如果没有数据则设置加载完成
            this.finished = true;
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
