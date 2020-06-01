import axios from 'axios';
import { Toast } from 'vant';
import { setItem, getItem } from './storage';

const toastCongfig = {
  message: '加载中...',
  forbidClick: true,
  overlay: true,
  duration: 0,
};

let toastIns = null;

let _page_ = getItem(window.sessionStorage, '_page_');

const instance = axios.create({
  timeout: 20000, // 请求超时时间
});

// request
instance.interceptors.request.use(
  (config) => {
    console.log(_page_);
    if (_page_ == null) {
      setItem(window.sessionStorage, '_page_', { showLoading: true });
      toastIns = Toast.loading(toastCongfig);
    }
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response
instance.interceptors.response.use(
  (response) => {
    console.log(response);
    if (response.data && response.data.code === 200) {
      if (_page_ == null) {
        toastIns.clear();
      }
    }
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
