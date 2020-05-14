import axios from 'axios';

const service = axios.create({
  timeout: 20000, // 请求超时时间
});

// request
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response
service.interceptors.response.use(
  (response) => {
    if (response.data && response.data.code === 200) {
    }
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
