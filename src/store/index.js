import Vue from 'vue';

const state = Vue.observable({
  info: {
    uid: '',
    ticket: '',
    deviceInfo: '',
  },
  guild: {},
});

export default state;
