<template>
  <div class="page">
    <div class="page-bd">
      <div class="logo">
        <img src="" alt="" />
      </div>
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
        <ul class="">
          <li>版本 {{ info.version }}</li>
          <li>大小 {{ info.app_size }}</li>
          <li>更新时间 {{ info.published_at }}</li>
        </ul>
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
      info: {}, // app信息
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
        this.info = res.data.info;
        // 解析转义字符
        let downurl = decodeURIComponent(this.info.downurl);
        document.querySelector('.update').setAttribute('href', downurl);
      }
    });
  },
  methods: {
    // 点击下载
    handle(e) {
      console.log(e);
      let a = document.querySelector('.update');
      e.target.disabled = true;
      e.target.innerHTML = '';
      e.target.style.width = '40px';
      let timer = setTimeout(() => {
        e.target.classList.add('download');
        // 触发a标签的点击事件
        a.click();
      }, 300);

      let timers = setTimeout(() => {
        this.isShowText = true;
      }, 5000);
    },
  },
};
</script>
<style lang="scss">
.page-bd {
  padding: 100px 0;
}
.update-box {
  font-size: 14px;
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
