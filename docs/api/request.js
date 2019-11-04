import axios from 'axios';
import config from '../config'

// 创建axios实例
let apiURL = config.ajaxUrl;
const service = axios.create({
  baseURL: apiURL,
  timeout: 1000 * 300,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
});

// request拦截器
service.interceptors.request.use(
  config => {
    // 从sessionStorage中获取Token，在请求中增加授权TOKEN信息
    let token = sessionStorage.getItem('token');
    config.headers.Authorization = 'Bearer ' + token;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// response拦截器
service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // let resp = error.response;
    return Promise.reject(error);
  }
);

export default service;
