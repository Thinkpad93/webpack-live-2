<template>
  <div class="dialog">
    <div class="dialog-header"></div>
    <div class="dialog-body">
      <p>{{ message }}</p>
    </div>
    <div class="dialog-footer"></div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    message: String
  },
  data() {
    return {};
  }
};
</script>
