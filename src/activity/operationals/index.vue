<template>
  <div class="page">
    <div class="page-bd">
      <div class="container">
        <img :src="imgSrc" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import service from "@/api";
export default {
  data() {
    return {
      imgSrc: "",
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {},
  },
};
</script>
<style></style>
