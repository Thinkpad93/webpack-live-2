<template>
  <div class="page">
    <Share title="哎呀语音" desc="哎呀，你也在这里～" />
    <div class="max"></div>
    <ul>
      <li v-for="item in list">{{ item.name }}</li>
    </ul>
    <button class="btn">这是一个按钮</button>
  </div>
</template>
<script>
import data from "./data.json";
import Share from "@/components/Share";
import { getTicket } from "@/assets/js/appNativeFun";
export default {
  name: "",
  components: {
    Share
  },
  props: {
    value: {
      type: String,
      default: "is"
    }
  },
  data() {
    return {
      msg: "",
      list: []
    };
  },
  created() {
    this.init();
  },
  mounted() {
    this.list = data.data || [];
    
  },
  methods: {
    async init() {
      getTicket();
      let result = window.getMessage = await function(key, value) {
        console.log(`${key}=${value}`);
        let obj = {
          key,
          value
        }
      };
      console.log(result);
      console.log("result================");
    },
    consoleTicket() {
      this.$nextTick(() => {
        console.log(info);
        console.log(info.ticket);
        console.log("info=============");
      });
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
