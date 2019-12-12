// 包含多个接口请求函数的模块
import ajax from './ajax';

const BASE_URL = '/api';

// 1、根据经纬度获取位置详情
export function reqAddress(geohash) {
  return ajax(`${BASE_URL}/position/${geohash}`);
}
// 2、获取食品分类列表
export function reqFoodCategorys() {
  return ajax(`${BASE_URL}/index_category`);
}
// 3、根据经纬度获取商铺列表
export function reqShops(longitude, latitude) {
  return ajax(`${BASE_URL}/shops`, {latitude, longitude});
}
// 4、根据经纬度和关键字搜索商铺列表
export function reqSearchShops(geohash, keyword) {
  return ajax(`${BASE_URL}/search_shops`, {geohash, keyword});
}
// 5、获取一次性验证码
// 6、用户名密码登陆
export function reqPwdLogin({name, pwd, captcha}) {
  return ajax(`${BASE_URL}/login_pwd`, {name, pwd, captcha}, 'POST');
}
// 7、发送短信验证码
export function reqSendCode(phone) {
  return ajax(`${BASE_URL}/sendcode`, {phone});
}
// 8、手机号验证码登陆
export function reqSmsLogin(phone, code) {
  return ajax(`${BASE_URL}/login_sms`, {phone, code}, 'POST');
}
// 9、根据会话获取用户信息
export function reqUserInfo() {
  return ajax(`${BASE_URL}/userinfo`);
}
// 10、用户登出
export function reqLogout() {
  return ajax(`${BASE_URL}/logout`);
}
// 获取商家信息
export function reqShopInfo() {
  return ajax('/info');
}
// 获取商家评价
export function reqShopRatings() {
  return ajax('/ratings');
}
// 获取商家商品
export function reqShopGoods() {
  return ajax('/goods');
}
