import axios from 'axios'

export function request(config) {
  // axios实例
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/hy',
    timeout: 5000
  });

  //请求拦截器
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    return err;
  });

  // response拦截器
  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    return err;
  });

  // 真正发送网络请求
  return instance(config);
}
