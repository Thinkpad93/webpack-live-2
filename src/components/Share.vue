<template>
  <div class="share">
    <div class="share-bd">
      <img
        src="@/assets/images/logo.png"
        class="logo"
        alt=""
        width="40"
        height="40"
      />
      <div class="descr">
        <p>{{ title }}</p>
        <small>{{ desc }}</small>
      </div>
    </div>
    <div class="share-ft">
      <a href="javascript:void(0);" class="btn">打开</a>
    </div>
  </div>
</template>
<script>
import linkedmeInit from "@/config/linkedme";
export default {
  name: "share",
  props: {
    title: String,
    desc: String
  },
  mounted() {}
};
</script>
<style lang="scss">
.share {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9527;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  background-color: #ffe600;
  &-bd {
    display: flex;
    align-items: center;
  }
  .descr {
    margin-left: 10px;
    p {
      margin: 0 0 2px 0;
      font-size: 14px;
    }
  }
  &-ft {
    a {
      width: 88px;
      padding: 6px 0;
      color: #222;
      border-radius: 15px;
      background-color: #fff;
    }
  }
}
</style>
