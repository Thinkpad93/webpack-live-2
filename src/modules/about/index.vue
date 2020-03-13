<template>
  <div class="page">
    <p class="p1">{{ msg }}</p>
    <img src="./images/success.png" alt="" width="105" height="110">
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      msg: "index"
    };
  }
};
</script>
<style lang="scss">
@import "./css/index";
</style>
