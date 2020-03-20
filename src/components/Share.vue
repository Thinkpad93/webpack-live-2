<template>
  <div class="share" v-if="isApp" :class="[position]">
    <div class="share-bd">
      <img
        src="@/assets/images/logo.png"
        class="logo"
        alt=""
        width="40"
        height="40"
      />
      <div class="descr">
        <p>{{ title }}</p>
        <small>{{ desc }}</small>
      </div>
    </div>
    <div class="share-ft">
      <a id="open_header" href="" class="btn">打开</a>
    </div>
  </div>
</template>
<script>
import { checkVersion } from "@/assets/js/appNativeFun";
import { linkedmeInit } from "@/config/linkedme";
import { EventBus } from "@/event-bus";
export default {
  name: "share",
  props: {
    title: String,
    desc: String,
    position: {
      type: String,
      default: "top",
      validator(val) {
        return ["top", "bottom"].indexOf(val) !== -1;
      }
    }
  },
  data() {
    return {
      href: "",
      isApp: false //是否在app内打开的
    };
  },
  created() {
    console.log("created");
    console.log(this.$props.title);
  },
  mounted() {
    let obj = checkVersion();
    this.isApp = obj.app ? true : true;
    //生成深度链接
    linkedmeInit("award", "award").then(res => {
      if (res.url) {
        var open_header = document.getElementById("open_header");
        open_header.addEventListener("click", function() {
          linkedme.trigger_deeplink(res.url);
        });
        open_header.setAttribute("href", res.url);
      }
    });
    //侦听i-got-clicked事件及其有效负载
    EventBus.$on("i-got-clicked", this.clickHandler);
  },
  methods: {
    clickHandler(clickCount) {
      console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`);
      if (clickCount === 10) {
        // 停止监听事件
        EventBus.$off("i-got-clicked");
      }
    }
  }
};
</script>
<style lang="scss">
.share {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 9527;
  width: 100%;
  height: 60px;
  padding: 0 15px;
  background-color: #ffe600;
  &.top {
    left: 0;
    top: 0;
  }
  &.bottom {
    left: 0;
    bottom: 0;
  }
  &-bd {
    display: flex;
    align-items: center;
  }
  .descr {
    margin-left: 10px;
    p {
      margin: 0 0 2px 0;
      font-size: 14px;
    }
  }
  &-ft {
    a {
      width: 88px;
      padding: 6px 0;
      color: #222;
      border-radius: 15px;
      background-color: #fff;
    }
  }
}
</style>
