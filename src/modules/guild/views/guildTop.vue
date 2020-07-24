<template>
  <div class="page">
    <header-bar></header-bar>
    <div class="page-bd">
      <van-list
        :offset="10"
        :immediate-check="false"
        v-model="loading"
        :finished="finished"
        @load="onLoad">
        <ul class="list">
          <li class="item flex hairline--bottom" @click="jump" v-for="(item, index) in list" :key="index">
            <div class="hd">
              <img :src="item.pic" alt="" class="pic">
            </div>
            <div class="bd">
              <h3 class="name">
                {{ item.name }}
                <small class="level">{{ item.level }}</small>
              </h3>
              <p>{{ item.memberTotal }}</p>
              <p class="desc text-ellipsis">{{ item.desc }}</p>
            </div>
            <div class="ft">
              <span>{{ item.values }}</span>
            </div>
          </li>
        </ul>
      </van-list>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { List } from 'vant';
Vue.use(List);
import HeaderBar from './components/HeaderBar';

export default {
  name: 'GuildTop',
  components: {
    HeaderBar
  },
  data() {
    return {
      loading: false,
      finished: false,   
      query: {
        pageNum: 1,
        pageSize: 10,
      },
      list: [] // 数据列表
    };
  },
  mounted() {
    console.log(this.$router);
    console.log(this.$state);
    this.getData();
  },
  methods: {
    // 查看公会名片
    jump() {
      this.$router.push({ path: 'guildCard', query: { data: new Date().getTime() }});
    },
    onLoad() {
      console.log('会触发load事件');
    },
    // 获取列表数据
    getData() {
      let list = [];
      for (let i = 0; i < 20; i++) {
        let obj = {
          name: `九零娱乐${i}`,
          level: `Lv${i}`,
          pic: 'https://img.cdsfl8888.com/FjHdmhSniUK7qeMuPGE2k9LPN-Vf?imageslim',
          memberTotal: 850,
          values: 556,
          desc: '招收游戏大神，歌手，主持'
        }
        list.push(obj);
      }
      this.list[0].items = list;
    }
  }
};
</script>
<style lang="scss" scoped>
.hairline--bottom::after {
  border-bottom-width: 1px !important;
}
.list {
  .item {
    font-size: 14px;
    min-height: 80px;
    align-items: center;
    margin: 0 px2rem(30);
    position: relative;
    &::after {
      position: absolute;
      content: ' ';
      top: -50%;
      right: -50%;
      bottom: -50%;
      left: -50%;
      pointer-events: none;
      border: 0 solid #ebedf0;
      transform: scale(0.5);
    }
    &:active {
      background-color: #f2f2f2;
    }
    .hd {
      padding-right: px2rem(20);
    }
    .bd {
      flex: 1;
      overflow: hidden;
    }
    .pic {
      width: px2rem(100);
      height: px2rem(100);
    }
    .desc {
      color: #aaa;
    }
  }
}
</style>