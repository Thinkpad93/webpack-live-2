<template>
  <div class="page">
    <header-bar title="公会信息"></header-bar>
    <div class="page-bd">
      <div class="setup">
        <div class="item flex">
          <div class="hd">公会头像</div>
          <div class="bd">
            <img :src="info.icon" alt="" class="guild-icon">
          </div>
        </div>
        <div class="item flex">
          <div class="hd">公会名称</div>
          <div class="bd">
            <span class="w250 text-ellipsis">{{ info.name }}</span>
          </div>
        </div>
        <div class="item flex" @click="jump('declaration')">
          <div class="hd">公会宣言</div>
          <div class="bd">
            <span class="w250 text-ellipsis">{{ info.declaration ? info.declaration : '暂无' }}</span>
            <img src="./assets/arrow-right.png" alt="">
          </div>
        </div>
        <div class="item flex" @click="jump('introduction')">
          <div class="hd">公会简介</div>
          <div class="bd">
            <span class="w250 text-ellipsis">{{ info.introduction ? brReplace($utils.toHalf(info.introduction)) : '暂无' }}</span>
            <img src="./assets/arrow-right.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderBar from './components/HeaderBar';
import { guildDetail } from '@/api/guild';

export default {
  name: 'GuildSetup',
  components: {
    HeaderBar
  },
  data() {
    return {
      query: {
        guildId: this.$state.guild.guildId,
        uid: this.$state.info.uid
      },
      info: {}
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    jump(type) {
      this.$router.push({ path: '/guildSlogan', query: { type }})
    },
    getInfo() {
      guildDetail({ data: this.query }).then(res => {
        if (res.code === 200) {
          this.info = res.data;
        }
      });
    },
    brReplace(str) {
      if (str) {
        return str.replace(/<br\/>/g, '\n');
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import './css/index.scss';
.w250 {
  width: 250px;
}
.setup {
  background-color: #fff;
  .item {
    align-items: center;
    font-size: 14px;
    min-height: px2rem(100);
    padding: 0 px2rem(30);
    &:first-child {
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .bd {
      flex: 1;
      text-align: right;
      overflow: hidden;
      padding-left: 20px;
      color: #8c8c8c;
      span {
        display: inline-block;
      }
      .guild-icon {
        width: px2rem(112);
        height: px2rem(112);
        border-radius: px2rem(16);
      }
    }
  }
}
</style>
