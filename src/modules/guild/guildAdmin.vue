<template>
  <div class="page">
    <header-bar title="公会管理"></header-bar>
    <div class="page-bd">
      <div class="grid flex">
        <router-link to="/guildSetup" class="grid-item">
          <div class="pic">
            <img src="./assets/manage-info.png" alt="">
          </div>
          <span>公会信息</span>
        </router-link>
        <router-link to="/guildAudioList" class="grid-item">
          <div class="pic">
            <img src="./assets/manage-notice.png" alt="">
          </div>
          <span>公会公告</span>
        </router-link>
        <router-link to="/guildMemberList" class="grid-item">
          <div class="pic">
            <img src="./assets/manage-members.png" alt="">
          </div>
          <span>公会成员</span>
        </router-link>
        <router-link to="/guildJoinList" class="grid-item">
          <div class="pic">
            <img src="./assets/manage-join.png" alt="">
          </div>
          <span>入会申请</span>
        </router-link>
        <router-link to="/guildExitList" class="grid-item">
          <div class="pic">
            <img src="./assets/manage-leave.png" alt="">
          </div>
          <span>退会申请</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderBar from './components/HeaderBar';

export default {
  name: 'GuildAdmin',
  components: {
    HeaderBar
  }
};
</script>
<style lang="scss" scoped>
@import './css/index.scss';
.grid {
  flex-wrap: wrap;
  align-items: center;
  &-item {
    color: #262626;
    position: relative;
    display: block;
    flex-basis: 33.3333%;
    font-size: 13px;
    padding: 20px 10px;
    text-align: center;
    background-color: #fff;
    &::before {
      position: absolute;
      content: ' ';
      pointer-events: none;
      top: 0;
      right: -50%;
      bottom: 0;
      left: -50%;
      border: 0 solid #ebedf0;
      transform: scale(0.5);
      z-index: 1;
      border-width: 0 1px 0 0;
    }
    .pic {
      margin-bottom: 6px;
    }
  }
  img {
    width: px2rem(120);
    height: px2rem(120);
    max-width: 100%;
  }
}
</style>