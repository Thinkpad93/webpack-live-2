<template>
  <div class="page">
    <header-bar></header-bar>
    <div class="page-bd">
      <div class="grid flex">
        <router-link to="/guildInfo" class="grid-item">
          <div>
            <img src="https://img.cdsfl8888.com/FjHdmhSniUK7qeMuPGE2k9LPN-Vf?imageslim" alt="">
          </div>
          <span>公会信息</span>
        </router-link>
        <router-link to="/guildAudioList" class="grid-item">
          <div>
            <img src="https://img.cdsfl8888.com/FjHdmhSniUK7qeMuPGE2k9LPN-Vf?imageslim" alt="">
          </div>
          <span>公会公告</span>
        </router-link>
        <router-link to="/guildMemberList" class="grid-item">
          <div>
            <img src="https://img.cdsfl8888.com/FjHdmhSniUK7qeMuPGE2k9LPN-Vf?imageslim" alt="">
          </div>
          <span>公会成员</span>
        </router-link>
        <router-link to="/guildJoinList" class="grid-item">
          <div>
            <img src="https://img.cdsfl8888.com/FjHdmhSniUK7qeMuPGE2k9LPN-Vf?imageslim" alt="">
          </div>
          <span>入会申请</span>
        </router-link>
        <router-link to="/guildExitList" class="grid-item">
          <div>
            <img src="https://img.cdsfl8888.com/FjHdmhSniUK7qeMuPGE2k9LPN-Vf?imageslim" alt="">
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
  },
  data() {
    return {}
  }
};
</script>
<style lang="scss" scoped>
.grid {
  flex-wrap: wrap;
  align-items: center;
  &-item {
    flex-basis: 33.3333%;
    padding: 20px 10px;
    text-align: center;
  }
  img {
    max-width: 100%;
  }
}
</style>