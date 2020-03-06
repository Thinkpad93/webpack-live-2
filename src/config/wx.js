export default {
  wxConfig(callback) {
    let url = window.location.href.split("#")[0]; //获取当前url,传递到服务端进行签名
    new Promise((resolve, reject) => {
      let data = {
        appid: "",
        nonceStr: ""
      };
      resolve(data);
    }).then(res => {
      if (res.appid && res.nonceStr) {
        wx.config({
          beta: true, // 注入wx.invoke方法来调用还未开放的jsapi方法
          debug: false, // 开启调试模式,开发时可以开启
          appId: res.appid, // 必填，公众号的唯一标识
          timestamp: res.timestamp, // 必填，生成签名的时间戳
          nonceStr: res.nonceStr, // 必填，生成签名的随机串
          signature: res.signature, // 必填，签名
          jsApiList: [
            "previewImage", //预览图片
            "chooseWXPay" //发起一个微信支付
          ]
        });
      }
    });
    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
    wx.ready(() => {
      if (callback) {
        callback();
      }
    });
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    wx.error(error => {
      console.log("wx.error错误");
      console.log(error);
    });
  },
  //自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
  updateAppMessageShareData(option = {}) {
    wx.updateAppMessageShareData({
      title: option.title, // 分享标题
      desc: option.desc, // 分享描述
      link: option.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: "http://h5.ztuo.cn/img/shareimg.jpg", // 分享图标
      success: () => {
        option.success();
      },
      cancel: () => {
        option.error();
      }
    });
  },
  updateTimelineShareData(option = {}) {
    wx.updateTimelineShareData({
      title: option.title, // 分享标题
      link: option.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: "http://h5.ztuo.cn/img/shareimg.jpg", // 分享图标
      success: () => {
        option.success();
      },
      cancel: () => {
        option.error();
      }
    });
  }
};
