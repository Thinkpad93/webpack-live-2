(function (window, document) {
  var isApp = /(?:mengshengApp)/.test(navigator.userAgent);
  function createHttpRequest() {
    if (window.ActiveXObject) {
      return new ActiveXObject('Microsoft.XMLHTTP');
    } else if (window.XMLHttpRequest) {
      return new XMLHttpRequest();
    }
  }
  function AliLogTracker(host, project, logstore) {
    this.uri_ = 'http://' + project + '.' + host + '/logstores/' + logstore + '/track';
    this.params_ = new Array();
    this.httpRequest_ = createHttpRequest();
  }
  AliLogTracker.prototype = {
    push: function (key, value) {
      if (!key || !value) {
        return;
      }
      this.params_.push(key);
      this.params_.push(value);
    },
    logger: function () {
      if (!isApp) {
        return;
      }
      var url = this.uri_ + '?APIVersion=0.6.0';
      var k = 0;
      this.params_.indexOf('path') === -1 && this.push('path', location.href);
      while (this.params_.length > 0) {
        if (k % 2 == 0) {
          url += '&' + encodeURIComponent(this.params_.shift());
        } else {
          url += '=' + encodeURIComponent(this.params_.shift());
        }
        ++k;
      }
      try {
        this.httpRequest_.open('GET', url, true);
        this.httpRequest_.send(null);
      } catch (ex) {
        if (
          window &&
          window.console &&
          typeof window.console.log === 'function'
        ) {
          console.log(
            'Failed to log to ali log service because of this exception:\n' + ex
          );
          console.log('Failed log data:', url);
        }
      }
    },
    post: function(list) {
      if (!isApp) {
        return;
      }
      if (!list || !(list instanceof Array)) {
        return;
      }
      var href = location.href;
      for (var i = 0; i < list.length; i++) {
        let item = list[i];
        !item.path && (item.path = href);
      }
      var url = this.uri_;
      try {
        this.httpRequest_.open('POST', url, true);
        this.httpRequest_.setRequestHeader('x-log-apiversion', '0.6.0');
        this.httpRequest_.setRequestHeader('x-log-bodyrawsize', '1234');
        // this.httpRequest_.setRequestHeader('x-log-compresstype', 'gzip');
        this.httpRequest_.send(JSON.stringify({ '__logs__': list }));
      } catch (error) {
        if (
          window &&
          window.console &&
          typeof window.console.log === 'function'
        ) {
          console.log(
            'Failed to log to ali log service because of this exception:\n' + ex
          );
          console.log('Failed log data:', url);
        }
      }
    },
    track: function(data) {
      if (!isApp) {
        return;
      }
      if (!data || !(data instanceof Object)) {
        return;
      }
      for (var key in data) {
        this.push(key, data[key]);
      }
      this.logger();
    }
  };
  window.Tracker = AliLogTracker;
})(window, document);
(function(window) {
  var isAutoPageView = window.logger !== false;
  var href = window.location.href;
  var isDev = /(?:localhost|192\.168\.|beta)/.test(href);
  window.logger = new window.Tracker('cn-shenzhen.log.aliyuncs.com', 'bibi-frontend-log', isDev ? 'dev-log' : 'prod-log');
  isAutoPageView && window.logger.logger();
})(window);