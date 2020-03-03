var _cookie = {
  set: function(key, val, time) {
    var date = new Date();
    var expiresDays = time;
    date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000);
    document.cookie = key + "=" + val + ";expires=" + date.toGMTString();
  },
  get: function(key) {
    // 获取cookie参数
    var getCookie = document.cookie.replace(/[ ]/g, "");
    var arrCookie = getCookie.split(";");
    var val;
    for (var i = 0; i < arrCookie.length; i++) {
      var arr = arrCookie[i].split("=");
      if (key === arr[0]) {
        val = arr[1];
        break;
      }
    }
    return val;
  },
  delete: function(key) {
    //删除cookie方法
    var date = new Date(); //获取当前时间
    date.setTime(date.getTime() - 10000); //将date设置为过去的时间
    document.cookie = key + "=v; expires =" + date.toGMTString(); //设置cookie
  }
};
