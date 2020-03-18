<template>
  <div class="page">
    <Share title="哎呀语音" desc="哎呀，你也在这里～" />
    <ul>
      <li v-for="item in list">{{ item.name }}</li>
    </ul>
    <button class="btn">提交</button>
    <input type="text" value="" class="input">
    <textarea class="textarea"></textarea>
  </div>
</template>
<script>
import service from "@/api";
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
        uid: getUid() || _cookie.get("uid")
        //ticket: getTicket()
      },
      query: {
        uid: "90295944",
        datetype: 1,
        type: 2
      }
    };
  },
  mounted() {
    this.init();
    this.list = data.data || [];
    this.allrank();
  },
  methods: {
    init() {
      let obj = checkVersion();
      /*
       getTicket(); // 异步调用
       注册一个全局函数
       并且该函数只会在ios客户端下被执行调用
      */
      window.getMessage = (key, value) => {
        console.log(`${key}-${value}`);
        this.info[key] = value;
        if (this.info.ticket || this.info.uid) {
          console.log("都有值了");
          this.getUserExper();
        }
      };
      if (obj.android) {
        this.getUserExper();
      }
    },
    allrank() {
      service.allrank(this.query).then(res => {
        console.log("res");
      });
    }
  }
};
</script>
<style lang="scss">
</style>
