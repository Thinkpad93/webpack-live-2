<template>
  <div class="list">
    <p v-for="(item, index) in 20" :key="index">list {{ index }}</p>
  </div>
</template>
<script>
export default {
  name: 'article',
  data() {
    return {};
  },
};
</script>
<style lang="scss"></style>
