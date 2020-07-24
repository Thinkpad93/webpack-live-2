import request from '../utils/request';

// 查询申请状态
export function applyStatus(option = {}) {
  option.url = '/guild/apply/status';
  return request.post(option);
}

// 公告列表
export function guildAnnounceList(option = {}) {
  option.url = '/guild/announce/list';
  return request.get(option);
}

// 添加公告
export function guildAnnounceAdd(option = {}) {
  option.url = '/guild/announce/add';
  return request.post(option);
}

// 删除公告
export function guildAnnounceDel(option = {}) {
  option.url = '/guild/announce/del';
  return request.post(option);
}

// 更新公会信息
export function guildEdit(option = {}) {
  option.url = '/guild/edit';
  return request.post(option);
}

// 公会信息-公会名片页面调用
export function guildDetail(option = {}) {
  option.url = '/guild/detail';
  return request.get(option);
}

// 我的公会-我的公会页面调用
export function guildMine(option = {}) {
  option.url = '/guild/mine';
  return request.get(option);
}

// 公会房间列表
export function guildRoomList(option = {}) {
  option.url = '/guild/room/list';
  return request.get(option);
}

// 公会总榜
export function guildRankTotal(option = {}) {
  option.url = '/guild/rank/total';
  return request.post(option);
}

// 公会成员贡献总榜
export function guildRankMemberTotal(option = {}) {
  option.url = '/guild/rank/member/total';
  return request.post(option);
}

// 公会成员贡献日榜
export function guildRankMemberDay(option = {}) {
  option.url = '/guild/rank/member/day';
  return request.post(option);
}

// 捐献积分
export function guildIntegralContribute(option = {}) {
  option.url = '/guild/integral/contribute';
  return request.post(option);
}

// 上报积分
export function guildIntegralUp(option = {}) {
  option.url = '/guild/integral/up';
  return request.post(option);
}

// 会长入会审批列表
export function guildApplyList(option = {}) {
  option.url = '/guild/apply/list';
  return request.get(option);
}

// 会长入会审批
export function guildApplyDealApplyIn(option = {}) {
  option.url = '/guild/apply/dealApplyIn';
  return request.post(option);
}

// 会长退会审批
export function guildApplyDealApplyOut(option = {}) {
  option.url = '/guild/apply/dealApplyOut';
  return request.post(option);
}

// 成员取消退会
export function guildApplyCancelQuit(option = {}) {
  option.url = '/guild/apply/cancelQuit';
  return request.post(option);
}

// 成员申请退会
export function guildApplyQuit(option = {}) {
  option.url = '/guild/apply/quit';
  return request.post(option);
}

// 成员申请入会
export function guildApplyAdd(option = {}) {
  option.url = '/guild/apply/add';
  return request.post(option);
}

// 开除成员
export function guildMemberExpel(option = {}) {
  option.url = '/guild/member/expel';
  return request.post(option);
}

// 公会等级
export function guildLevel(option = {}) {
  option.url = '/guild/level';
  return request.get(option);
}

// 公会搜索
export function guildSearch(option = {}) {
  option.url = '/guild/rank/search';
  return request.get(option);
}