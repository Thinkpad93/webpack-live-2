<template>
  <div class="page">
    <div class="page-hd">
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
        <van-list
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
                    <div class="header">
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
                    <span>{{ item.loveValue | formatTotal }}</span>
                  </div>
                </div>
                <div class="ft">
                  <div class="text-center">
                    <div>
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
export default {
  name: 'datingRank',
  data() {
    return {
      nums: 1000000,
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
    formatTotal: function(val) {
      if (val <= 1000000) {
        return val;
      }
      if (val >= 1000000 && val < 10000000) {
        var r = (val / 10000).toFixed(1);
        return r + 'W';
      }
      if (val >= 10000000) {
        return 999 + 'W+';
      }
    },
  },
  methods: {
    // 加载更多数据
    onLoad() {
      this.query.pageNum++; // 请求下一页
      console.log('请求下一页');
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
@import './css/index';
</style>
