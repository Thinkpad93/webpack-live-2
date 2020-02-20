// 获取地址栏参数
export function getQueryString() {
  const _url = location.search;
  let theRequest = new Object();
  if (_url.indexOf("?") != -1) {
    let str = _url.substr(1);
    strs = str.split("&");
    for (let i in strs) {
      theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}
