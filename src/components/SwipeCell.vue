<template>
  <div class="swiper-cell">
    <div
      class="swiper-cell__wrapper"
      @touchstart="touchstart"
      @touchmove="touchmove"
      :style="wrapperStyle"
    >
      <div class="cell-left"></div>
      <div class="cell cell__borderless">
        <div class="cell__title">
          <span>单元格</span>
        </div>
        <div class="cell__value">
          <span>内容</span>
        </div>
      </div>
      <div class="cell-right"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SwipeCell",
  data() {
    return {};
  },
  computed: {
    wrapperStyle() {
      return {
        transform: `translate3d(0%, 0, 0)`,
        transitionDuration: "0.6s"
      };
    }
  },
  methods: {
    touchstart(e) {
      console.log(e);
    },
    touchmove(e) {
      console.log(e);
    }
  }
};
</script>
<style>
.swiper-cell {
  position: relative;
  overflow: hidden;
  cursor: grab;
  background-color: #f2f2f2;
}
.swiper-cell__wrapper {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1);
}
.cell {
  display: flex;
  padding: 15px 10px;
}
.cell-left,
.cell-right {
  position: absolute;
  top: 0;
  height: 100%;
}
.cell-left {
  left: 0;
  width: 50px;
  background-color: #07c160;
  transform: translate3d(-100%, 0, 0);
}
.cell-right {
  right: 0;
  width: 100px;
  background-color: #000;
  transform: translate3d(100%, 0, 0);
}
.cell__title,
.cell__value {
  flex: 1;
}
.cell__title {
  text-align: left;
}
.cell__value {
  text-align: right;
}
</style>
