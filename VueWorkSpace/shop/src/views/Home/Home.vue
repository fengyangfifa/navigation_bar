<template>
  <div id="home">
    <!-- 顶部样式 -->
    <header-top :title="title">
      <router-link to="/search" class="header-search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link to="/login" class="header-login" slot="right">
        <span>登录|注册</span>
      </router-link>
    </header-top>
    <!-- 轮播区域 -->
    <div class="swiper-box">
      <div class="swiper-content-region">
        <a href="javascript:;" class="link_to_food">
          <div class="food_container">
            <img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" alt="">
          </div>
          <span>甜品饮品</span>
        </a>
        <a href="javascript:;" class="link_to_food">
          <div class="food_container">
            <img src="https://fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg" alt="">
          </div>
          <span>商超便利</span>
        </a>
        <a href="javascript:;" class="link_to_food">
          <div class="food_container">
            <img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg" alt="">
          </div>
          <span>美食</span>
        </a>
        <a href="javascript:;" class="link_to_food">
          <div class="food_container">
            <img src="https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg" alt="">
          </div>
          <span>简餐</span>
        </a>
        <a href="javascript:;" class="link_to_food food-bottom">
          <div class="food_container">
            <img src="https://fuss10.elemecdn.com/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg" alt="">
          </div>
          <span>新店特惠</span>
        </a>
        <a href="javascript:;" class="link_to_food food-bottom">
          <div class="food_container">
            <img src="https://fuss10.elemecdn.com/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg" alt="">
          </div>
          <span>准时达</span>
        </a>
        <a href="javascript:;" class="link_to_food food-bottom">
          <div class="food_container">
            <img src="https://fuss10.elemecdn.com/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg" alt="">
          </div>
          <span>预订早餐</span>
        </a>
        <a href="javascript:;" class="link_to_food food-bottom">
          <div class="food_container">
            <img src="https://fuss10.elemecdn.com/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg" alt="">
          </div>
          <span>土豪推荐</span>
        </a>
      </div>
      <div></div>
      <!-- <div class="swiper-content-region">
        <a href="javascript:;" class="link_to_food">
          <div class="food_container">
            <img src="https://fuss10.elemecdn.com/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg" alt="">
          </div>
          <span>川湘菜</span>
        </a>
        <a href="javascript:;" class="link_to_food">
          <div class="food_container">
            <img src="https://fuss10.elemecdn.com/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg" alt="">
          </div>
          <span>麻辣烫</span>
        </a>
        <a href="javascript:;" class="link_to_food">
          <div class="food_container">
            <img src="https://fuss10.elemecdn.com/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg" alt="">
          </div>
          <span>包子粥店</span>
        </a>
        <a href="javascript:;" class="link_to_food">
          <div class="food_container">
            <img src="https://fuss10.elemecdn.com/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg" alt="">
          </div>
          <span>鲜花蛋糕</span>
        </a>
        <a href="javascript:;" class="link_to_food food-bottom">
          <div class="food_container">
            <img src="https://fuss10.elemecdn.com/6/1a/1e0f448be0624c62db416e864d2afjpeg.jpeg" alt="">
          </div>
          <span>日韩料理</span>
        </a>
        <a href="javascript:;" class="link_to_food food-bottom">
          <div class="food_container">
            <img src="https://fuss10.elemecdn.com/4/34/ea0d51c9608310cf41faa5de6b8efjpeg.jpeg" alt="">
          </div>
          <span>果蔬生鲜</span>
        </a>
        <a href="javascript:;" class="link_to_food food-bottom">
          <div class="food_container">
            <img src="https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg" alt="">
          </div>
          <span>汉堡薯条</span>
        </a>
        <a href="javascript:;" class="link_to_food food-bottom">
          <div class="food_container">
            <img src="https://fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg" alt="">
          </div>
          <span>披萨意面</span>
        </a>
      </div> -->
    </div>
    <!-- 附近商家 -->
    <div class="nearby-shop-list">
      <div class="shop-header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop-header-title">附近商家</span>
      </div>
      <div class="shop-container">
        <ul class="shop-list">
          <li class="shop-li">
            <a href="javascript:;">
              <div class="shop-left">
                <img src="https://fuss10.elemecdn.com/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg" alt="" class="shop-img">
              </div>
              <div class="shop-right">
                <div class="shop_detail_header">
                  <h4 class="shop_title ellipsis">嘉禾一品（温都水城）</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </div>
                <div class="shop_rating_order">
                  <div class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item half"></span>
                    </div>
                    <div class="rating_section">4.7</div>
                    <div class="order_section">月售106单</div>
                  </div>
                  <div class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">硅谷专送</span>
                  </div>
                </div>
                <div class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li class="shop-li">
            <a href="javascript:;">
              <div class="shop-left">
                <img src="https://fuss10.elemecdn.com/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg" alt="" class="shop-img">
              </div>
              <div class="shop-right">
                <div class="shop_detail_header">
                  <h4 class="shop_title ellipsis">嘉禾一品（温都水城）</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </div>
                <div class="shop_rating_order">
                  <div class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item half"></span>
                    </div>
                    <div class="rating_section">4.7</div>
                    <div class="order_section">月售106单</div>
                  </div>
                  <div class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">硅谷专送</span>
                  </div>
                </div>
                <div class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li class="shop-li">
            <a href="javascript:;">
              <div class="shop-left">
                <img src="https://fuss10.elemecdn.com/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg" alt="" class="shop-img">
              </div>
              <div class="shop-right">
                <div class="shop_detail_header">
                  <h4 class="shop_title ellipsis">嘉禾一品（温都水城）</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </div>
                <div class="shop_rating_order">
                  <div class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item half"></span>
                    </div>
                    <div class="rating_section">4.7</div>
                    <div class="order_section">月售106单</div>
                  </div>
                  <div class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">硅谷专送</span>
                  </div>
                </div>
                <div class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li class="shop-li">
            <a href="javascript:;">
              <div class="shop-left">
                <img src="https://fuss10.elemecdn.com/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg" alt="" class="shop-img">
              </div>
              <div class="shop-right">
                <div class="shop_detail_header">
                  <h4 class="shop_title ellipsis">嘉禾一品（温都水城）</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </div>
                <div class="shop_rating_order">
                  <div class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item half"></span>
                    </div>
                    <div class="rating_section">4.7</div>
                    <div class="order_section">月售106单</div>
                  </div>
                  <div class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">硅谷专送</span>
                  </div>
                </div>
                <div class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li class="shop-li">
            <a href="javascript:;">
              <div class="shop-left">
                <img src="https://fuss10.elemecdn.com/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg" alt="" class="shop-img">
              </div>
              <div class="shop-right">
                <div class="shop_detail_header">
                  <h4 class="shop_title ellipsis">嘉禾一品（温都水城）</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </div>
                <div class="shop_rating_order">
                  <div class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item half"></span>
                    </div>
                    <div class="rating_section">4.7</div>
                    <div class="order_section">月售106单</div>
                  </div>
                  <div class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">硅谷专送</span>
                  </div>
                </div>
                <div class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from 'common/HeaderTop/HeaderTop'

