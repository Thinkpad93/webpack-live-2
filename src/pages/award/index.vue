<template>
  <div class="page">
    <div class="page-bd">
      <p>{{ msg }}</p>
      <p class="">
        <button class="btn" @click="Getticket">获取ticket</button>
      </p>
      <p class="">
        <button class="btn" @click="getUidfn">获取uid</button>
      </p>
    </div>
  </div>
</template>
<script>
import { getUid, getTicket } from "@/assets/js/appNativeFun";
export default {
  name: "award",
  data() {
    return {
      msg: "这是arard页面",
      uid: getUid(),
      ticket: null
    };
  },
  created() {
    this.init();
  },
  mounted() {
    console.log(this);
  },
  methods: {
    init() {
      console.log("初始化操作，如获取用户id");
    },
    propsData() {
      return new Promise((resolve, reject) => {
        //这里放异步代码
        this.uid = getUid();
        this.kicket = getTicket();
      });
    }
  }
};
</script>
<style lang="scss">
@import "./css/index";
</style>
