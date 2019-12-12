// 直接更新state的多个方法的对象
import {
  RECEIVE_ADDRESS, 
  RECEIVE_CATEGORYS, 
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  RECEIVE_INFO
} from './mutation-types'

export default {
  // 修改地址
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address;
  },
  // 修改食品分类
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys;
  },
  // 修改商家列表
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops;
  },
  // 设置用户信息
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo;
  },
  // 重置用户信息
  [RESET_USER_INFO] (state) {
    state.userInfo = {};
  },
  // 设置商家商品列表
  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods;
  },
  // 设置商家信息
  [RECEIVE_INFO] (state, {info}) {
    state.info = info;
  },
  // 设置商家评价
  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings;
  }
}
