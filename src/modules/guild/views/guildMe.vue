<template>
  <div class="page">
    <header-bar>
      <van-icon size="18" name="ellipsis" style="transform: rotate(90deg);"></van-icon>
    </header-bar>
    <div class="page-bd">
      <!-- 捐献积分 -->
      <van-dialog
        v-model="dialogVisible"
        className="pageDialog"
        :show-confirm-button="false"
        :close-on-click-overlay="true">
        <p>我的积分<span class="">125621</span></p>
        <p>加入公会后在线每满1分钟，则获得1点积分</p>
        <p>请输入要捐献的积分数量</p>
        <input type="text" placeholder="请输入要捐献的积分数量">
      </van-dialog>
      <!-- 公告 -->
      <div class="mod"></div>
      <!-- 今日贡献 -->
      <div class="mod">
        <p>今日贡献（4565）</p>
        <div class="dayTop-list">
          <div class="day-user"></div>
        </div>
        <button type="button" @click="dialogVisible = true;">我要捐献</button>
      </div>
      <!-- 公会房间 -->
      <div class="mod">
        <div class="layout">
          <div class="layout-item flex">
            <div class="hd"></div>
            <div class="bd">
              <div class="name">睡前故事温馨房</div>
              <div>225人</div>
            </div>
          </div>
          <div class="layout-more">查看全部</div>
        </div>
      </div>
      <!-- 公会成员 -->
      <div class="mod">
        <div class="layout">
          <div class="layout-item flex">
            <div class="hd"></div>
            <div class="bd">
              <div class="name">MC大神</div>
              <div>贡献值：59856</div>
            </div>
          </div>
          <div class="layout-more">查看全部</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { Dialog, Icon } from 'vant';
Vue.use(Dialog).use(Icon);
import HeaderBar from './components/HeaderBar';

export default {
  name: 'GuildMe',
  components: {
    HeaderBar
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    // 捐献积分
    handleAddIntegral() {
      console.log('handleAddIntegral');
    }
  }
};
</script>
<style lang="scss" scoped></style>