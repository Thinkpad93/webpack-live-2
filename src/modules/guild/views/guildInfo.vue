<template>
  <div class="page">
    <header-bar></header-bar>
    <div class="page-bd">
      <div class="mod">
        <div class="card">
          <div class="card-hd">
            <img src="https://img.cdsfl8888.com/FjHdmhSniUK7qeMuPGE2k9LPN-Vf?imageslim" alt="">
          </div>
          <div class="card-bd">
            <h3 class="name">九零娱乐</h3>
            <div class="metadata">
              <span class="id">ID:2222</span>
            </div>
            <time>创建时间：2020.04.17</time>
          </div>
        </div>
      </div>
      <!-- 公会会长 -->
      <div class="mod"></div>
      <!-- 公会简介 -->
      <div class="mod"></div>
    </div>
  </div>
</template>
<script>
import HeaderBar from './components/HeaderBar';

export default {
  name: 'GuildInfo',
  components: {
    HeaderBar
  },
  data() {
    return {};
  },
  methods: {
    // 打开个人中心
    handlePersonPage(uid) {
      return this.$utils.appTools.jumpAppointPage('PERSON_PAGE', uid);
    }
  }
};
</script>
<style lang="scss" scoped></style>
