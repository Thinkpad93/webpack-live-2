<template>
  <div class="apple" v-if="value">本活动及提供奖品均与苹果公司无关</div>
</template>
<script>
export default {
  name: 'appleText',
  props: {
    value: {
      type: Boolean,
    },
  },
};
</script>
<style lang="scss">
.apple {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
  width: 100%;
  padding: 10px 0;
  text-align: center;
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
