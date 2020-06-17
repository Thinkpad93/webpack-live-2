<template>
  <div class="page">
    <div class="page-hd">
      <img src="./images/img_header.png" alt="" />
    </div>
    <div class="page-bd">
      <!-- 礼物展示 -->
      <div class="gifts-show">
        <img src="./images/prize.png" alt="" />
      </div>
      <!-- 皮肤兑换规则 -->
      <div class="exchange-rules">
        <img src="./images/rules.png" alt="" />
      </div>
      <!-- 活动规则 -->
      <div class="activity-rules">
        <img src="./images/img_4.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Draw',
  data() {
    return {
      query: {
        page: 1,
        pageSize: 10,
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>
