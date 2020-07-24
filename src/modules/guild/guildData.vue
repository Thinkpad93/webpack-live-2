<template>
  <div class="page">
    <header-bar title="群资料"></header-bar>
    <div class="page-bd">
      <div class="mod card-mod">
        <div class="card flex">
          <div class="card-hd">
            <img :src="info.icon" alt="">
          </div>
          <div class="card-bd">
            <h3 class="name text-ellipsis">敌后便衣队九零娱乐</h3>
            <div class="desc"><time>2020年06月24日</time>加入本群，和群内小伙伴们一起战斗了1256个小时</div>
          </div>
        </div>
      </div>
      <div class="mod" style="margin: 8px 0;">
        <div class="guild flex">
          <h3 class="guild-admin">群成员（667）</h3>
          <div class="guild-info flex">
            <div class="user-list flex">
              <div class="item" v-for="(item, index) in 5" :key="index">
                <img src="https://img.erbanyy.com/default_head.png" alt="" class="avatar">
              </div>
            </div>
            <img src="./assets/arrow-right.png" alt="">
          </div>
        </div>
      </div>
      <div class="mod" @click="showActionSheet">
        <div class="guild flex">
          <div class="flex-1" style="font-size: 14px;">清除聊天记录</div>
          <div class="">
            <img src="./assets/arrow-right.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <van-action-sheet
      class="page-action-sheet"
      v-model="actionSheetVisible"
      :actions="actions"
      cancel-text="取消"
      @select="onSelect"
      @cancel="onCancel"
    />
  </div>
</template>
<script>
import Vue from 'vue';
import { ActionSheet } from 'vant';
import HeaderBar from './components/HeaderBar';
import { guildDetail } from '@/api/guild';
Vue.use(ActionSheet);

export default {
  name: 'GuildData',
  components: {
    HeaderBar
  },
  data() {
    return {
      actionSheetVisible: false,
      query: {
        guildId: this.$state.guild.guildId,
        uid: this.$state.info.uid
      },
      info: {},
      actions: [{ name: '清空聊天记录', color: '#ff0f3a' }]
    };
  },
  methods: {
    showActionSheet() {
      this.actionSheetVisible = true;
    },
    onSelect(item) {
      console.log(item);
    },
    onCancel() {
      console.log('onCancel');
    },
    getGuildDetail() {
      guildDetail({ data: this.query }).then(res => {
        if (res.code === 200) {
          this.info = res.data;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import './css/index.scss';
.mod {
  background-color: #fff;
  &-title {
    font-size: 16px;
    font-weight: bold;
  }
}
.card {
  align-items: center;
  height: px2rem(204);
  padding: 0 px2rem(30);
  &-hd {
    margin-right: px2rem(20);
    img {
      width: px2rem(140);
      height: px2rem(140);
      border-radius: px2rem(16);
    }
  }
  &-bd {
    flex: 1;
    font-size: 13px;
    color: #8c8c8c;
  }
  .name {
    color: #262626;
    font-size: 16px;
  }
  .desc {
    margin-top: 6px;
    line-height: 1.4;
  }
}
.guild {
  align-items: center;
  height: px2rem(100);
  padding: 0 px2rem(30);
  &-admin {
    font-size: 16px;
  }
  &-info {
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    .name {
      font-size: 13px;
      margin: 0 8px;
    }
    .avatar {
      width: px2rem(56);
      height: px2rem(56);
      border-radius: 50%;
    }
  }
}
.user-list {
  .item {
    margin: 0 3px;
  }
}
.page-action-sheet {
  padding: 0 px2rem(30) 10px px2rem(30);
  background-color: transparent;
  .van-popup--bottom.van-popup--round {
    position: relative;
  }
  .van-action-sheet__gap {
    background-color: transparent;
  }
  button {
    border-radius: 12px;
    &::after {
      border: none;
    }
  }
}
</style>
