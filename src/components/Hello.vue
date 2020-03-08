<template>
  <div class="hello">
    <p>{{ title }}</p>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    title: String
  },
  data() {
    return {};
  }
};
</script>
