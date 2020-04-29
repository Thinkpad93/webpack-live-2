<template>
  <div class="page">
    <div class="page-bd">
      <div class="container">
        <img :src="imgSrc" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { getQueryString, serializeData } from '@/utils';
import { checkVersion, initNav } from '@/utils/appNativeFun';

import service from '@/api';
export default {
  name: 'operational',
  data() {
    return {
      imgSrc: '',
      tipText: '本活动及提供奖品均与苹果公司无关',
      query: {
        id: getQueryString().id,
      },
    };
  },
  mounted() {
    console.log(this);
    this.init();
  },
  methods: {
    appShareInfo(obj) {
      let info = checkVersion();
      let { actTitle, actDesc } = obj;
      // 是否在app内
      if (info.app) {
        return {
          type: 2,
          data: {
            msg: '分享标题',
            link: window.location.href,
            title: actTitle, // 分享标题
            showUrl: window.location.href,
            imgUrl: '/bibi/common/assets/icon-logo.png',
            desc: actDesc, // 分享描述
          },
        };
      }
    },
    init() {
      service.operationGet(this.query).then((res) => {
        if (res.code === 200) {
          let result = res.data;
          if (result.actImage && result.actTitle) {
            document.title = result.actTitle; // 设置标题
            this.imgSrc = result.actImage;
            // 生成分享
            initNav(this.appShareInfo(result));
          }
        }
      });
    },
  },
};
</script>
<style></style>
