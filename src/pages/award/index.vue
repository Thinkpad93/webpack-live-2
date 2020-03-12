<template>
  <div class="page">
    <Share title="哎呀语音" desc="哎呀，你也在这里～" />
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
import { getQueryString } from "@/assets/js/utils";
import service from "@/api";
import Share from "@/components/Share";
export default {
  name: "award",
  components: {
    Share
  },
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
    let obj = getQueryString();
  },
  mounted() {
    console.log(this);
    this.list();
  },
  methods: {
    init() {
      console.log("初始化操作，如获取用户id");
    },
    Getticket() {},
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
      service.hot({}).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style lang="scss">
@import "./css/index";
</style>
