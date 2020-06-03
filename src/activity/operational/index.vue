<template>
  <div class="page">
    <div class="page-bd">
      <div class="container">
        <img :src="imgSrc" alt="" />
      </div>
    </div>
    <appleText v-model="appleActText" />
    <downLoadBar position="bottom" />
  </div>
</template>
<script>
import { getQueryString } from '@/utils';
import { checkVersion, initNav } from '@/utils/appNativeFun';
import { operationGet } from '@/api';
import appleText from '@/components/appleText';
import downLoadBar from '@/components/downLoadBar';
import _wx from '@/config/wx';

export default {
  name: 'Operational',
  components: {
    appleText,
    downLoadBar,
  },
  data() {
    return {
      appleActText: false,
      imgSrc: '',
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let obj = getQueryString();
      let brow = checkVersion();
      // 微信
      brow.weixin && this.weixinShareInfo();

      // 苹果活动提示
      if (brow.app) {
        if (brow.ios && obj.apple != undefined) {
          this.appleActText = true;
        }
      }
      // 获取活动图片
      operationGet({ id: obj.id }).then((res) => {
        if (res.code === 200) {
          let result = res.data;
          if (result.actImage && result.actTitle) {
            document.title = result.actTitle; // 设置标题
            this.imgSrc = result.actImage;
            // 生成分享
            if (brow.app) {
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
