<template>
  <div class="page">
    <div class="page-bd">
      <div class="">
        <ul class="list">
          <li class="item" v-for="item in list">
            <p>{{ item.loveValue }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import service from '@/api';
export default {
  name: '',
  data() {
    return {
      query: {
        pageNum: 1,
        pageSize: 10,
      },
      list: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 获取真爱榜数据
      service.datingRank(this.query).then((res) => {
        if (res.code === 200) {
          console.log(res);
          let result = res.data;
          if (result.length) {
            this.list = result;
          }
        }
      });
    },
  },
};
</script>
<style lang="scss"></style>
