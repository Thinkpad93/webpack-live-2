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
  }
};
