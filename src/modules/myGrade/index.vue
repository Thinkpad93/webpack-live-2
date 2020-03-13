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
import axios from "axios";
import data from "./data.json";
import Share from "@/components/Share";
import { getUid, getTicket } from "@/assets/js/appNativeFun";
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
    this.consoleTicket();
  },
  methods: {
    init() {
      axios.all([getUid(),getTicket()]).then(axios.spread((res) => {
        console.log("axios========");
        console.log(info);
      }))
    },
    consoleTicket() {
      console.log(info);
      console.log(info.ticket);
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
