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
import { operationGet } from '@/api';
import _wx from '@/config/wx';

export default {
  name: 'operational',
  data() {
    return {
      info: checkVersion(),
      imgSrc: '',
      tipText: '本活动及提供奖品均与苹果公司无关',
      query: {
        id: getQueryString().id,
      },
    };
  },
  mounted() {
    this.init();
    this.weixinShareInfo();
  },
  methods: {
    init() {
      operationGet(this.query).then((res) => {
        if (res.code === 200) {
          let result = res.data;
          if (result.actImage && result.actTitle) {
            document.title = result.actTitle; // 设置标题
            this.imgSrc = result.actImage;
            // 生成分享
            if (this.info.app) {
              // 是否在app内
              initNav(this.createShareInfo(result));
            }
          }
        }
      });
    },
    // 创建分享信息
    createShareInfo(obj) {
      let { actTitle, actDesc } = obj;
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
    },
    // 微信分享
    weixinShareInfo() {
      this.info.weixin &&
        _wx.wxConfig(function() {
          // 分享给朋友
          _wx.updateAppMessageShareData({});
        });
    },
  },
};
</script>
<style lang="scss">
.container {
  position: relative;
  img {
    max-width: 100%;
  }
}
</style>
