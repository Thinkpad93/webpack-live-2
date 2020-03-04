<template>
  <div class="page">
    <div class="page-bd">
      <p>{{ msg }}</p>
      <div class="box"></div>
      <van-button type="info" @click="handle">默认按钮</van-button>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Button } from "vant";
Vue.use(Button);
import { getQueryString } from "@/assets/js/utils";
export default {
  name: "",
  data() {
    return {
      msg: "这是BUS页面"
    };
  },
  created() {
    let obj = getQueryString();
    console.log(obj);
  },
  mounted() {
    console.log("mounted");
    if (process.env.NODE_ENV === "production") {
      console.log("Looks like we are in production mode!");
    }
  },
  methods: {
    handle() {
      console.log(window);
    }
  }
};
</script>
<style lang="scss">
@import "./css/bus.scss";
</style>
