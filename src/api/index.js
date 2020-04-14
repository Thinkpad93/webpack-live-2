import request from "@/config/request";
const isDev = process.env.NODE_ENV === "development" ? "/api" : "";

export default {
  index(obj = {}) {
    return request.get("/home/index?city_id=1987&qd_no=uyes_gzh", {
      params: obj
    });
  },
  spike(obj = {}) {
    return request.get("/home/spike?city_id=1987&qd_no=uyes_gzh", {
      params: obj
    });
  },
  hot(obj = {}) {
    return request.get("/home/hot?city_id=1987&qd_no=uyes_gzh", {
      params: obj
    });
  },
  getUserExper(obj = {}) {
    return request.get("/userLevel/getUserExper", { params: obj });
  },
  allrank(obj = {}) {
    return request.get("/allrank/geth5", { params: obj });
  },
  //发送短信验证码
  getCode(params = {}, config = {}) {
    return request.post("/sms/getCode", params, config);
  },
  //我的钱包
  purse(obj = {}) {
    return request.get("/api/purse/h5/query", { params: obj });
  },
  //获取用户信息
  userMsg(obj = {}) {
    return request.get("/api/user/simple/get", { params: obj });
  },
  //获取打泡泡排行榜单
  rankings(obj = {}) {
    return request.get(isDev + "/box/rankings", { params: obj });
  },
  //获取全部榜单
  labouractRanking(params = {}) {
    return request.post(isDev + "/labouract/ranking", params);
  },
  //获取用户榜单
  labouractRankingByUid(params = {}) {
    return request.post(isDev + "/labouract/rankingByUid", params);
  },
  //活动状态
  labouractStatus(obj = {}) {
    return request.get(isDev + "/labouract/status", { params: obj });
  },
};
