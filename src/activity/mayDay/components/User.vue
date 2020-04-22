<template>
  <ul class="user-list">
    <li
      class="user flex"
      :class="{
        no1: item.rankNo == 1,
        no2: item.rankNo == 2,
        no3: item.rankNo == 3,
      }"
      v-for="item in data"
    >
      <div class="user-hd">
        <template v-if="item.rankNo == 1">
          <img src="../images/ic-1st.png" alt="" width="16.5" height="21" />
        </template>
        <template v-else-if="item.rankNo == 2">
          <img src="../images/ic-2st.png" alt="" width="16.5" height="21" />
        </template>
        <template v-else-if="item.rankNo == 3">
          <img src="../images/ic-3st.png" alt="" width="16.5" height="21" />
        </template>
        <template v-else>
          {{ item.rankNo }}
        </template>
      </div>
      <div class="user-bd flex flex-1">
        <div class="figure flex">
          <img class="avatar" :src="item.avatar" alt="" />
        </div>
        <div class="user-info">
          <h5 class="text-ellipsis">{{ item.nick }}</h5>
          <span>{{ textStyleIf }}{{ item.value | formatTotal }}</span>
        </div>
      </div>
      <div
        class="user-ft flex"
        v-show="item.userInRoomVo.uid && item.uid != uid"
        @click="handleClick(item.userInRoomVo)"
      >
        <div class="go text-center">
          去找TA
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
import mixins from "@/mixins/page";
export default {
  mixins: [mixins],
  props: {
    data: {
      type: Array,
      default: function() {
        return [];
      },
    },
    uid: {
      type: Number,
    },
    textType: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    textStyleIf() {
      return this.textType == 1 ? "浪漫值" : "温馨值";
    },
  },
  methods: {
    handleClick(userInRoomVo) {
      this.$emit("on-click", userInRoomVo);
    },
  },
};
</script>
<style lang="scss">
@function px2rem($px, $rem: 75) {
  @return $px / $rem + rem;
}
.user-list {
  background-color: #fff;
  li:nth-child(even) {
    background-color: #f9f9f9;
  }
}
.user {
  align-items: center;
  position: relative;
  height: px2rem(120);
  padding: 0 15px 0 10px;
  &-hd {
    color: #f15a76;
    font-size: 16px;
    min-width: 30px;
  }
  &-bd {
    padding-left: 6px;
    align-items: center;
  }

  &-ft {
    align-items: center;
    justify-content: center;
    width: px2rem(145);
    height: px2rem(55);
    border-radius: px2rem(28);
    background: linear-gradient(
      0deg,
      rgba(255, 98, 125, 1),
      rgba(238, 88, 116, 1)
    );
    .go {
      color: #fff;
      width: px2rem(132);
      padding: 4px 0;
      border: px2rem(2) solid #fff;
      border-radius: px2rem(22);
      background: linear-gradient(
        0deg,
        rgba(255, 98, 125, 1),
        rgba(238, 88, 116, 1)
      );
    }
  }
  &-info {
    padding-left: 10px;
    h5 {
      max-width: 120px;
      font-size: 16px;
      margin-bottom: 5px;
    }
    span {
      color: #999;
    }
  }
}
</style>
