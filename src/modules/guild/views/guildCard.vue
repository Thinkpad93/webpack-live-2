<template>
  <div class="page">
    <header-bar></header-bar>
    <div class="page-bd">
      <!-- 公会名片 -->
      <div class="mod">
        <div class="card">
          <div class="card-hd" @click="jump">
            <img src="https://img.cdsfl8888.com/FjHdmhSniUK7qeMuPGE2k9LPN-Vf?imageslim" alt="">
          </div>
          <div class="card-bd">
            <h3 class="name">九零娱乐</h3>
            <p class="desc text-ellipsis">招收游戏大神，歌手，主持</p>
            <div class="metadata">
              <span class="id">ID:2222</span>
              <span class="members">成员:2222</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 公会房间 -->
      <div class="mod">
        <ul class="room-list flex">
          <li class="room-item" v-for="(item, index) in 5" :key="index">
            <div class="room-hd">
              <img src="https://img.cdsfl8888.com/FjHdmhSniUK7qeMuPGE2k9LPN-Vf?imageslim" alt="">
            </div>
            <div class="room-bd">
              <h3 class="name">心动男神</h3>
              <div>直播间ID：5895</div>
              <div>852</div>
              <div class="tag">男神</div>
            </div>
            <div class="room-ft"></div>
          </li>
        </ul>
      </div>
    </div>
    <div class="page-ft">
      <van-button type="primary" block>{{ joinStatusFn }}</van-button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { Button } from 'vant';
import HeaderBar from './components/HeaderBar';
Vue.use(Button);

export default {
  name: 'GuildCard',
  components: {
    HeaderBar
  },
  data() {
    return {
      joinStatus: 1 // 加入状态
    };
  },
  computed: {
    joinStatusFn() {
      switch(this.joinStatus) {
        case 1:
          return '申请加入';
        case 2:
          return '入会申请中';
        default:
          return '';
      }
    }
  },
  mounted() {
    console.log(this.$router);
  },
  methods: {
    jump() {
      this.$router.push({ path: '/guildInfo', query: { data: new Date().getTime() }});
    },
    // 跳转个人房间
    handleRoomPage(uid) {
      return this.$utils.appTools.jumpAppointPage('ROOM_PAGE', uid);
    }
  }
};
</script>
<style lang="scss" scoped>
.room-list {
  flex-wrap: wrap;

  .room-item {
    width: 50%;
  }

  .room-hd {
    img {
      max-width: 100%;
    }
  }
}
.page-ft {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 10;
}
</style>