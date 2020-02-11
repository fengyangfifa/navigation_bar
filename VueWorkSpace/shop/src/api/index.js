// 包含多个接口请求函数的模块
import ajax from './ajax'

const BASE_URL = '/api';

// 发送短信验证码
export function reqSendCode (phone) {
  return ajax(`${BASE_URL}/sendcode`, {phone});
}

// 手机号验证码登陆
export function reqSmsLogin (phone, code) {
  return ajax(`${BASE_URL}/login_sms`, {phone, code}, 'POST');
}

// 密码登陆
export function reqPwdLogin (name, pwd, captcha) {
  return ajax(`${BASE_URL}/login_pwd`, {name, pwd, captcha}, 'POST');
}

// 用户登出
export function reqLogout () {
  return ajax(`${BASE_URL}/logout`);
}

// 获取食物列表
export function reqFoodCategorys () {
  return ajax(`${BASE_URL}/index_category`);
}