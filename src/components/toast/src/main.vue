<template>
  <transition name="toast-fade">
    <div class="toast" v-show="value">
      <div class="toast-bd"></div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Toast',
  props: {
    value: Boolean,
  },
  methods: {
    updateZIndex() {
      console.log('updateZIndex');
    },
  },
};
</script>
