<template>
  <div class="page">
    <div class="page-bd">
      <p>{{ msg }}</p>
      <van-button type="default" @click="handle">默认按钮</van-button>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Button } from "vant";
Vue.use(Button);
export default {
  name: "",
  data() {
    return {
      msg: "这是BUS页面"
    };
  },
  methods: {
    handle() {
      alert(window);
    }
  }
};
</script>
<style lang="scss">
@import "~normalize.css";
@import "./css/index.scss";
</style>
