#### native 客户端与 h5 前端交互方法

安卓: window.androidJsObj.xxx(params)，params 可选，调用安卓方法时如果需要传对象作为参数一定要转换为 JSON 字符串形式，所有方法的返回都为阻塞模式

iOS: window.webkit.messageHandlers.xxx.postMessage(params)，params 可选，注意如果调用方法时不需要传入参数时一定要传入 null，所有方法的返回都为非阻塞模式

| 方法名               | 参数                 | 说明                                                                                      |
| -------------------- | -------------------- | ----------------------------------------------------------------------------------------- |
| getUid               | /                    | 获取用户 uid                                                                              |
| getTicket            | /                    | 获取用户票据 ticket                                                                       |
| getDeviceInfo        | /                    | 获取用户设备信息                                                                          |
| getRoomUid           | /                    | 获取房主 uid                                                                              |
| startRecode          | /                    | 开始录音                                                                                  |
| stopRecode           | /                    | 结束录音，结束时会返回七牛云的录音链接                                                    |
| openChargePage       | /                    | 打开充值页                                                                                |
| openSharePage        | /                    | 打开分享框                                                                                |
| contactSomeOne       | uid: 用户 uid        | 打开与该用户的聊天框                                                                      |
| openFamilyPage       | id: 家族 id          | 打开对应家族的 id                                                                         |
| openPersonPage       | uid：用户 uid        | 打开用户的个人资料页                                                                      |
| openRoom             | uid：用户 uid        | 进入用户的房间                                                                            |
| openDecorateMallPage | 1.头饰 2 座驾 3 背景 | 打开 app 的商城页                                                                         |
| jumpAppointPage      | 请看附录 2           | 跳转至 app 页面，建议可用此方法来代替跳转各种 app 页面，routerType 与客户端的协议是一致的 |
| encryptPwd           | password：字符串     | 调用客户端方法加密字符串                                                                  |
| initNav              | 请看附录 1           | 设置右上角功能                                                                            |
| initShowNav          | true/false           | 显示/隐藏头部导航栏                                                                       |
| closeWebView         | /                    | 关闭 app 的 webview(浏览器)                                                               |
| initShowNav          | /                    | 显示/隐藏头部导航栏                                                                       |

#### 附录 1

// initNav 参数详解

// 跳转 h5

```javascript

{
  type: 1, // 跳转 h5
  data: {
    msg: 'wewawa', // 拓展信息
    title: '榜单说明', // 显示文案
    routerVal: linkUrl, // 跳转的 url
    routerType: 2, // 跳转 h5 的 type
    link: linkUrl // 跳转的 url
  }
}

// 分享 h5
{
  type: 2, // 分享 h5
  data: {
    msg: 'wewawa', // 拓展信息
    link: url, // 分享链接
    title: title, // 分享标题
    showUrl: url, // 分享链接
    imgUrl: 'https://img.erbanyy.com/new-logo.png', // 分享信息体中现实的图片
    desc: share.desc // 分享叙述
  }
}

// 跳转至 app 页面
{
  type: 3, // 跳转 app 页面
  data: {
    msg: 'wewawa', // 拓展信息
    title: '提现记录', // 显示文案
    routerType: routeTypeConstant.WITHDRAW_RECORD_PAGE, // 对应的 routerType
    routerVal: 0, // 对应的 routerVal
    targetUid: 0 // 拓展的 uid
  }
}

// 清除右上角信息
{
  type: 4, // data: {}
}

// 分享图片
{
  type: 5, // 分享图片
  data: {
    msg: 'wewawa', // 拓展信息
    imgUrl: \_url, // 分享的图片地址
    showUrl:\_url // 同上
  }
}

```

#### 附录 2

{routerType: 1, routerVal: 1}，routerType 请去项目中的 common 下的 router-constant 下查看，
routerVal 为可选属性，可填可不填，请结合 routerType 使用
