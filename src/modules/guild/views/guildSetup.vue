<template>
  <div class="page">
    <header-bar title="公会信息"></header-bar>
    <div class="page-bd">
      <div class="setup">
        <div class="item flex">
          <div class="hd">公会头像</div>
          <div class="bd" style="text-align: right;">
            <img :src="info.icon" alt="" class="guild-icon">
            <svg style="opacity: 0;" t="1595494253878" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7444" width="16" height="16">
              <path d="M728.223744 520.22784a42.467328 42.467328 0 0 1-11.393024 20.503552L374.90688 882.65728c-16.662528 16.662528-43.677696 16.662528-60.340224 0s-16.662528-43.677696 0-60.340224L626.449408 510.43328 314.614784 198.598656c-16.662528-16.662528-16.662528-43.677696 0-60.340224 16.661504-16.662528 43.676672-16.662528 60.3392 0L716.879872 480.18432c10.860544 10.860544 14.642176 26.120192 11.343872 40.04352z" fill="#ccc" p-id="7445"></path>
            </svg>
          </div>
        </div>
        <div class="item flex">
          <div class="hd">公会名称</div>
          <div class="bd">
            <span class="w250 text-ellipsis">{{ info.name }}</span>
            <svg style="opacity: 0;" t="1595494253878" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7444" width="16" height="16">
              <path d="M728.223744 520.22784a42.467328 42.467328 0 0 1-11.393024 20.503552L374.90688 882.65728c-16.662528 16.662528-43.677696 16.662528-60.340224 0s-16.662528-43.677696 0-60.340224L626.449408 510.43328 314.614784 198.598656c-16.662528-16.662528-16.662528-43.677696 0-60.340224 16.661504-16.662528 43.676672-16.662528 60.3392 0L716.879872 480.18432c10.860544 10.860544 14.642176 26.120192 11.343872 40.04352z" fill="#ccc" p-id="7445"></path>
            </svg>
          </div>
        </div>
        <div class="item flex" @click="jump('declaration')">
          <div class="hd">公会宣言</div>
          <div class="bd flex a-i-c" style="justify-content: flex-end;">
            <span class="w250 text-ellipsis">{{ info.declaration ? info.declaration : '暂无' }}</span>
            <svg t="1595494253878" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7444" width="16" height="16">
              <path d="M728.223744 520.22784a42.467328 42.467328 0 0 1-11.393024 20.503552L374.90688 882.65728c-16.662528 16.662528-43.677696 16.662528-60.340224 0s-16.662528-43.677696 0-60.340224L626.449408 510.43328 314.614784 198.598656c-16.662528-16.662528-16.662528-43.677696 0-60.340224 16.661504-16.662528 43.676672-16.662528 60.3392 0L716.879872 480.18432c10.860544 10.860544 14.642176 26.120192 11.343872 40.04352z" fill="#ccc" p-id="7445"></path>
            </svg>
          </div>
        </div>
        <div class="item flex" @click="jump('introduction')">
          <div class="hd">公会简介</div>
          <div class="bd flex a-i-c" style="justify-content: flex-end;">
            <span class="w250 text-ellipsis">{{ info.introduction ? brReplace($utils.toHalf(info.introduction)) : '暂无' }}</span>
            <svg t="1595494253878" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7444" width="16" height="16">
              <path d="M728.223744 520.22784a42.467328 42.467328 0 0 1-11.393024 20.503552L374.90688 882.65728c-16.662528 16.662528-43.677696 16.662528-60.340224 0s-16.662528-43.677696 0-60.340224L626.449408 510.43328 314.614784 198.598656c-16.662528-16.662528-16.662528-43.677696 0-60.340224 16.661504-16.662528 43.676672-16.662528 60.3392 0L716.879872 480.18432c10.860544 10.860544 14.642176 26.120192 11.343872 40.04352z" fill="#ccc" p-id="7445"></path>
            </svg>
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
      overflow: hidden;
      padding-left: 20px;
      color: #8c8c8c;
      text-align: right;
      /* justify-content: flex-end; */
      span {
        display: inline-block;
        text-align: right;
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
