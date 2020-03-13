<template>
  <div class="page">
    <div class="page-bd">
      <p>
        《功夫》是由周星驰执导，周星驰、曾谨昌、霍昕、陈文强编剧，周星驰、梁小龙、元华等主演的动作喜剧类电影，于2004年12月23日在中国上映。
      </p>
      <p>
        影片讲述了一个街头混混变成一代武术家，一个本性善良的黑帮流氓改邪归正的故事
      </p>
      <img src="./images/20181216171543.jpg" alt="" />
      <p>
        20世纪40年代的中国广东，有一名无可药救的小混混阿星（周星驰饰），此人能言善道、擅耍嘴皮，但意志不坚，一事无成。他一心渴望加入手段冷酷无情、恶名昭彰的斧头帮，并梦想成为黑道响叮当的人物。此时斧头帮正倾全帮之力急欲铲平唯一未收入势力范围的地头，未料该地卧虎藏龙，痴肥的恶霸女房东肥婆加上与其成对比的懦弱丈夫二叔公，率领一班深藏不漏的武林高手，大展奇功异能，对抗恶势力
      </p>
      <p>{{ msg }}</p>
      <div class="box"></div>
      <van-button type="info" @click="handle">默认按钮</van-button>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Button } from "vant";
Vue.use(Button);
import { getQueryString } from "@/assets/js/utils";
export default {
  name: "",
  data() {
    return {
      msg: "这是BUS页面"
    };
  },
  created() {
    let obj = getQueryString();
    console.log(obj);
  },
  mounted() {
    console.log("mounted");
    if (process.env.NODE_ENV === "production") {
      console.log("Looks like we are in production mode!");
    }
  },
  methods: {
    handle() {
      console.log(window);
    }
  }
};
</script>
<style lang="scss">
@import "./css/bus.scss";
</style>
