//深度链接配置
const KEY = "57c0fa5c5dd1abfde1420ce1d514fef7";

export function linkedmeInit (channel, tags) {
  return new Promise(function (resolove, reject) {
    let linkData = {
      promotion_name: "",
      type: "live", //"live"表示使用线上模式,"test"表示测试模式.【可选】
      channel: channel,
      tags: tags
    };
    //初始化LinkedME全局对象
    linkedme.init(KEY, { type: "live" }, null);
    //创建深度链接
    linkedme.link(
      linkData,
      function (err, response) {
        if (err) {
          reject(err);
          // 生成深度链接失败，返回错误对象err
          console.log("err:", err);
        } else {
          resolove(response); //返回生成的深度链接地址
        }
      },
      false
    );
  });
}
