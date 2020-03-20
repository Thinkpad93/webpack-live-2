import request from "@/config/request";

export default {
  index(obj = {}) {
    return request
      .get("/home/index?city_id=1987&qd_no=uyes_gzh", { params: obj })
      .then(res => res.data);
  },
  spike(obj = {}) {
    return request
      .get("/home/spike?city_id=1987&qd_no=uyes_gzh", { params: obj })
      .then(res => res.data);
  },
  hot(obj = {}) {
    return request
      .get("/home/hot?city_id=1987&qd_no=uyes_gzh", { params: obj })
      .then(res => res.data);
  },
  getUserExper(obj = {}) {
    return request
      .get("/userLevel/getUserExper", { params: obj })
      .then(res => res.data);
  },
  allrank(obj = {}) {
    return request.get("/allrank/geth5", { params: obj }).then(res => res.data);
  },
  getCode(params = {}, config = {}) {
    return request.post("/sms/getCode", params, config).then(res => res.data);
  },
  purse(obj = {}) {
    return request
      .get("/api/purse/h5/query", { params: obj })
      .then(res => res.data);
  },
  //获取用户信息
  userMsg(obj = {}) {
    return request
      .get("/api/user/simple/get", { params: obj })
      .then(res => res.data);
  }
};
