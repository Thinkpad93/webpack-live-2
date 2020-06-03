import request from '@/utils/request';
const isDev = process.env.NODE_ENV === 'development' ? '/api' : '';

// 日常活动
export function operationGet(obj = {}) {
  return request.get(isDev + '/act/operation/get', { params: obj });
}

// 短信验证码
export function getCode(params = {}, config = {}) {
  return request.post('/sms/getCode', params, config);
}

// 获取打泡泡排行榜单
export function rankings(obj = {}) {
  return request.get(isDev + '/box/rankings', { params: obj });
}

// 获取全部榜单
export function labouractRanking(params = {}, config) {
  return request.post(isDev + '/labouract/ranking', params, config);
}

// 获取用户榜单
export function labouractRankingByUid(params = {}) {
  return request.post(isDev + '/labouract/rankingByUid', params);
}

// 活动状态
export function labouractStatus(obj = {}) {
  return request.get(isDev + '/labouract/status', { params: obj });
}

// 获取真爱榜
export function datingRank(obj = {}) {
  return request.get(isDev + '/home/dating/rank', {
    params: obj,
  });
}

// 获取真爱榜tablist
export function datingRankList(obj = {}) {
  return request.get(isDev + '/home/dating/rank/tag/list', {
    params: obj,
  });
}

// 获取第三方平台ios的下载地址
export function getIOSDownloadUrl(obj = {}) {
  return request.get('https://www.jikeqi.com/jsonFormat/6VRz', {
    params: obj,
  });
}

// 微信配置
export function wxInit(obj = {}) {
  return request.get(isDev + '/wx/config', {
    params: obj,
  });
}

// 充值金额列表
export function chargeprodList(obj = {}) {
  return request.get(isDev + '/chargeprod/list', {
    params: obj,
  });
}

// 获取排行榜
export function allrankList(obj = {}) {
  return request.get('/allrank/listV2', {
    params: obj,
  });
}
