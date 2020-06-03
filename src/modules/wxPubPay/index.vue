<template>
  <div class="page">
    <div class="page-hd">
      <img src="" alt="" />
    </div>
    <div class="page-bd">
      <ul class="list">
        <li class="item" v-for="(item, index) in list" :key="index">
          {{ item.money }}
        </li>
      </ul>
      <p>微信关注bibi约玩公众号，享更多优惠</p>
    </div>
  </div>
</template>
<script>
import { chargeprodList } from '@/api';
export default {
  name: 'WxPubPay',
  data() {
    return {
      query: {
        channelType: 1,
        uid: 0,
        channel: 1,
      },
      list: [], // 数据
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      chargeprodList(this.query).then((res) => {
        if (res.code === 200) {
          let result = res.data;
          if (result.chargeProdVos.length) {
            this.list = result.chargeProdVos;
          }
        }
      });
    },
  },
};
</script>
