<template>
  <div class="downloadbar-box" v-if="isDownload">
    <div class="downloadbar flex" :class="[position]">
      <div class="downloadbar-bd flex">
        <img
          src="@/assets/logo.png"
          class="logo"
          alt=""
          width="40"
          height="40"
        />
        <div class="descr">
          <slot></slot>
        </div>
      </div>
      <div class="downloadbar-ft">
        <a id="open_header" href="" class="btn">打开</a>
      </div>
    </div>
  </div>
</template>
<script>
import { checkVersion } from '@/utils/appNativeFun';
import { linkedmeInit } from '@/config/linkedme';
import { EventBus } from '@/eventBus';

export default {
  name: 'DownloadBar',
  props: {
    position: {
      type: String,
      default: 'top',
      validator(val) {
        return ['top', 'bottom'].indexOf(val) !== -1;
      },
    },
  },
  data() {
    return {
      isDownload: false, // 默认不显示
    };
  },
  mounted() {
    this.init();
    // 侦听i-got-clicked事件及其有效负载
    EventBus.$on('i-got-clicked', this.clickHandler);
  },
  methods: {
    init() {
      let info = checkVersion(); // 浏览器版本
      if (!info.app) {
        this.isDownload = true;
        this.linkedme();
      }
    },
    // 生成深度链接
    linkedme() {
      linkedmeInit('award', 'award').then((res) => {
        if (res.url) {
          var open_header = document.getElementById('open_header');
          open_header.addEventListener('click', function() {
            linkedme.trigger_deeplink(res.url);
          });
          open_header.setAttribute('href', res.url);
        }
      });
    },
    clickHandler(clickCount) {
      console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`);
      if (clickCount === 10) {
        // 停止监听事件
        EventBus.$off('i-got-clicked');
      }
    },
  },
};
</script>
<style lang="scss">
.downloadbar-box {
  padding-top: 60px;
}
.downloadbar {
  position: fixed;
  z-index: 9527;
  width: 100%;
  height: 60px;
  padding: 0 15px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);
  &.top {
    left: 0;
    top: 0;
  }
  &.bottom {
    left: 0;
    bottom: 0;
  }
  &-bd {
    display: flex;
    align-items: center;
  }
  .descr {
    color: #666;
    margin-left: 10px;
    p {
      margin: 0 0 2px 0;
      font-size: 14px;
    }
  }
}
#open_header {
  font-size: 12px;
  color: #fff;
  border-radius: 15px;
  border: none;
  background: linear-gradient(
    90deg,
    rgba(255, 92, 157, 1) 0%,
    rgba(255, 174, 191, 1) 100%
  );
}
</style>
