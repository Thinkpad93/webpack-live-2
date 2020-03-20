// 获取地址栏参数
export function getQueryString() {
  const _url = location.search;
  let theRequest = new Object();
  if (_url.indexOf("?") != -1) {
    let str = _url.substr(1);
    let strs = str.split("&");
    for (let i in strs) {
      theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}
//判断是测试环境还是正式环境
export function envChenk() {
  let href = window.location.href;
  let res = href.match(/beta|localhost|192.168./);
  return res ? "beta" : "official";
}

export function serializeData(obj) {
  let arr = [];
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      arr.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
    }
  }
  return arr.join("&");
}
