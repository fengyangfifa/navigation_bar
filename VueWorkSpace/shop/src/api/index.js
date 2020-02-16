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

// 商家列表
export function reqShops (latitude, longitude) {
  return ajax(`${BASE_URL}/shops`, {latitude, longitude});
}

// 根据经纬度获取位置详情
export function reqAddress (geohash) {
  return ajax(`${BASE_URL}/position/${geohash}`);
}

// 根据会话获取用户信息
export function reqUserInfo () {
  return ajax(`${BASE_URL}/userinfo`);
}

// 获取商家信息
export function reqShopInfo () {
  return ajax('/info');
}

// 获取商家评价
export function reqShopRatings() {
  return ajax('/ratings');
}

// 获取商家商品
export function reqShopFoods() {
  return ajax('/foods');
}
