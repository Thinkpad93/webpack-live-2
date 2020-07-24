<template>
  <div class="page">
    <header-bar></header-bar>
    <div class="page-bd">
      <div class="mod">
        <p>公会总贡献值：4589W</p>
        <div class="medal text-center">
          <img src="https://img.cdsfl8888.com/FjHdmhSniUK7qeMuPGE2k9LPN-Vf?imageslim" alt="">
        </div>
        <div class="bar-mod flex">
          <div class="bar-left">LV.2</div>
          <div class="bar-center">
            <div class="bar" :style="{'--percent': progress}"></div>
          </div>
          <div class="bar-right">LV.3</div>
        </div>
        <div class="today-data">
          <div class="item">
            <p>今日新增成员</p>
            <span>20</span>
          </div>
          <div class="item">
            <p>今日新增贡献</p>
            <span>100W</span>
          </div>
          <div class="item">
            <p>今日贡献人数</p>
            <span>20</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderBar from './components/HeaderBar';

export default {
  name: 'GuildLevel',
  components: {
    HeaderBar
  },
  data() {
    return {
      progress: 60
    };
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
.medal {
  img {
    width: px2rem(100);
    height: px2rem(100);
    border-radius: 50px;
  }
}

.bar {
  width: 200px;
  height: 14px;
  background-color: #f5f5f5;
  &::before {
    display: block;
    counter-reset: progress var(--percent);
    content: counter(progress) '%\2002';
    width: calc(1% * var(--percent));
    color: #fff;
    background-color: #2486ff;
    text-align: right;
    white-space: nowrap;
    overflow: hidden;
    height: 100%;
  }
}
</style>