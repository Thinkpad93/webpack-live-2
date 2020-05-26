<template>
  <div class="page">
    <div class="page-bd">
      <div class="update-box">
        <a class="update" href="" style="display:none"></a>
        <button
          type="button"
          class="install"
          v-if="!isShowText"
          @click="handle($event)"
        >
          下载安装
        </button>
        <p v-if="isShowText">正在安装，请按 Home 键在桌面查看</p>
      </div>
    </div>
  </div>
</template>
<script>
import { getIOSDownloadUrl } from '@/api';
export default {
  name: 'appUpdate',
  data() {
    return {
      isShowText: false,
      query: {
        password: '',
        location_href: 'https://www.jikeqi.com/6VRz',
      },
    };
  },
  mounted() {
    // 获取51发布平台plist地址
    getIOSDownloadUrl(this.query).then((res) => {
      if (res.code == 200) {
        let info = res.data.info;
        let downurl = decodeURIComponent(info.downurl);
        document.querySelector('.update').setAttribute('href', downurl);
      }
    });
  },
  methods: {
    handle(e) {
      console.log(e);
      let instll = document.querySelector('.install');
      let a = document.querySelector('.update');
      e.target.disabled = true;
      instll.style.width = '40px';
      let timer = setTimeout(() => {
        instll.classList.add('download');
        // 触发a标签的点击事件
        a.click();
      }, 300);

      let timers = setTimeout(() => {
        this.isShowText = true;
      }, 4000);
    },
  },
};
</script>
<style lang="scss">
.update-box {
  font-size: 14px;
  color: #cb1d3d;
  padding: 100px 0;
  text-align: center;
}
.install {
  width: 200px;
  height: 40px;
  color: #fff;
  transition: all 0.25s;
  border: 1px solid #cb1d3d;
  background-color: #cb1d3d;
}
.download {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border-top-color: transparent;
  border-left-color: transparent;
  animation: rotate 0.6s linear infinite;
  background-color: transparent;
}

// 旋转动画
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
