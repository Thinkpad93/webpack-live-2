<template>
  <div class="page">
    <Share title="哎呀语音" desc="哎呀，你也在这里～" />
    <div class="max"></div>
    <ul>
      <li v-for="item in list">{{ item.name }}</li>
    </ul>
  </div>
</template>
<script>
import data from "./data.json";
import Share from "@/components/Share";
import { checkVersion, getUid, getTicket } from "@/assets/js/appNativeFun";
import _cookie from "@/assets/js/cookies";
export default {
  name: "",
  components: {
    Share
  },
  data() {
    return {
      msg: "",
      list: [],
      info: {
        uid: getUid() || _cookie.get("uid"),
        ticket: getTicket()
      }
    };
  },
  created() {
    this.init();
  },
  mounted() {
    this.list = data.data || [];
  },
  methods: {
    init() {
      let _that = this;
      //getTicket(); //异步调用
      //只会在ios客户端下执行调用
      window.getMessage = function(key, value) {
        _that.info[key] = value;
        if (_that.info.ticket) {
          console.log("都有值了");
          _that.consoleTicket();
        }
      };
    },
    consoleTicket() {
      console.log(this.info);
      console.log(this.info.ticket);
      console.log("info=============");
    }
  }
};
</script>
<style lang="scss">
.max {
  height: 200px;
  background: linear-gradient(225deg, #ff9f99 0%, #ff639c 100%);
}
</style>
