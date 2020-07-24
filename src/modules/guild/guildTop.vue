<template>
  <div class="page">
    <header-bar title="公会榜单"></header-bar>
    <div class="page-bd">
      <!-- 搜索 -->
      <div class="mod">
        <div class="search">
          <form action="">
            <div class="form-item">
              <input type="input" class="input" placeholder="搜索公会名称/ID" maxlength="15" @input="searchRank($event)">
            </div>
          </form>
        </div>
      </div>
      <van-list
        :offset="10"
        :immediate-check="false"
        v-model="loading"
        :finished="finished"
        @load="onLoad">
        <div class="mod">
          <ul class="list" v-if="list.length">
            <li class="item flex" @click="jump(item)" v-for="item in list" :key="item.id">
              <div class="hd">
                <template v-if="item.ranking == 1">
                  <img src="./assets/sociaty-1.png" alt="" />
                </template>
                <template v-else-if="item.ranking == 2">
                  <img src="./assets/sociaty-2.png" alt="" />
                </template>
                <template v-else-if="item.ranking == 3">
                  <img src="./assets/sociaty-3.png" alt="" />
                </template>
                <template v-else>
                  <b class="din-bold">{{ item.ranking }}</b>
                </template>
              </div>
              <div class="bd flex">
                <div class="avatar">
                  <img :src="item.icon" alt="" class="pic">
                </div>
                <div class="guild-info">
                  <h3 class="name h3 flex">
                    <span class="text-ellipsis">{{ item.name }}</span>
                    <img :src="item.levelInfo.url" alt="" class="level">
                  </h3>
                  <div class="people flex">
                    <img src="./assets/sociaty-people.png" alt="">
                    <span class="din-bold">{{ item.memberCount }}</span>
                  </div>
                  <p class="desc text-ellipsis">{{ item.declaration }}</p>
                </div>
              </div>
              <div class="ft">
                <span class="din-bold">贡献值：{{ $utils.dealScore(item.amount) }}</span>
              </div>
            </li>
          </ul>
          <template v-else>
            <base-empty title="暂无公会榜"></base-empty>
          </template>
        </div>
      </van-list>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { List } from 'vant';
Vue.use(List);
import HeaderBar from './components/HeaderBar';
import BaseEmpty from './components/Empty';
import { guildRankTotal } from '@/api/guild';

export default {
  name: 'GuildTop',
  components: {
    HeaderBar,
    BaseEmpty
  },
  data() {
    return {
      loading: false,
      finished: false,
      timeout: null,
      query: {
        text: '',
        pageNum: 1,
        pageSize: 10
      },
      list: [] // 数据列表
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    searchRank(event) {
      if(this.timeout !== null) {
        clearTimeout(this.timeout);
      }
      this.query.text = event.target.value;
      this.query.pageNum = 1;
      this.timeout = setTimeout(() => {
        // this.getData();
        guildRankTotal({ data: this.query }).then(res => {
          if (res.code === 200) {
            this.loading = false;
            if (res.data.length) {
              this.list = res.data;
            } else {
              this.finished = true;
            }
          }
        });
      }, 500);
    },
    // 查看公会名片
    jump(params = {}) {
      // 跳转到我的公会
      if (params.id === this.$state.guild.guildId) {
        this.$router.push({ path: '/guildMe' });
      } else {
        this.$router.push({ path: '/guildCard', query: { guildId: params.id }});
      }
    },
    onLoad() {
      this.query.pageNum++;
      this.getData();
    },
    // 获取列表数据
    getData() {
      guildRankTotal({ data: this.query }).then(res => {
        if (res.code === 200) {
          this.loading = false;
          if (res.data.length) {
            this.list = this.list.concat(res.data);
          } else {
            this.finished = true;
          }
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import './css/index.scss';
.hairline--bottom::after {
  border-bottom-width: 1px !important;
}
.search {
  padding: px2rem(8) px2rem(24);
  background-color: #fff;
  input {
    padding-left: px2rem(72);
    border-radius: px2rem(36);
    background-color: #f5f5f5;
    background-image: url('./assets/ic-search.png');
    background-repeat: no-repeat;
    background-position: 8px center;
  }
}
.list {
  background-color: #fff;
  .item {
    font-size: 12px;
    height: px2rem(160);
    align-items: center;
    margin: 0 px2rem(30) 0 8px;
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
      width: 30px;
      font-size: 16px;
      text-align: center;
    }
    .bd {
      flex: 1;
      overflow: hidden;
    }
    .ft {
      position: absolute;
      right: 0;
      top: 50%;
      z-index: 10;
      transform: translateY(-50%);
    }
    .name {
      font-size: 16px;
      align-items: center;

      span {
        display: inline-block;
        margin-right: 4px;
        max-width: px2rem(240);
      }
    }
    .level {
      height: 28px;
      object-fit: cover;
    }
    .guild-info {
      flex: 1;
      overflow: hidden;
    }
    .avatar {
      padding-left: px2rem(10);
      padding-right: px2rem(20);
    }
    .people {
      color: #8c8c8c;
      margin-bottom: 4px;
      align-items: center;
    }
    .pic {
      width: px2rem(112);
      height: px2rem(112);
      border-radius: px2rem(16);
    }
    .desc {
      color: #8c8c8c;
    }
  }
}
</style>