export default {
  name: 'Home',
  components: {
    HeaderTop
  },
  data() {
    return {
      title: '昌平区北七家修正大厦(北清路北)'
    }
  },
}
</script>

<style scoped>
.header-search {
  position: absolute;
  width: 10%;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  font-size: 25px;
  color: #ffffff;
}

.header-search i {
  font-size: 25px;
  color: #ffffff;
}

.header-login {
  position: absolute;
  right: 15px;
  font-size: 14px;
  color: #ffffff;
  top: 50%;
  transform: translateY(-50%);
}

.swiper-box {
  width: 100%;
  height: 200px;
  background-color: #ffffff;
}

.swiper-content-region .link_to_food {
  display: inline-block;
  width: 25%;
  height: 73px;
}

.link_to_food .food_container {
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  height: 60px;
}

.food-bottom {
  margin-top: 24px;
}

.link_to_food span {
  font-size: 13px;
  text-align: center;
  width: 100%;
  display: block;
  color: #666;
}

.link_to_food .food_container img {
  width: 50px;
  height: 50px;
}

.nearby-shop-list {
  width: 100%;
  height: 363px;
  background-color: #ffffff;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
}

.nearby-shop-list::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 1px;
  background-color:#e4e4e4;
  left: 0;
  top: 0;
}

