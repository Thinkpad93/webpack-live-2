<template>
  <div class="page">
    <header-bar
      title="我的公会"
      class="enter"
      style="padding-top: 0;">
      <template #right>
        <template>
          <div @click="showActionSheet">
            <svg t="1595475989566" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1144" width="18" height="18">
              <path d="M512 305.7c-57.3 0-103.8-46.5-103.8-103.8S454.7 98.2 512 98.2 615.8 144.7 615.8 202 569.3 305.7 512 305.7z m0 311.3c-57.3 0-103.8-46.5-103.8-103.8S454.7 409.5 512 409.5 615.8 456 615.8 513.3 569.3 617 512 617z m0 311.3c-57.3 0-103.8-46.5-103.8-103.8S454.7 720.8 512 720.8s103.8 46.5 103.8 103.8S569.3 928.3 512 928.3z" p-id="1145" fill="#000"></path>
            </svg>
          </div>
        </template>
      </template>
    </header-bar>
    <div class="page-bd">
      <!-- 退出公会 -->
      <van-action-sheet
        class="page-action-sheet"
        v-model="confirmActionSheetVisible"
        :actions="confirmActions"
        cancel-text="取消"
        @select="onSelectConfirmAction"
      />
      <!-- 取消退会 -->
      <van-action-sheet
        class="page-action-sheet"
        v-model="cancelActionSheetVisible"
        :actions="cancelActions"
        cancel-text="取消"
        @select="onSelectCancelAction"
      />
      <!-- 公会名片 -->
      <card :info="guildInfo" @on-click="jump('/guildInfo')">
        <template #handle="{ row }">
          <router-link to="/guildAdmin" v-if="row.isLeader" tag="div" class="handle-admin">管理</router-link>
        </template>
      </card>
      <div class="radius">
        <!-- 公会等级 -->
        <level></level>
        <!-- 公告 -->
        <div class="mod">
          <div class="audio flex a-i-c" @click="jump('/guildAudioList')">
            <div class="audio-hd">
              <h3>公告</h3>
            </div>
            <div class="audio-bd flex-1">
              <div class="announce-list" v-if="announceList.length">
                <div class="announce-item text-ellipsis" v-for="item in announceList" :key="item.id">
                  {{ item.announce }}
                </div>
              </div>
              <p v-else style="color: #8c8c8c;">暂无公告</p>
            </div>
            <div class="audio-ft">
              <svg t="1595494253878" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7444" width="16" height="16">
                <path d="M728.223744 520.22784a42.467328 42.467328 0 0 1-11.393024 20.503552L374.90688 882.65728c-16.662528 16.662528-43.677696 16.662528-60.340224 0s-16.662528-43.677696 0-60.340224L626.449408 510.43328 314.614784 198.598656c-16.662528-16.662528-16.662528-43.677696 0-60.340224 16.661504-16.662528 43.676672-16.662528 60.3392 0L716.879872 480.18432c10.860544 10.860544 14.642176 26.120192 11.343872 40.04352z" fill="#ccc" p-id="7445"></path>
              </svg>
            </div>
          </div>
        </div>
        <!-- 今日贡献 -->
        <integral :list-data="todayContributionList" :today-amount="todayContributeAmount"></integral>
        <!-- 公会房间 -->
        <template v-if="guildInfo">
          <div class="mod-title flex" style="padding-bottom: 0;">
            <span class="left">公会房间({{ guildInfo.roomCount }})</span>
            <router-link to="/guildRoomList" class="right">查看更多></router-link>
          </div>
          <room-list :list-data="roomList"></room-list>
        </template>
        <!-- 公会成员 -->
        <template v-if="guildInfo">
          <div class="mod-title flex">
            <span class="left">公会成员({{ guildInfo.memberCount }})</span>
            <router-link to="/guildMemberList" class="right">查看更多></router-link>
          </div>
          <user-list :list-data="memberList">
            <template #default="{ row }">
              <div class="ids">贡献值: {{ $utils.dealScore(row.amount) }}</div>
            </template>
            <template #handle="{ row }">
              <template v-if="row.position === 0">
                <div class="role">会长</div>
              </template>
            </template>
          </user-list>
        </template>
        <!-- 公会群组 -->
        <div class="mod" v-if="guildGroupChatList.length">
          <div class="mod-title flex">
            <span class="left">公会群组</span>
          </div>
          <div class="guild-group">
            <div
              class="group-item flex"
              v-for="item in guildGroupChatList"
              :key="item.guildId"
              @click="jumpGroup(item)">
              <div class="hd">
                <img :src="item.icon" alt="">
              </div>
              <div class="bd">
                <p>{{ item.name }}</p>
                <div class="metadata flex">
                  <span>公会总群</span>
                  |
                  <span>{{ item.groupChatMemberCount }}人</span>
                </div>
              </div>
              <div class="ft">
                <img src="./assets/arrow-right.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <van-divider>我也是有底线的</van-divider>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { Dialog, ActionSheet, Divider } from 'vant';
import { guildApplyQuit, guildApplyCancelQuit, guildMine, guildAnnounceList } from '@/api/guild';
Vue.use(Dialog).use(ActionSheet).use(Divider);
import HeaderBar from './components/HeaderBar';
import UserList from './components/UserList';
import RoomList from './components/RoomList';
import Card from './components/Card';
import Level from './components/Level';
import Integral from './components/Integral';
import pageMixin from './mixin/page';

