<template>
  <div class="article">
    <p v-for="(item, index) in 20" :key="index">article {{ index }}</p>
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
<style lang="scss">
.article {
  color: #999;
}
</style>
