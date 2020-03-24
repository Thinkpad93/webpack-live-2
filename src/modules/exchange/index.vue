<template>
  <div class="page">
    <div class="page-hd">
      <div class="flex peipei">
        <img src="./images/ic-peipei.png" alt="" width="36" height="36" />
        <p>陪玩券数量: <span class="color-1">120</span></p>
      </div>
    </div>
    <div class="page-bd">
      <div class="empty text-center" v-if="!list.length">
        <img src="./images/img-empty.png" alt="" width="130" height="130">
        <p>-空空如也-</p>
      </div>
      <div class="flex flex-wrap" style="margin-right: -4px;margin-left: -4px;">
        <div class="item" v-for="(item, index) in list">
          <div
            class="gi"
            :class="[index == active ? 'gi-active' : '']"
            @click="switchItem(item, index)"
          >
            <img src="" alt="" />
            <p class="">{{ item.name }}</p>
            <div class="flex gi-ft">
              <img src="./images/ic-peipei.png" alt="" width="16" height="16" />
              <i>×{{ item.nums }}</i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-ft fixed" v-if="list.length">
      <button class="btn btn-linear-one btn-linear-one" large @click="toastClick">
        兑换
      </button>
      <p v-show="active != -999">
        兑换{{ activeText }}需<span class="color-1">{{ activeNums }}</span>个陪玩券，当前你有<span
          class="color-1"
          >20</span
        >个，可以兑换，兑换后，会扣除对应数量的陪玩券。
      </p>
    </div>
  </div>
</template>
<script>
import service from "@/api";
import { getUid, getTicket } from "assets/js/appNativeFun";
import _cookie from "assets/js/cookies";
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
export default {
  name: "",
  data() {
    return {
      active: -999,
      activeText: "",
      activeNums: 0,
      query: {
        uid: getUid() || _cookie.get("uid"), // 通用获取用户uid方法
        ticket: getTicket() // 获取用户ticket
      },
      list: [
        {
          name: "鲜花头像框（30天）",
          nums: 85,
        },
        {
          name: "最美女神（30天）",
          nums: 5,
        },
        {
          name: "年度优秀主播（30天）",
          nums: 136,
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    // 初始化操作
    init() {

    },
    switchItem(params, index) {
      let { nums, name } = params;
      this.activeText = name;
      this.activeNums = nums;
      return (this.active = index);
    },
    toastClick() {
      this.$toast("提示");
    }
  }
};
</script>
<style type="text/scss" lang="scss">
@function px2rem($px, $rem: 75) {
  @return $px / $rem + rem;
}
body {
  background: rgba(245, 245, 245, 1);
}
.color-1 {
  color: #ff5c9d;
}
.page-hd {
  width: 100%;
  background-color: #fff;
}
.page-bd {
  padding: 10px px2rem(30);
  margin-bottom: px2rem(140);
}
.page-ft {
  color: #8c8c8c;
  left: 0;
  bottom: 0;
  z-index: 10;
  width: 100%;
  padding: 10px 15px;
  background-color: #fff;

  button {
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: px2rem(50);
    height: px2rem(100);
    
  }

  p {
    line-height: 1.4;
    margin-top: 6px;
  }
}
.peipei {
  font-size: 14px;
  align-items: center;
  padding: 8px px2rem(30);

  img {
    margin-right: 6px;
  }
}
.item {
  width: 33.3333%;
  padding: 0 4px;
  margin-bottom: 12px;
}
.gi {
  padding: 0 10px;
  text-align: center;
  overflow: hidden;
  border-radius: 8px;
  min-height: px2rem(282);
  background-color: #fff;

  &-active {
    border: 1px solid #ff5c9d;
  }

  &-ft {
    justify-content: center;
    align-items: center;
    color: #8c8c8c;
  }
}
</style>
