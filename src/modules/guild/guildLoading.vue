<template>
  <div class="page">
    <header-bar></header-bar>
    <div class="page-bd">
      <div class="loading"></div>
    </div>
  </div>
</template>
<script>
import HeaderBar from './components/HeaderBar';
import { applyStatus } from '@/api/guild';

export default {
  name: 'LoadingPage',
  components: {
    HeaderBar
  },
  data() {
    return {
      query: {
        uid: this.$state.info.uid,
        ticket: this.$state.info.ticket
      },
      redirect: this.$route.query.redirect // 跳转地址
    };
  },
  mounted() {
    this.queryUserStatus();
  },
  methods: {
    queryUserStatus() {
      applyStatus({ data: this.query }).then(res => {
        if (res.code === 200) {
          for (let i in res.data) {
            this.$state.guild[i] = res.data[i];
          }
          console.log(this.$state);
          let { redirect, ...args } = this.$route.query; // eslint-disable-line no-unused-vars
          this.$router.replace({
            path: `/${this.redirect}`,
            query: { ...args }
          })
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import './css/index.scss';
.loading {
  width: 40px;
  height: 40px;
  margin: 30px auto;
  border-radius: 35px;
  border: 1px solid #ff5c9d;
  border-top-color: transparent;
  border-left-color: transparent;
  background-color: transparent;
  animation: rotate 0.6s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
