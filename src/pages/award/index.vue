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
export default {
  name: "award",
  data() {
    return {
      msg: "这是arard页面",
      uid: null,
      ticket: null
    };
  },
  created() {
    this.init();
  },
  mounted() {
    console.log(this);
    this.postMessage();
  },
  methods: {
    init() {
      console.log("初始化操作，如获取用户id");
    },
    getUidfn() {
      console.log("getUidfn");
      console.log(info.uid);
    },
    postMessage() {
      console.log(info.ticket);
    },
    propsData() {
      return new Promise((resolve, reject) => {
        //这里放异步代码
      });
    }
  }
};
</script>
<style lang="scss">
@import "./css/index";
</style>
