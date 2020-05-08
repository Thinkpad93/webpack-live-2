import cookies from "./cookies";

export function checkVersion () {
  const u = navigator.userAgent;
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
}
//打开分享
export function openSharePage () {
  let browser = checkVersion();
  if (browser.app) {
    if (browser.ios) {
      window.webkit.messageHandlers.openSharePage.postMessage(null);
    }
    if (browser.android) {
      window.androidJsObj.openSharePage();
    }
  }
}
//页面生成分享
export function initNav (obj) {
  let browser = checkVersion();
  if (Object.keys(obj).length) {
    if (browser.app) {
      if (browser.ios) {
        window.webkit.messageHandlers.initNav.postMessage(obj);
      }
      if (browser.android) {
        //安卓系统需要必须要把对象转成字符串
        if (androidJsObj && typeof androidJsObj === "object") {
          window.androidJsObj.initNav(JSON.stringify(obj));
        }
      }
    }
  }
}
//根据uid跳转到用户个人中心
export function openPersonPage (uid) {
  let browser = checkVersion();
  if (browser.app) {
    if (browser.ios) {
      window.webkit.messageHandlers.openPersonPage.postMessage(uid);
    }
    if (browser.android) {
      if (androidJsObj && typeof androidJsObj === "object") {
        window.androidJsObj.openPersonPage(uid);
      }
    }
  }
}
//根据uid打开房间
export function openRoom (uid) {
  let browser = checkVersion();
  if (browser.app) {
    if (browser.ios) {
      window.webkit.messageHandlers.openRoom.postMessage(uid);
    }
    if (browser.android) {
      if (androidJsObj && typeof androidJsObj === "object") {
        window.androidJsObj.openRoom(uid);
      }
    }
  }
}

//根据routerType跳转到对应的页面
export function jumpAppointPage (obj) {
  let browser = checkVersion();
  if (browser.app) {
    if (browser.ios) {
      window.webkit.messageHandlers.jumpAppointPage.postMessage(obj);
    }
    if (browser.android) {
      if (androidJsObj && typeof androidJsObj === "object") {
        window.androidJsObj.jumpAppointPage(JSON.stringify(obj));
      }
    }
  }
}
//获取Uid
export function getUid () {
  let browser = checkVersion();
  let uid = null;
  if (browser.app) {
    if (browser.ios) {
      uid = cookies.get("uid");
    }
    if (browser.android) {
      if (androidJsObj && typeof androidJsObj === "object") {
        uid = parseInt(window.androidJsObj.getUid());
      }
    }
    return uid;
  }
}
//获取Ticket
export function getTicket () {
  let browser = checkVersion();
  let ticket = null;
  if (browser.app) {
    if (browser.ios) {
      window.webkit.messageHandlers.getTicket.postMessage(null);
    }
    if (browser.android) {
      if (androidJsObj && typeof androidJsObj === "object") {
        ticket = window.androidJsObj.getTicket();
      }
    }
    return ticket;
  }
}
