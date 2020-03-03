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
import axios from "axios";
export default {
  name: "award",
  data() {
    return {
      msg: "这是arard页面",
      uid: null,
      ticket: null,
      query: {
        uid: "90293691",
        type: 2,
        subType: 1
      }
    };
  },
  created() {
    this.init();
  },
  mounted() {
    console.log(this);
    this.list();
  },
  methods: {
    init() {
      console.log("初始化操作，如获取用户id");
    },
    getUidfn() {
      console.log("getUidfn");
      console.log(info);
      console.log(info.uid);
    },
    postMessage() {},
    propsData() {
      return new Promise((resolve, reject) => {
        //这里放异步代码
      });
    },
    list() {
      axios.get("/allrank/listV2", { params: this.query }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style lang="scss">
@import "./css/index";
</style>
