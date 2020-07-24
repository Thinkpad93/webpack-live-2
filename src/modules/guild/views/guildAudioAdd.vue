<template>
  <div class="page">
    <header-bar>
      <span @click="show = true" #right>发布</span>
    </header-bar>
    <div class="page-bd">
      <form class="form">
        <div class="form-item">
          <textarea class="textarea" rows="12" placeholder="请输入要发布的公告内容" v-model="form.content"></textarea>
        </div>
      </form>
      <div>
        <span>{{ enterNumber }}/{{ total }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderBar from './components/HeaderBar';

export default {
  name: 'GuildAudioAdd',
  components: {
    HeaderBar
  },
  data() {
    return {
      enterNumber: 0,
      total: 300,
      form: {
        content: ''
      }
    };
  },
  methods: {
    // 将换行替换成<br>标签
    textReplace(str) {
      if (str) {
        return str.replace(/\n|\r\n/g, '<br/>');
      }
    },
    brReplace(str) {
      if (str) {
        return str.replace(/<br\/>/g, '\n');
      }
    }
  }
};
</script>
<style lang="scss" scoped></style>