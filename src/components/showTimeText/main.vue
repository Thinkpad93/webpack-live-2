<template>
  <div class="">
    <div class="">{{ date }}</div>
  </div>
</template>
<script>
export default {
  name: 'showTimeText',
  props: {
    date: {
      type: [Number, String],
    },
  },
  data() {
    return {};
  },
  filters: {},
};
</script>
