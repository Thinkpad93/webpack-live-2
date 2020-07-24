<template>
  <div class="page">
    <header-bar title="公会信息"></header-bar>
    <div class="page-bd">
      <div class="mod card-mod">
        <div class="card flex">
          <div class="card-hd">
            <img :src="guildInfo.icon" alt="">
          </div>
          <div class="card-bd">
            <h3 class="name text-ellipsis">{{ guildInfo.name }}</h3>
            <div class="metadata flex">
              <div class="ids flex a-i-c">
                <img src="./assets/sociaty-id-grey.png" alt="">
                <span class="id" style="margin-left: 2px;">{{ guildInfo.guildBizId }}</span>
              </div>
              <div class="copy flex a-i-c">
                <img src="./assets/ic-copy.png" alt="">
                <span @click="clipboardToPhone">点击复制ID</span>
              </div>
            </div>
            <time>创建时间: {{ $utils.formatDate(guildInfo.createTime) }}</time>
          </div>
        </div>
      </div>
      <!-- 公会会长 -->
      <div class="mod" style="margin: 8px 0;">
        <div class="guild flex" @click="handlePersonPage">
          <h3 class="guild-admin">公会会长</h3>
          <div class="guild-info flex" v-if="guildInfo.levelInfo">
            <img :src="guildInfo.leaderInfo.avatar" alt="" class="avatar">
            <span class="name">{{ guildInfo.leaderInfo.nick }}</span>
            <svg t="1595494253878" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7444" width="16" height="16">
              <path d="M728.223744 520.22784a42.467328 42.467328 0 0 1-11.393024 20.503552L374.90688 882.65728c-16.662528 16.662528-43.677696 16.662528-60.340224 0s-16.662528-43.677696 0-60.340224L626.449408 510.43328 314.614784 198.598656c-16.662528-16.662528-16.662528-43.677696 0-60.340224 16.661504-16.662528 43.676672-16.662528 60.3392 0L716.879872 480.18432c10.860544 10.860544 14.642176 26.120192 11.343872 40.04352z" fill="#ccc" p-id="7445"></path>
            </svg>
          </div>
        </div>
      </div>
      <!-- 公会简介 -->
      <div class="mod">
        <div class="introduce">
          <h3 class="introduce-title">公会简介</h3>
          <p v-html="toHalf(guildInfo.introduction)"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderBar from './components/HeaderBar';
import { guildDetail } from '@/api/guild';

export default {
  name: 'GuildInfo',
  components: {
    HeaderBar
  },
  data() {
    return {
      query: {
        guildId: this.$route.query.guildId || this.$state.guild.guildId,
        uid: this.$state.info.uid
      },
      guildInfo: {}
    };
  },
  mounted() {
    this.getGuildDetail();
  },
  methods: {
    // 复制方法
    clipboardToPhone() {
      this.$toast('复制成功');
      this.$utils.appTools.clipboardToPhone(this.guildInfo.guildBizId.toString());
    },
    // 全角转换为半角函数
    toHalf(str) {
      if (str == undefined) {
        return;
      }
      var tmp = '';
      for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 65280 && str.charCodeAt(i) < 65375) {
          tmp += String.fromCharCode(str.charCodeAt(i) - 65248);
        } else if (str.charCodeAt(i) == 12288) {
          tmp += String.fromCharCode(32);
        } else {
          tmp += String.fromCharCode(str.charCodeAt(i));
        }
      }
      return tmp;
    },
    // 打开个人中心
    handlePersonPage() {
      return this.$utils.appTools.jumpAppointPage('PERSON_PAGE', this.guildInfo.leaderInfo.uid);
    },
    getGuildDetail() {
      guildDetail({ data: this.query }).then(res => {
        if (res.code === 200) {
          this.guildInfo = res.data;
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
  .metadata {
    margin: 6px 0;
    .ids {
      margin-right: 16px;
    }
  }
}
.guild {
  align-items: center;
  height: px2rem(100);
  padding: 0 px2rem(30);
  &-admin {
    font-size: 16px;
    flex: 1;
  }
  &-info {
    align-items: center;
    .name {
      font-size: 13px;
      margin: 0 8px;
    }
    .avatar {
      width: px2rem(52);
      height: px2rem(52);
      border-radius: 50%;
    }
  }
}
.introduce {
  padding: 0 px2rem(30) px2rem(30) px2rem(30);
  &-title {
    padding: 12px 0;
    font-size: 16px;
  }
  p {
    text-align: left;
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 10px;
  }
}
</style>
