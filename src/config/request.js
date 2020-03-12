import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://api-user.uyess.com/v2"
    : "https://api-user.uyess.com/v2";
    
const service = axios.create({
  baseURL,
  timeout: 20000, // 请求超时时间
  withCredentials: true // 允许携带cookie
});

//request
service.interceptors.request.use(
  config => {
    console.log(config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//response
service.interceptors.response.use(
  response => {
    console.log(response);
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
