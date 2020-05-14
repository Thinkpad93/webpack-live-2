// 获取地址栏参数
export function getQueryString() {
  const _url = location.search;
  let theRequest = new Object();
  if (_url.indexOf('?') != -1) {
    let str = _url.substr(1);
    let strs = str.split('&');
    for (let i in strs) {
      theRequest[strs[i].split('=')[0]] = decodeURI(strs[i].split('=')[1]);
    }
  }
  return theRequest;
}

//判断是测试环境还是正式环境
export function envChenk() {
  let href = window.location.href;
  let res = href.match(/beta|localhost|192.168./);
  return res ? 'beta' : 'official';
}

export function serializeData(obj) {
  let arr = [];
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
    }
  }
  return arr.join('&');
}

export function dateFormat(date, fmt) {
  date = new Date(date);
  var o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  };
  // 补全0
  function padLeftZero(str) {
    return ('00' + str).substr(str.length);
  }
  // 年份
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  }
  // 月日时分秒
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      var str = o[k] + '';
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  date = o = padLeftZero = null;
  return fmt;
}
