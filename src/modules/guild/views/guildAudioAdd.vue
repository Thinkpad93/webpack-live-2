<template>
  <div class="page">
    <header-bar title="发布公告">
      <template #right>
        <span style="color: #ff5c9d;" @click="save">发布</span>
      </template>
    </header-bar>
    <div class="page-bd">
      <form class="form">
        <div class="form-item">
          <textarea class="textarea" rows="12" placeholder="请输入公告内容" v-model.trim="form.announce" maxlength="300"></textarea>
        </div>
        <div class="word-limit"><span class="word-num">{{ form.announce.length }}</span>/300</div>
      </form>
    </div>
  </div>
</template>
<script>
import HeaderBar from './components/HeaderBar';
import { guildAnnounceAdd } from '@/api/guild';

export default {
  name: 'GuildAudioAdd',
  components: {
    HeaderBar
  },
  data() {
    return {
      form: {
        guildId: this.$state.guild.guildId,
        uid: this.$state.info.uid,
        ticket: this.$state.info.ticket,
        announce: ''
      }
    };
  },
  methods: {
    // 发布操作
    save() {
      if (this.form.announce == '') {
        this.$toast('请填写信息');
      } else {
        this.announceAdd();
      }
    },
    // 将换行替换成<br>标签
    textReplace(str) {
      if (str) {
        return str.replace(/\n|\r\n/g, '<br/>');
      }
    },
    // 发布公告
    announceAdd() {
      this.form.announce = this.textReplace(this.form.announce);
      guildAnnounceAdd({ data: this.form, isReturnResponse: true, loading: { show: true }}).then(res => {
        let result = res.data;
        if (result.code === 200) {
          this.$toast('公告发布成功');
          // 返回上一级
          this.$router.back();
        } else if (result.code === 500) {
          this.$toast('公告限制最多20条，请删除后再发布');
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import './css/index.scss';
.form {
  &-item {
    background-color: #fff;
  }
  .field-body {
    padding: 0 px2rem(30);
  }
  .input {
    height: px2rem(100);
    border: none;
  }
}
.word-limit {
  color: #8c8c8c;
  text-align: right;
  padding: px2rem(30);
}
.textarea {
  border: none;
}
</style>