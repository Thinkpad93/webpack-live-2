<template>
  <div class="page">
    <div class="page-bd">
      <div class="update-box">
        <a class="update" href="" style="display:none"></a>
        <button
          type="button"
          class="install"
          :class="{ download: isClick }"
          @click="handle($event)"
        >
          下载安装
        </button>
        <div class="tips">
          <!-- <p
            class="download"
            style=""
          ></p> -->
        </div>
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
      isClick: false,
      query: {
        password: '',
        location_href: 'https://www.jikeqi.com/6VRz',
      },
    };
  },
  mounted() {
    getIOSDownloadUrl(this.query).then((res) => {
      if (res.code == 200) {
        let info = res.data.info;
        let downurl = decodeURIComponent(info.downurl);
        document.querySelector('.update').setAttribute('href', downurl);
      }
    });
    // document.addEventListener('click', (e) => {
    //   console.log(e.target);
    //   console.log(e);
    // });
  },
  methods: {
    handle(e) {
      console.log(e);
      e.target.disabled = true;
      let instll = document.querySelector('.install');
      let a = document.querySelector('.update');
      instll.style.width = '40px';
      setTimeout(() => {
        this.isClick = true;
        // 触发a标签的点击事件
        a.click();
      }, 300);
    },
  },
};
</script>
<style lang="scss">
.update-box {
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

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
