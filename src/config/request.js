import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "http://www.whsd666.com/"
    : "http://beta.whsd666.com/";
    
const service = axios.create({
  baseURL,
  timeout: 20000, // 请求超时时间
  withCredentials: false // 允许携带cookie
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
