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
  // return ajax(`${BASE_URL}/search_shops`, {geohash, keyword});
  // 因为后端项目的问题，这里使用固定的数据
  return {
    "code": 0,
    "data": [
      {
        "name": "test_shop",
        "address": "广东省广州市海珠区马涌直街20号",
        "id": 1196,
        "latitude": 23.09499,
        "longitude": 113.26166,
        "location": [
          113.26166,
          23.09499
        ],
        "phone": "18320326523",
        "category": "鲜花蛋糕/面包",
        "supports": [
          {
            "description": "准时必达，超时秒赔",
            "icon_color": "57A9FF",
            "icon_name": "准",
            "id": 9,
            "name": "准时达",
            "_id": "5ad00b4febf543051ea2e5f6"
          },
          {
            "description": "该商家支持开发票，请在下单时填写好发票抬头",
            "icon_color": "999999",
            "icon_name": "票",
            "id": 4,
            "name": "开发票",
            "_id": "5ad00b4febf543051ea2e5f5"
          }
        ],
        "status": 1,
        "recent_order_num": 444,
        "rating_count": 246,
        "rating": 4,
        "promotion_info": "便靓正",
        "piecewise_agent_fee": {
          "tips": "配送费约¥5"
        },
        "opening_hours": [
          "09:00/21:30"
        ],
        "license": {
          "catering_service_license_image": "162bcabb96f9264.jpg",
          "business_license_image": "162bcabb9869263.jpg"
        },
        "is_new": true,
        "is_premium": true,
        "image_path": "162bcab6f889262.jpg",
        "identification": {
          "registered_number": "",
          "registered_address": "",
          "operation_period": "",
          "licenses_scope": "",
          "licenses_number": "",
          "licenses_date": "",
          "legal_person": "",
          "identificate_date": null,
          "identificate_agency": "",
          "company_name": ""
        },
        "float_minimum_order_amount": 20,
        "float_delivery_fee": 5,
        "distance": "2124.6公里",
        "order_lead_time": "31小时27分钟",
        "description": "普通商店",
        "delivery_mode": {
          "color": "57A9FF",
          "id": 1,
          "is_solid": true,
          "text": "蜂鸟专送"
        },
        "activities": [
          {
            "icon_name": "减",
            "name": "满减优惠",
            "description": "参加活动满减优惠",
            "icon_color": "f07373",
            "id": 1,
            "_id": "5ad00b4febf543051ea2e5f7"
          }
        ],
        "__v": 0
      },
      {
        "name": "test",
        "address": "浙江省杭州市余杭区高教路阿里巴巴西溪园区2号楼",
        "id": 1271,
        "latitude": 30.27817,
        "longitude": 120.022003,
        "location": [
          120.022003,
          30.27817
        ],
        "phone": "111",
        "category": "快餐便当/简餐",
        "supports": [
          {
            "description": "已加入“外卖保”计划，食品安全有保障",
            "icon_color": "999999",
            "icon_name": "保",
            "id": 7,
            "name": "外卖保",
            "_id": "5ad7101aebf543051ea30192"
          },
          {
            "description": "准时必达，超时秒赔",
            "icon_color": "57A9FF",
            "icon_name": "准",
            "id": 9,
            "name": "准时达",
            "_id": "5ad7101aebf543051ea30191"
          },
          {
            "description": "该商家支持开发票，请在下单时填写好发票抬头",
            "icon_color": "999999",
            "icon_name": "票",
            "id": 4,
            "name": "开发票",
            "_id": "5ad7101aebf543051ea30190"
          }
        ],
        "status": 1,
        "recent_order_num": 820,
        "rating_count": 305,
        "rating": 4.2,
        "promotion_info": "111",
        "piecewise_agent_fee": {
          "tips": "配送费约¥5"
        },
        "opening_hours": [
          "05:30/05:45"
        ],
        "license": {
          "catering_service_license_image": "162d816cf909817.png",
          "business_license_image": "162d816c82e9816.png"
        },
        "is_new": true,
        "is_premium": true,
        "image_path": "162d81696a79815.png",
        "identification": {
          "registered_number": "",
          "registered_address": "",
          "operation_period": "",
          "licenses_scope": "",
          "licenses_number": "",
          "licenses_date": "",
          "legal_person": "",
          "identificate_date": null,
          "identificate_agency": "",
          "company_name": ""
        },
        "float_minimum_order_amount": 20,
        "float_delivery_fee": 5,
        "distance": "1265.1公里",
        "order_lead_time": "18小时13分钟",
        "description": "111",
        "delivery_mode": {
          "color": "57A9FF",
          "id": 1,
          "is_solid": true,
          "text": "蜂鸟专送"
        },
        "activities": [],
        "__v": 0
      }
    ]
  }
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
