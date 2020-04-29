<template>
  <div v-if="!status">
    <template v-if="actObj.actStatus === 1 || actObj.actStatus === 2">
      <div class="default text-center">
        <img src="../images/default.png" alt="" width="118" height="118" />
        <p>{{ tipText }}</p>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'empty',
  props: {
    actObj: {
      type: Object,
      default: function() {
        return {}
      }
    },
    tipText: String,
    status: Boolean,
  },
};
</script>
