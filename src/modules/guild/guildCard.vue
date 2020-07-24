<template>
  <div class="page">
    <header-bar
      title="公会名片"
      class="enter"
      style="padding-top: 0;">
    </header-bar>
    <div class="page-bd">
      <!-- 公会名片 -->
      <card :info="guildInfo" @on-click="jump"></card>
      <div class="radius">
        <!-- 公会房间 -->
        <div class="mod-title" style="background-color: transparent;padding-bottom: 0;">
          <span class="left">公会房间({{ guildInfo.roomCount }})</span>
        </div>
        <room-list :list-data="list"></room-list>
      </div>
    </div>
    <!-- <template v-if="guildInfo.isLeader"> -->
    <div class="page-ft" v-if="position">
      <button
        type="button"
        class="btn btn-default addJoin"
        :class="{ 'btn-disabled': applyStatus == 1 }"
        large
        @click="applyAdd">
        {{ joinStatusFn }}
      </button>
    </div>
    <!-- </template> -->
  </div>
</template>
<script>
import Vue from 'vue';
import { Button, Dialog } from 'vant';
import HeaderBar from './components/HeaderBar';
import RoomList from './components/RoomList';
import Card from './components/Card';
import pageMixin from './mixin/page';
import { guildRoomList, guildDetail, guildApplyAdd } from '@/api/guild';
Vue.use(Button).use(Dialog);

export default {
  name: 'GuildCard',
  mixins: [pageMixin],
  components: {
    HeaderBar,
    RoomList,
    Card
  },
  data() {
    return {
      // headerBarStatus: 1,
      applyStatus: 0, // 0未申请加入公会 1申请中 2已同意
      guildInfo: {},
      query: {
        uid: this.$state.info.uid,
        ticket: this.$state.info.ticket,
        guildId: this.$route.query.guildId || this.$state.guild.guildId
      },
      roomQuery: {
        pageNum: 1,
        pageSize: 10
      },
      list: [] // 列表数据
    };
  },
  computed: {
    joinStatusFn() {
      switch(this.applyStatus) {
        case 0:
          return '申请加入公会';
        case 1:
          return '申请中';
        default:
          return '申请加入公会';
      }
    },
    // 会长position为0
    position() {
      return this.applyStatus != 2 && this.$state.guild.position != 0;
    }
  },
  mounted() {
    this.getGuildDetail();
    this.getData();
    this.handleScroll();
  },
  methods: {
    jump() {
      this.$router.push({ path: '/guildInfo', query: { guildId: this.$route.query.guildId }});
    },
    // 跳转个人房间
    handleRoomPage(uid) {
      return this.$utils.appTools.jumpAppointPage('ROOM_PAGE', uid);
    },
    // 成员申请入会
    applyAdd() {
      // 当前用户已经有申请加入公会(申请中)
      if (this.$state.guild.applyJoinStatus === 1 && this.guildInfo.id != this.$state.guild.guildId) {
        Dialog.confirm({
          title: '提示',
          message: '您已有在申请的公会，是否取消当前申请并申请加入该公会'
        }).then(() => {
          this.userAddJoin(this.query);
        }).catch(() => {
          console.log('catch');
        });
        return;
      }
      // 当前用户已经加入公会
      if (this.$state.guild.applyJoinStatus === 2) {
        Dialog({ confirmButtonText: '知道了', message: '您已有公会，需退出所在公会才能申请加入该公会' });
        return;
      }
      if (this.applyStatus == 0 || this.applyStatus == 3 || this.applyStatus == 4) {
        this.userAddJoin(this.query);
      }
    },
    // 用户加入
    userAddJoin(params = {}) {
      guildApplyAdd({ data: params, isReturnResponse: true }).then(res => {
        let result = res.data;
        if (result.code === 200) {
          this.applyStatus = 1;
          // 更新state的状态
          this.$state.guild.applyJoinStatus = 1;
          this.$state.guild.guildId = params.guildId;
          this.$toast('已发送入会申请，等待会长审核');
        } else if (result.code === 4002) {
          Dialog.confirm({
            title: '提示',
            message: '请先绑定手机号哦'
          }).then(() => {
            this.$utils.appTools.jumpAppointPage('PHONE_NUM_PAGE');
          });
        }
      });
    },
    // 公会信息
    getGuildDetail() {
      guildDetail({ data: this.query, isReturnResponse: true }).then(res => {
        let result = res.data;
        if (result.code === 200) {
          this.guildInfo = result.data;
          this.applyStatus = result.data.applyStatus; // 赋值入会状态
        }
      });
    },
    // 获取房间数据
    getData() {
      let params = Object.assign({}, this.query, this.roomQuery);
      guildRoomList({ data: params, loading: { show: true }}).then(res => {
        if (res.code === 200) {
          if (res.data.length) {
            this.list = this.list.concat(res.data);
          }
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import './css/index.scss';
.mod {
  position: relative;
  /* margin-bottom: 10px; */
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
.page-bd {
  margin-bottom: px2rem(140);
}
.page-ft {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 520;
  padding: 0 px2rem(30) px2rem(40) px2rem(30);
  background: linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);
  .addJoin {
    font-size: 16px;
    height: px2rem(92);
    border-radius: px2rem(50);
  }
}
.radius {
  position: relative;
  top: -10px;
  z-index: 250;
  border-radius: 10px 10px 0 0;
  background-color: #fafafa;
}
</style>