export default {
  name: 'GuildMe',
  mixins: [pageMixin],
  components: {
    HeaderBar,
    UserList,
    RoomList,
    Card,
    Level,
    Integral
  },
  data() {
    return {
      confirmActionSheetVisible: false,
      cancelActionSheetVisible: false,
      guildInfo: {},
      todayContributeAmount: 0,
      query: {
        guildId: this.$state.guild.guildId, // 公会主键ID
        uid: this.$state.info.uid,
        pageNum: 1,
        pageSize: 10
      },
      confirmActions: [{ name: '退出公会', color: '#ff0f3a' }],
      cancelActions: [{ name: '取消退会' }],
      announceList: [], // 公告列表
      roomList: [], // 房间
      memberList: [], // 会员
      guildGroupChatList: [], // 群组
      todayContributionList: [] //  今日贡献贡献列表
    };
  },
  mounted() {
    this.getGuildDetail();
    this.getAudioList();
    this.handleScroll();
  },
  methods: {
    // 点击右上角
    showActionSheet() {
      // 会员功能
      if (!this.guildInfo.isLeader) {
        // 申请退会状态 0-未申请 1-申请中
        if (this.guildInfo.activeOutStatus == 0) {
          this.confirmActionSheetVisible = true;
        } else {
          this.cancelActionSheetVisible = true;
        }
      }
    },
    // 申请退会
    onSelectConfirmAction(item) {
      let name = this.guildInfo.name;
      Dialog.confirm({
        title: '提示',
        message: `是否申请退出${name}，24小时后会长无反馈则自动退出公会`
      }).then(() => {
        let params = {
          guildId: this.$state.guild.guildId,
          uid: this.$state.info.uid,
          ticket: this.$state.info.ticket
        }
        guildApplyQuit({ data: params }).then(res => {
          if (res.code === 200) {
            this.guildInfo.activeOutStatus = 1; // 申请中
            this.confirmActionSheetVisible = false;
            this.$toast('退会申请成功，等待会长同意');
          }
        });
      });
    },
    // 取消退会
    onSelectCancelAction(item) {
      Dialog.confirm({
        title: '提示',
        message: `23小时59分后自动退出公会是否取消退出公会申请`
      }).then(() => {
        let params = {
          guildId: this.$state.guild.guildId,
          uid: this.$state.info.uid,
          ticket: this.$state.info.ticket
        }
        guildApplyCancelQuit({ data: params }).then(res => {
          if (res.code === 200) {
            this.guildInfo.activeOutStatus = 0; // 还原未申请状态
            this.cancelActionSheetVisible = false;
            this.$toast('取消退会成功');
          }
        });
      });
    },
    jump(routeName = '') {
      this.$router.push({ path: routeName, query: { data: new Date().getTime() }});
    },
    // 跳转公会群组
    jumpGroup(params = {}) {
      this.$utils.appTools.jumpAppointPage('GROUP_PAGE', params.tid);
    },
    // 获取公会信息
    getGuildDetail() {
      let params = {
        uid: this.$state.info.uid,
        ticket: this.$state.info.ticket
      }
      // eslint-disable-line no-unused-vars
      guildMine({ data: params, isReturnResponse: true }).then(res => {
        let result = res.data;
        if (result.code === 200) {
          this.guildInfo = result.data.guildInfo; // 公会信息
          this.roomList = result.data.roomList; // 公会房间
          this.guildGroupChatList = result.data.guildGroupChatList;
          this.todayContributeAmount = result.data.todayContributeAmount;
          this.todayContributionList = result.data.todayContributionList; // 群组
          // 处理成员列表
          let leaderList = [];
          let rankingsList = [];
          let leader = result.data.memberList.leader; // 会长信息
          let rankings = result.data.memberList.rankings; // 公会成员
          if (rankings.length) {
            rankings.forEach(item => {
              if (item.position != leader.position) {
                rankingsList.push(item);
              } else {
                leaderList.push(item);
              }
            });
            let result = leaderList.concat(rankingsList);
            this.memberList = result;
          }
        } else if (result.code === 500) {
          Dialog.alert({
            title: '提示',
            message: `${result.message}，快去申请加入吧`
          }).then(() => {
            this.$router.push({ path: '/guildTop' });
          });
        }
      });
    },
    // 获取公告
    getAudioList() {
      guildAnnounceList({ data: this.query }).then(res => {
        if (res.code === 200) {
          if (res.data.length) {
            this.announceList = res.data.slice(0, 1);
          }
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import './css/index.scss';
$h50: px2rem(100);
.page {
  font-size: 12px !important;
}
.mod {
  position: relative;
  margin-bottom: 10px;
  background-color: #fff;
  &-title {
    font-size: 15px;
    padding: 12px px2rem(30);
    justify-content: space-between;
    background-color: #fff;
    .left {
      font-weight: 600;
    }
    .right {
      font-size: 14px;
      color: #ff5c9d;
    }
  }
}
.audio {
  height: $h50;
  padding: 0 px2rem(30);
  &-hd {
    padding-right: px2rem(32);
  }
  &-bd {
    font-size: 14px;
    overflow: hidden;
  }
}
.radius {
  position: relative;
  top: -10px;
  z-index: 250;
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
.guild-group {
  position: relative;
  .group-item {
    align-items: center;
    padding: 12px px2rem(30) 12px px2rem(30);
  }
  .hd {
    margin-right: px2rem(24);
    img {
      width: px2rem(120);
      height: px2rem(120);
      border-radius: 8px;
    }
  }
  .bd {
    flex: 1;
    p {
      font-size: 16px;
    }
    .metadata {
      font-size: 13px;
      color: #8c8c8c;
      margin-top: 6px;
      span {
        display: inline-block;
        margin: 0 4px;
      }
    }
  }
}
</style>