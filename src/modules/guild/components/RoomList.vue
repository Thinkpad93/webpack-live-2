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
              <div class="people">
                <img src="../assets/sociaty-people.png" alt="" />
                <span>{{ item.onlineNum }}</span>
              </div>
            </div>
            <div class="tag flex">
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
