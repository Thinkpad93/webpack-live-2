<template>
  <div class="page">
    <div class="page-bd">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <div class="hd">
            <img :src="item.goods_img" alt="" />
          </div>
          <div class="bd">
            <p>{{ item.goods_name }}</p>
            <div class="nums">
              <span class="sp1">{{ item.price }}</span>
              <span class="sp1">{{ item.original_price }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="page-ft"></div>
  </div>
</template>
<script>
import axios from "axios";
import { getQueryString } from "@/assets/js/utils";
import { linkedmeInit } from "@/config/linkedme";
export default {
  name: "",
  data() {
    return {
      list: []
    };
  },
  created() {
    let obj = getQueryString();
  },
  mounted() {
    console.log(linkedmeInit);
    console.log(process.env.NODE_ENV);
    this.operationGet();
    linkedmeInit("home", "home").then(res => {
      console.log(res);
    });
  },
  methods: {
    operationGet() {
      axios
        .get(
          "https://api-user.uyess.com/v2/home/spike?city_id=1987&qd_no=uyes_gzh",
          {}
        )
        .then(res => {
          let result = res.data;
          if (result.status === 200) {
            this.list = result.data;
          }
        });
    }
  }
};
</script>
<style lang="scss">
@import "./css/index.scss";
</style>
