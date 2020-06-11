<template>
  <div class="page">
    <div class="page-hd">
      <a :href="skipUrl">
        <img :src="bannerUrl" alt="" />
      </a>
    </div>
    <div class="page-bd">
      <ul class="list" style="margin: 0 -4px">
        <li
          :class="{ active: current === index }"
          class="item"
          v-for="(item, index) in list"
          :key="index"
          @click="toggleClick($event, index)"
        >
          <div class="item-box">
            <img
              src="./images/room-ic-money.png"
              alt=""
              width="40"
              height="40"
            />
            <p class="prodName">
              <b>{{ item.prodName }}</b>
            </p>
            <p class="money">¥{{ item.money }}</p>
          </div>
        </li>
      </ul>
      <p class="text-center">微信关注bibi约玩公众号，享更多优惠</p>
    </div>
  </div>
</template>
<script>
import { chargeprodList } from '@/api';
import { toggleClass } from '@/utils/dom';
import list from '@/mixins/list';
export default {
  name: 'WxPubPay',
  mixins: [list],
  data() {
    return {
      current: -1,
      query: {
        channelType: 1,
        uid: 0,
        channel: 1,
      },
      bannerUrl: '',
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    toggleClick(e, index) {
      if (this.current == index) {
        this.current = -1;
      } else {
        this.current = index;
      }
    },
    init() {
      chargeprodList(this.query).then((res) => {
        if (res.code === 200) {
          let result = res.data;
          if (result.chargeProdVos.length) {
            this.skipUrl = result.skipUrl;
            this.bannerUrl = result.bannerUrl;
            this.list = result.chargeProdVos;
          }
        }
      });
    },
  },
};
</script>
<style lang="scss">
@function px2rem($px, $rem: 75) {
  @return $px / $rem + rem;
}
.page {
  &-hd {
    padding: px2rem(30);
    a {
      display: block;
    }
    img {
      border-radius: 10px;
    }
  }
  &-bd {
    padding: 0 px2rem(30);
  }
}
.list {
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 33.3333%;
    padding: 0 4px;
    margin-bottom: 10px;

    &.active {
      .item-box {
        color: #fff;
        background-color: #ff5c9d;
      }
    }
  }
  .item-box {
    font-size: 14px;
    text-align: center;
    min-height: 120px;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
    transition: all 0.3s;
    .prodName {
      font-size: 16px;
    }
  }
}
</style>
