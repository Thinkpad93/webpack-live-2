<template>
  <div class="page">
    <div class="page-bd">
      <div class="update-box">
        <a class="update" href="" style="display:none"></a>
        <button type="button" class="btn" @click="handle($event)">
          下载安装
        </button>
        <div class="tips">
          <p></p>
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
    document.addEventListener('click', (e) => {
      console.log(e.target);
      console.log(e);
      // 只读属性
      // if (!e.isTrusted) {
      //   console.log('用户行为点击的');
      // } else {
      //   console.log('不是用户行为点击的');
      // }
    });
  },
  methods: {
    handle(e) {
      console.log(e);
      e.target.innerText = '正在安装，请按 Home 键在桌面查看';
      e.target.disabled = true;
      // 触发a标签的点击事件
      let a = document.querySelector('.update');
      a.click();
    },
  },
};
</script>
<style lang="scss">
.btn {
  color: #fff;
  border: 1px solid rgb(0, 198, 255) !important;
  background: linear-gradient(
    to right bottom,
    rgb(65, 0, 185),
    rgb(0, 198, 255)
  );
}
</style>
