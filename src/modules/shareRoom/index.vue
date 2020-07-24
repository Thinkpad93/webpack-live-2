<template>
  <div class="page">
    <div class="page-bd">
      <div class="bgMask">
        <div class="user">
          <div class="avatar">
            <img :src="info.avatar" alt="" width="90" height="90" />
          </div>
          <div class="name text-ellipsis">{{ info.title }}</div>
          <div class="erbanNo text-ellipsis">
            房间ID:<span>{{ info.erbanNo }}</span>
          </div>
        </div>
      </div>
      <div class="ad" style="text-align: center;">
        <img src="./images/ad.png" alt="" width="287" height="106" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShareRoom',
  data() {
    return {
      info: {},
      query: {
        roomUid: '',
        uid: '',
      },
    };
  },
};
</script>
