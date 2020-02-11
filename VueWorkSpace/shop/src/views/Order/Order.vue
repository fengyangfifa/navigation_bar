<template>
  <div class="order">
    <header-top :title="title"></header-top>
    <div class="not-login" v-if="!userInfo._id">
      <img src="~assets/img/person.png" alt="">
      <p>登录后查看外卖订单</p>
      <button @click="goTo">立即登录</button>
    </div>
    <div class="order-list" v-if="userInfo._id">
      <ul class="shop-list">
        <li class="shop-li">
          <a href="javascript:;">
            <div class="shop-top">
              <van-icon name="checked" class="shop-icon" />
              <p class="shop-name">酱骨头（酒仙桥店）</p>
              <p class="order-status">已完成</p>
            </div>
            <div class="shop-left">
              <img src="https://fuss10.elemecdn.com/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg" alt="" class="shop-img">
            </div>
            <div class="shop-right">
              <p>下单时间: 2020-01-21 11:08</p>
              <p>总价: ￥46.1</p>
            </div>
            <div class="again-order">再来一单</div>
          </a>
        </li>
        <li class="shop-li">
          <a href="javascript:;">
            <div class="shop-top">
              <van-icon name="checked" class="shop-icon" />
              <p class="shop-name">一纸鸡锡纸烧肉饭</p>
              <p class="order-status">已完成</p>
            </div>
            <div class="shop-left">
              <img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg" alt="" class="shop-img">
            </div>
            <div class="shop-right">
              <p>下单时间: 2020-01-21 11:08</p>
              <p>总价: ￥30.75</p>
            </div>
            <div class="again-order">再来一单</div>
          </a>
        </li>
        <li class="shop-li">
          <a href="javascript:;">
            <div class="shop-top">
              <van-icon name="clear" class="shop-icon" />
              <p class="shop-name">嘉禾一品（温都水城）</p>
              <p class="order-status">已取消</p>
            </div>
            <div class="shop-left">
              <img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" alt="" class="shop-img">
            </div>
            <div class="shop-right">
              <p>下单时间: 2020-01-21 11:08</p>
              <p>总价: ￥16.8</p>
            </div>
            <div class="again-order">再来一单</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderTop from 'common/HeaderTop/HeaderTop'

import { Icon } from 'vant'
import Vue from 'vue'
import { mapState } from 'vuex'

Vue.use(Icon);

export default {
  name: 'Order',
  components: {
    HeaderTop
  },
  data() {
    return {
      title: '订单列表'
    }
  },
  methods: {
    goTo () {
      this.$router.push('/login');
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
}
</script>

<style scoped>
.not-login {
  padding-top: 95px;
  text-align: center;
}

.not-login img {
  height: 225px;
  width: 225px;
  margin: auto;
  display: block;
}

.not-login p {
  font-size: 17px;
  padding: 10px 0;
  color: #6a6a6a;
}

.not-login button {
  padding: 10px 20px;
  color: #ffffff;
  background-color: #02a774;
  font-size: 14px;
  border: 0;
  border-radius: 5px;
  outline: none;
}

.shop-li {
  height: 120px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  position: relative;
  width: 97%;
  margin: 8px auto;
}

.shop-li::after,
.shop-top::after {
  content: '';
  clear: both;
  display: block;
}

.shop-top {
  width: 100%;
  height: 30px;
  position: relative;
}

.shop-top .shop-icon {
  float: left;
  font-size: 16px;
  color: orange;
  line-height: 30px;
}

.shop-top .shop-name {
  float: left;
  line-height: 30px;
  margin-left: 9px;
  font-size: 14px;
  color: black;
}

.shop-top .order-status {
  float: right;
  line-height: 30px;
  font-size: 14px;
  color: black;
}

.shop-top::after {
  content: '';
  height: 1px;
  position: absolute;
  width: 100%;
  background-color: #f5f5f5;
  bottom: 0;
  left: 0;
}

.shop-left {
  width: 60px;
  height: 60px;
  float: left;
  border-radius: 10px;
  margin-top: 5px;
  box-shadow: 0px 0px 2px #888888;
  margin-left: 2px;
}

.shop-left .shop-img {
  width: 100%;
  height: 100%;
}

.shop-right {
  float: left;
  margin-left: 10px;
  width: 200px;
  margin-top: 10px;
  font-size: 14px;
  color: black;
  line-height: 18px;
}

.again-order {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 14px;
  color: black;
  border: 1px solid #999;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
