export default {
  filters: {
    formatTotal: function(val) {
      if (val > 10000) {
        var r = (val / 10000).toFixed(1);
        return r + 'w';
      } else {
        return val;
      }
    },
  },
};
