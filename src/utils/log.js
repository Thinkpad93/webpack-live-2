var info = {};
function getMessage(key, value) {
  info[key] = value;
}
(function(window, document) {
  var os = (function() {
    var u = navigator.userAgent;
    return {
      ios: /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(u), // ios终端
      android: /(?:Android)/.test(u) || /(?:Adr)/.test(u), // android终端
      app: /(?:mengshengApp)/.test(u),
    };
  })();
  function createHttpRequest() {
    if (window.ActiveXObject) {
      return new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) {
      return new XMLHttpRequest();
    }
  }
  function AliLogTracker(host, project, logstore) {
    this.uri_ =
      "http://" + project + "." + host + "/logstores/" + logstore + "/track";
    this.params_ = new Array();
    this.httpRequest_ = createHttpRequest();
    this.appData = {};
    this.appDataStr = "";
    this.isInitAppData = false;
    this.logQueue = [];
    this.isRequest = false;
  }
  AliLogTracker.prototype = {
    setAppData: function(data) {
      var strArr = [];
      this.appData = data;
      for (var key in data) {
        strArr.push(key + "=" + data[key]);
      }
      this.appDataStr = strArr.join("&");
      this.isInitAppData = true;
      if (this.logQueue.length > 0 && !this.isRequest) {
        this.post(this.logQueue);
      }
    },
    track: function(data) {
      if (!os.app && (!data || !(data instanceof Object))) {
        return;
      }
      if (!this.isInitAppData || this.isRequest) {
        this.logQueue.push(data);
        return;
      }
      var strArr = [];
      for (var key in data) {
        strArr.push(key + "=" + data[key]);
      }
      this.sendLog("GET", strArr.join("&"));
    },
    post: function(list) {
      if (!os.app && (!list || !(list instanceof Array))) {
        return;
      }
      if (!this.isInitAppData || this.isRequest) {
        this.logQueue = this.logQueue.concat(list);
        return;
      }
      for (var i = 0; i < list.length; i++) {
        let item = list[i];
        // 通用参数
        for (var key in this.appData) {
          item[key] = this.appData[key];
        }
      }
      this.sendLog("POST", JSON.stringify({ __logs__: list }));
    },
    sendLog: function(type, data) {
      var url = this.uri_;
      var _this = this;
      this.isRequest = true;
      this.logQueue = [];
      try {
        this.httpRequest_.onreadystatechange = function() {
          if (_this.httpRequest_.readyState == 4) {
            _this.isRequest = false;
            if (_this.logQueue.length > 0) {
              _this.post(_this.logQueue);
            }
          }
        };
        if (type === "GET") {
          url += "?APIVersion=0.6.0&" + this.appDataStr + "&" + data;
          this.httpRequest_.open("GET", url, true);
          this.httpRequest_.send(null);
        } else if (type === "POST") {
          this.httpRequest_.open("POST", url, true);
          this.httpRequest_.setRequestHeader("x-log-apiversion", "0.6.0");
          this.httpRequest_.setRequestHeader("x-log-bodyrawsize", "1234");
          // this.httpRequest_.setRequestHeader('x-log-compresstype', 'gzip');
          this.httpRequest_.send(data);
        }
      } catch (error) {
        if (
          window &&
          window.console &&
          typeof window.console.log === "function"
        ) {
          console.log(
            "Failed to log to ali log service because of this exception:\n" + ex
          );
          console.log("Failed log data:", url);
        }
      }
    },
  };
  window.Tracker = AliLogTracker;
})(window, document);
(function(window) {
  var os = (function() {
    var u = navigator.userAgent;
    return {
      ios: /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(u), // ios终端
      android: /(?:Android)/.test(u) || /(?:Adr)/.test(u), // android终端
      app: /(?:mengshengApp)/.test(u),
    };
  })();
  var cookieUtils = {
    get: function(key) {
      var reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
      var arr = document.cookie.match(reg);
      return arr ? unescape(arr[2]) : null;
    },
  };
  var isAutoPageView = window.logger !== false;
  var href = window.location.href;
  var isDev = /(?:localhost|192\.168\.|beta)/.test(href);
  var data = {};
  window.logger = new window.Tracker(
    "cn-shenzhen.log.aliyuncs.com",
    "bibi-frontend-log",
    isDev ? "dev-log" : "prod-log"
  );
  if (isAutoPageView) {
    window.logger.track({
      __topic__: "page-log",
      path: location.href,
    });
  }
  if (os.app) {
    if (os.ios) {
      data.uid = cookieUtils.get("uid");
      window.webkit.messageHandlers.getDeviceInfo.postMessage(null);
    } else if (os.android) {
      data.uid = String(window.androidJsObj.getUid());
      data.deviceInfo = window.androidJsObj.getDeviceInfo();
    }
    setTimeout(function() {
      os.ios && (data.deviceInfo = info.deviceInfo);
      typeof data.deviceInfo === "string" &&
        (data.deviceInfo = JSON.parse(data.deviceInfo));
      window.logger.setAppData({
        uid: data.uid,
        device_id: data.deviceInfo.deviceId,
        app_version: data.deviceInfo.appVersion,
        channel: data.deviceInfo.channel,
        os: data.deviceInfo.os,
        os_version: data.deviceInfo.osVersion,
        model: data.deviceInfo.model,
        app: data.deviceInfo.app,
        imei: data.deviceInfo.imei,
        net_type: String(data.deviceInfo.netType),
      });
    }, 100);
  }
})(window);
