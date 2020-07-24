<template>
  <div class="mod layout-mod">
    <ul class="layout" v-if="listData.length">
      <li
        class="layout-item flex"
        v-for="(item, index) in listData"
        :key="index"
      >
        <div class="hd">
          <div
            class="header-wear"
            v-if="item.userGeneralVo.userHeadwear"
            :style="{ backgroundImage: 'url(' + item.userGeneralVo.userHeadwear.pic + ')' }"
          ></div>
          <img :src="item.userGeneralVo.avatar" alt="" class="avatar" />
        </div>
        <div class="bd">
          <div class="user-info flex a-i-c">
            <div class="vo">
              <div class="user-name text-ellipsis">{{ item.userGeneralVo.nick }}</div>
            </div>
            <div class="level flex">
              <template v-if="item.userGeneralVo.userNamePlate">
                <img :src="item.userGeneralVo.userNamePlate.pic" alt="" class="nameplate" />
              </template>
              <img :src="item.userGeneralVo.userLevelVo.charmUrl" alt="" width="20" height="20" />
              <img :src="item.userGeneralVo.userLevelVo.wealthUrl" alt="" width="20" height="20" />
            </div>
          </div>
          <slot :row="item"></slot>
        </div>
        <div class="ft">
          <slot name="handle" :row="item" :$index="index"></slot>
        </div>
      </li>
    </ul>
    <template v-else>
      <base-empty title="暂无数据"></base-empty>
    </template>
  </div>
</template>
<script>
import BaseEmpty from '../components/Empty';

export default {
  name: 'UserList',
  components: {
    BaseEmpty
  },
  props: {
    // 是否显示铭牌
    showNameplate: {
      type: Boolean,
      default() {
        return true;
      }
    },
    listData: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.layout-mod {
  padding: 0 px2rem(30);
  background-color: #fff;
}
.layout {
  &-item {
    height: px2rem(168);
    align-items: center;
    .hd {
      position: relative;
      margin-right: px2rem(24);
      img {
        width: px2rem(120);
        height: px2rem(120);
        border-radius: 50%;
        vertical-align: top;
      }
    }

    .bd {
      flex: 1;
      overflow: hidden;
    }

    .ft {
      b {
        display: inline-block;
        text-align: center;
        padding: 1px 0;
        width: px2rem(104);
        margin: 0 4px;
        font-size: 13px;
        border-radius: px2rem(20);
      }
      .admin {
        color: #ff9b00;
        border: 1px solid #ffa900;
      }
      .agree {
        color: #fff;
        background-color: #36ca68;
      }
      .refused {
        color: #ef173e;
        background-color: #ffeded;
      }
    }
    .vo {
      max-width: px2rem(180);
    }
    .user-name {
      font-size: 16px;
      margin-right: 3px;
    }
    .level {
      margin: 0 0;
      img {
        margin-right: 3px;
      }
      .nameplate {
        height: 20px;
        object-fit: cover;
      }
    }
    .ids {
      font-size: 13px;
      color: rgba(140, 140, 140, 1);
      margin-top: 6px;
    }
  }
}
.header-wear {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 100;
  width: px2rem(184);
  height: px2rem(184);
  background-size: 100%;
  background-repeat: no-repeat;
  transform: translate(-50%, -50%);
}
.role {
  color: #a85e11;
  text-align: center;
  width: 34px;
  height: auto;
  border-radius: 2px;
  border: 2px solid;
  background: linear-gradient(133deg,rgba(255,208,100,1) 0%,rgba(255,229,172,1) 49%,rgba(255,175,39,1) 100%);
  border-image: linear-gradient(312deg, rgba(255,207,100,1), rgba(255,231,179,1), rgba(255,189,76,1)) 2 2;
}
</style>