.shop-header {
  width: 100%;
  height: 30px;
  padding: 10px 10px 0;
}

.shop-header-title {
  color: #999;
  font-size: 14px;
  padding-left: 5px;
}

.shop-li {
  height: 105px;
  width: 100%;
}

.shop-li a {
  display: block;
  padding: 15px 8px;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.shop-li a::after {
  position: absolute;
  content: '';
  height: 1px;
  width: 100%;
  background-color: #f1f1f1;
  bottom: 0;
  left: 0;
  transform: scaleY(0.5);
}

.shop-left {
  width: 23%;
  height: 75px;
  padding-right: 10px;
  float: left;
}

.shop-left .shop-img {
  width: 100%;
  height: 100%;
}

.shop-right {
  float: right;
  width: 77%;
}

.shop_detail_header .shop_title::before {
  content: '\54C1\724C';
  display: inline-block;
  font-size: 11px;
  line-height: 11px;
  color: #333;
  background-color: #ffd930;
  padding: 2px 2px;
  border-radius: 2px;
  margin-right: 5px;
}

.shop_detail_header .shop_title {
  float: left;
  width: 200px;
  color: #333;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
}

.shop_detail_header .shop_detail_ul {
  float: right;
  margin-top: 3px;
  list-style: none;
}

.shop_detail_header .shop_detail_ul .supports {
  float: left;
  font-size: 10px;
  color: #999;
  border: 1px solid #f1f1f1;
  padding: 0 2px;
  border-radius: 2px;
}

.shop_detail_header::after,
.shop_rating_order::after {
  content: '';
  display: block;
  clear: both;
}

.shop_rating_order {
  width: 100%;
  margin-top: 18px;
  margin-bottom: 8px;
}

.shop_rating_order_left {
  float: left;
  color: #ff9a0d;
}

.shop_rating_order_left .star {
  float: left;
  font-size: 0;
}

.star-item {
  display: inline-block;
  background-repeat: no-repeat;
}

.star-24 .star-item{
  width: 10px;
  height: 10px;
  margin-right: 3px;
  background-size: 10px 10px;
}

.star-item:last-child {
  margin-right: 0;
}

.on {
  background-image: url('./images/star24_on@2x.png');
}

.half {
  background-image: url('./images/star24_half@2x.png');
}

.off {
  background-image: url('./images/star24_off@2x.png');
}

.rating_section {
  float: left;
  color: #ff6000;
  font-size: 10px;
  margin-left: 4px;
}

.order_section {
  float: left;
  color: #666;
  font-size: 10px;
  transform: scale(0.8);
}

.shop_rating_order_right {
  float: right;
  font-size: 0;
}

.shop_rating_order_right .delivery_right {
  color: #02a774;
  border: 1px solid #02a774;
}

.shop_rating_order_right .delivery_style {
  font-size: 12px;
  transform: scale(0.7);
  transform-origin: 35px 0;
  display: inline-block;
  padding: 1px;
  border-radius: 2px;
}

.shop_distance {
  width: 100%;
  font-size: 12px;
}

.shop_distance .shop_delivery_msg {
  float: left;
  color: #666;
  transform-origin: 0;
  transform: scale(0.9);
}

.shop_distance .segmentation {
  padding-left: 2px;
  padding-right: 2px;
  color: #cccccc;
}
</style>
