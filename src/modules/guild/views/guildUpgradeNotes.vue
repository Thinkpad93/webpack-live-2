<template>
  <div class="page">
    <header-bar></header-bar>
    <div class="page-bd">
      <p>公会等级升级条件</p>
      <table>
        <thead>
          <tr>
            <th>公会等级</th>
            <th>公会徽章</th>
            <th>升级条件</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>实习</td>
            <td>
              <img src="https://img.cdsfl8888.com/FjHdmhSniUK7qeMuPGE2k9LPN-Vf?imageslim" alt="" class="pic">
            </td>
            <td>50W贡献值</td>
          </tr>
          <tr>
            <td>黄金</td>
            <td>
              <img src="https://img.cdsfl8888.com/FjHdmhSniUK7qeMuPGE2k9LPN-Vf?imageslim" alt="" class="pic">
            </td>
            <td>100W贡献值</td>
          </tr>
          <tr>
            <td>铂金</td>
            <td>
              <img src="https://img.cdsfl8888.com/FjHdmhSniUK7qeMuPGE2k9LPN-Vf?imageslim" alt="" class="pic">
            </td>
            <td>200W贡献值</td>
          </tr>
          <tr>
            <td>钻石</td>
            <td>
              <img src="https://img.cdsfl8888.com/FjHdmhSniUK7qeMuPGE2k9LPN-Vf?imageslim" alt="" class="pic">
            </td>
            <td>300W贡献值</td>
          </tr>
          <tr>
            <td>王者</td>
            <td>
              <img src="https://img.cdsfl8888.com/FjHdmhSniUK7qeMuPGE2k9LPN-Vf?imageslim" alt="" class="pic">
            </td>
            <td>400W贡献值</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import HeaderBar from './components/HeaderBar';

export default {
  name: 'GuildUpgradeNotes',
  components: {
    HeaderBar
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
table {
  width: 100%;
  text-align: center;
}
.pic {
  height: 40px;
  object-fit: cover;
}
</style>