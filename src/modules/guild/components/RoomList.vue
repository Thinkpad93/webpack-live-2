<template>
  <div class="mod room-mod">
    <ul class="room-list flex" v-if="listData.length">
      <li class="room-item" v-for="(item, index) in listData" :key="index" @click="handleRoomPage(item.uid)">
        <div class="room-box">
          <div class="room-hd text-center">
            <img :src="item.avatar" alt="" />
          </div>
          <div class="room-bd">
            <h3 class="name h3 text-center text-ellipsis">
              {{ item.title }}
            </h3>
            <div class="room-info flex">
              <div class="id">ID: {{ item.erbanNo }}</div>
              <div class="people flex">
                <svg width="16px" height="16px" viewBox="0 0 16 16">
                  <path d="M10.9046939,5.34746032 C10.9046939,6.84430858 9.69121369,8.05780126 8.19427838,8.05780126 C6.6974923,8.05780126 5.48403694,6.8443832 5.48403694,5.34746032 C5.48403694,3.85061206 6.69752962,2.63710695 8.19427838,2.63710695 C9.69122613,2.63710695 10.9046939,3.850525 10.9046939,5.34746032 Z M8.19424106,13.8791832 C6.03971634,13.8791832 4.29290625,13.6241843 4.29290625,11.7645942 C4.29290625,9.90511596 6.03969147,8.39759662 8.19441519,8.39759662 C10.3490892,8.39759662 12.09575,9.9050289 12.09575,11.7644201 C12.09575,13.6239978 10.3489399,13.8791832 8.19424106,13.8791832 Z" fill="#8c8c8c"></path>
                </svg>
                <span>{{ item.onlineNum }}</span>
              </div>
            </div>
            <div class="tag flex" :data-title="item.roomTag">
              <div class="tag-anima flex">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
              </div>
              <span>{{ item.roomTag }}</span>
            </div>
          </div>
          <div class="room-ft"></div>
        </div>
      </li>
    </ul>
    <template v-else>
      <base-empty title="暂无公会房间"></base-empty>
    </template>
  </div>
</template>
<script>
import BaseEmpty from '../components/Empty';
export default {
  name: 'RoomList',
  components: {
    BaseEmpty
  },
  props: {
    listData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    // 跳转房间
    handleRoomPage(uid) {
      return this.$utils.appTools.jumpAppointPage('ROOM_PAGE', uid);
    }
  }
};
</script>
<style lang="scss" scoped>
.room-mod {
  padding: px2rem(24) px2rem(30);
  /* background-color: #fafafa; */
  border-radius: 8px 8px 0px 0px;
}
.room-list {
  margin: 0 -5px;
  flex-wrap: wrap;
  .room-item {
    width: 50%;
    padding: 0 5px;
    margin-bottom: 10px;
  }
  .room-box {
    position: relative;
    min-height: px2rem(334);
    border-radius: px2rem(16);
    box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.1);
    background-color: #fff;
  }
  .room-bd {
    font-size: 12px;
    color: #8c8c8c;
    padding: 0 12px;
    .name {
      font-weight: 600;
      color: #262626;
      margin-bottom: 10px;
    }
    .room-info {
      justify-content: space-between;
    }
    .tag {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      font-size: 12px;
      color: #fff;
      padding: 3px 5px;
      align-items: center;
      justify-content: center;
      border-radius: px2rem(16);
      background-color: #17a2ff;
      &[data-title="女神"] {
        background-color: #f958d1;
      }
      &[data-title="点唱"] {
        background-color: #ea6c2a;
      }
      &[data-title="吃鸡"] {
        background-color: #f8b52a;
      }
    }
  }
  .room-hd {
    padding-top: px2rem(50);
    padding-bottom: px2rem(20);
    img {
      width: px2rem(152);
      height: px2rem(152);
      border-radius: 50%;
      object-fit: cover;
    }
  }
}
.tag-anima {
  align-items: center;
  margin-right: 4px;
  .line {
    width: 2px;
    height: 8px;
    margin-right: 2px;
    border-radius: 4px;
    background-color: #fff;
    animation: bar 0ms linear infinite alternate running;
    transform: translate3d(0, 0, 0);
    &:nth-child(1) {
      animation-duration: 337ms;
    }
    &:nth-child(2) {
      animation-duration: 321ms;
    }
    &:nth-child(3) {
      animation-duration: 353ms;
    }
  }
}
@keyframes bar {
  0%   {transform: scale(1, 0.25); }
  25%  {transform: scale(1, 0.5); }
  50%  {transform: scale(1, 0.75); }
  75%  {transform: scale(1, 1); }
  100% {transform: scale(1, 1.25);}
}
</style>
