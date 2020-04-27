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
  import { getQueryString, serializeData } from "@/utils";
import service from "@/api";
export default {
  data() {
    return {
      imgSrc: "",
      query: {
        id: "",
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      service.operationGet(serializeData(this.query)).then(res => {
        
      });
    },
  },
};
</script>
<style></style>
