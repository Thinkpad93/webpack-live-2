import axios from "axios";
import { Toast } from 'vant';
let toast;


const baseURL =
  process.env.NODE_ENV === "production"
    ? "http://www.whddd666.com/"
    : "http://www.whddd666.com/";

const service = axios.create({
  //baseURL,
  timeout: 20000, // 请求超时时间
  //withCredentials: false // 允许携带cookie
});

// request
service.interceptors.request.use(
  config => {
    console.log(config);
    console.log('config');
    toast = Toast.loading({
      duration: 0,
      message: '加载中...',
      forbidClick: true,
    });
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// response
service.interceptors.response.use(
  response => {
    if (response.data && response.data.code === 200) {
      toast.clear();
    }
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
