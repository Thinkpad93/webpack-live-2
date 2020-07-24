<template>
  <div class="page">
    <header-bar></header-bar>
    <div class="page-bd">
      <div class="mod">
        <div class="card">
          <div class="card-hd" @click="jump">
            <img src="https://img.cdsfl8888.com/FjHdmhSniUK7qeMuPGE2k9LPN-Vf?imageslim" alt="">
          </div>
          <div class="card-bd">
            <div class="name">九零娱乐总群</div>
            <p class="desc">2020年06月24日加入本群，和群内小伙们一起战斗了8654个小时</p>
          </div>
        </div>
      </div>
      <div class="mod">
        <div class="member">
          <p>群成员（352）</p>
          <div class=""></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderBar from './components/HeaderBar';

export default {
  name: 'GuildLevel',
  components: {
    HeaderBar
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped></style>
