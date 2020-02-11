<template>
  <div class="home">
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
    <div class="wrapper">
      <!-- 轮播区域 -->
      <div class="content">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(tempArry, index) in categorysArr" :key="index">
              <a href="javascript:;" class="link_to_food" v-for="(item, index) in tempArry" :key="index">
                <div class="food_container">
                  <img :src="baseImageUrl + item.image_url" alt="">
                </div>
                <span>{{item.title}}</span>
              </a>
            </div>
          </div>
          <div class="swiper-pagination"></div>
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
    </div>
  </div>
</template>

<script>
import HeaderTop from 'common/HeaderTop/HeaderTop'

import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import BScroll from 'better-scroll'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HeaderTop
  },
  data() {
    return {
      title: '昌平区北七家修正大厦(北清路北)',
      baseImageUrl: 'https://fuss10.elemecdn.com',
    }
  },
  mounted() {
    // 请求食品分类列表
    this.$store.dispatch('getCategorys');
  },
  computed: {
    ...mapState(['categorys', 'userInfo']),
    // 把食品分类列表转化为二维数组
    categorysArr () {
      const {categorys} = this;
      let categorysArry = [];
      let tempArry = [];
      categorys.forEach(item => {
        tempArry.push(item);
        if (tempArry.length === 8) {
          categorysArry.push(tempArry);
          tempArry = [];
        }
      });
      return categorysArry;
    }
  },
  watch: {
    // 监视categorys的改变，当categorys值发生变化
    // 并渲染页面后再初始化Swiper对象，才能产生正确的滑动
    categorys: function (value) {
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          },
        });
        new BScroll('.wrapper');
      });
    }
  },
}
</script>

<style scoped>
.header {
  position: relative;
  z-index: 1000;
}

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

.swiper-container {
  width: 100%;
  height: 200px;
  background-color: #ffffff;
  --swiper-pagination-color: #02a774;
}

.swiper-slide .link_to_food {
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

.wrapper {
  width: 375px;
  height: 573px;
}

.nearby-shop-list {
  width: 100%;
  background-color: #ffffff;
  margin-top: 10px;
  position: relative;
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
