<template>
  <div class="page">
    <Share title="哎呀语音" desc="哎呀，你也在这里～" position="top" />
    <ul>
      <li v-for="item in list">{{ item.name }}</li>
    </ul>
    <audio src="./87fe.mp3"></audio>
    <p>{{ clickCount }}</p>
    <button class="btn" @click="bus">发布事件总数</button>
  </div>
</template>
<script>
import service from "@/api";
import data from "./data.json";
import Share from "@/components/Share";
import { checkVersion, getUid, getTicket } from "assets/js/appNativeFun";
import _cookie from "assets/js/cookies";
import { EventBus } from "@/eventBus";
export default {
  name: "",
  components: {
    Share
  },
  data() {
    return {
      clickCount: 0,
      msg: "",
      list: [],
      info: {
        uid: getUid() || _cookie.get("uid")
        //ticket: getTicket()
      },
      query: {
        uid: "90293702",
        web_token:
          "eyJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjkwMjkzNzAyLCJzdWIiOiI5MDI5MzcwMiIsImV4cCI6MTU4NDY5NzA5NSwiaWF0IjoxNTg0Njg5ODk1LCJqdGkiOiIzM2U3MDBlZS05MTIzLTRiNzUtOTIyZS03YzVlNTI2ZDE1ZDcifQ.XzA9z1ssMNMF7oe7g6w1Op512IPfI9XwO_iZ56j0PIY"
        // datetype: 1,
        // type: 2
      }
    };
  },
  mounted() {
    this.init();
    this.list = data.data || [];
    this.allrank();
    this.userMsg();
    console.log(EventBus);
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
          this.allrank();
        }
      };
      if (obj.android) {
        this.allrank();
      }
    },
    allrank() {
      service.purse(this.query).then(res => {
        console.log("res");
      });
    },
    userMsg() {
      service.userMsg().then(res => {
        console.log("res");
      });
    },
    bus() {
      this.clickCount++;
      // 发布事件
      EventBus.$emit("i-got-clicked", this.clickCount);
    }
  }
};
</script>
<style lang="scss"></style>
