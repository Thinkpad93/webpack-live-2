var vm = new Vue({
  el: "#page",
  data: {
    search: location.search,
    androidUrl: "", //安卓
    linkedmeUrl: "", //linkedme链接地址
    ios: true,
    isWeixin: false
  },
  created: function() {},
  mounted: function() {
    this.init();
  },
  methods: {
    init: function() {
      var browser = this.checkVersion();
      var ctArr = this.search.replace("?ct=", "");
      this.ios = browser.ios ? true : false; //如果是ios客户端则用linkedme，否则android直接下载
      //如果在微信浏览器则提示不给下载
      if (browser.weixin) {
        this.isWeixin = true;
        document.body.setAttribute("class", "van-overflow-hidden");
      } else {
        this.isWeixin = false;
      }
      this.linkedmeDown();
      this.appDown(ctArr);
    },
    //判断浏览器内核，手机类型
    checkVersion: function() {
      var u = navigator.userAgent,
        app = navigator.appVersion;
      return {
        trident: u.indexOf("Trident") > -1, //IE内核
        presto: u.indexOf("Presto") > -1, //opera内核
        webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
        gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf("Android") > -1 || u.indexOf("Adr") > -1, //android终端
        iPhone: u.indexOf("iPhone") > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf("iPad") > -1, //是否iPad
        webApp: u.indexOf("Safari") == -1, //是否web应该程序，没有头部与底部
        weixin: u.indexOf("MicroMessenger") > -1, //是否微信
        qq: u.match(/\sQQ/i) == " qq", //是否QQ
        app: u.match("mengshengApp") == "mengshengApp" //是否在app内
      };
    },
    linkedmeDown: function() {
      var _that = this;
      var linkData = {
        type: "live",
        channel: "home",
        tags: "home",
        ios_direct_open: "false",
        android_direct_open: "false",
        params: JSON.stringify({ href: location.href })
      };
      linkedme.init("57c0fa5c5dd1abfde1420ce1d514fef7", { type: "live" }, null);
      //创建深度链接
      linkedme.link(
        linkData,
        function(err, response) {
          if (err) {
            // 生成深度链接失败，返回错误对象err
            console.log("err:", err);
          } else {
            //开始生成
            _that.linkedmeUrl = response.url;
            console.log(response);
          }
        },
        false
      );
    },
    //app下载
    appDown: function(ctArr) {
      var origin = location.origin;
      //android
      var str = ctArr ? ctArr : "official";
      var androidDownloadLink =
        origin + "/app-release_aligned_signed-" + str + ".apk";
      this.androidUrl = androidDownloadLink;
      console.log("安卓下载");
    }
  }
});
