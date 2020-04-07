<template>
  <div class="nearby-shop-list">
    <div class="shop-header">
      <i class="iconfont icon-xuanxiang"></i>
      <span class="shop-header-title">附近商家</span>
    </div>
    <div class="shop-container">
      <ul class="shop-list" v-if="shops.length">
        <li class="shop-li" v-for="(shop, index) in shops" :key="index" @click="goTo">
          <a href="javascript:;">
            <div class="shop-left">
              <img src="https://fuss10.elemecdn.com/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg" alt="" class="shop-img">
            </div>
            <div class="shop-right">
              <div class="shop_detail_header">
                <h4 class="shop_title ellipsis">{{shop.name}}</h4>
                <ul class="shop_detail_ul">
                  <li class="supports" v-for="(item, index) in shop.supports" :key="index">{{item.icon_name}}</li>
                </ul>
              </div>
              <div class="shop_rating_order">
                <div class="shop_rating_order_left">
                  <!-- 评分组件 -->
                  <star :score="shop.rating" :size="24"></star>
                  <div class="rating_section">{{shop.rating}}</div>
                  <div class="order_section">月售{{shop.recent_order_num}}单</div>
                </div>
                <div class="shop_rating_order_right">
                  <span class="delivery_style delivery_right">{{shop.delivery_mode.text}}</span>
                </div>
              </div>
              <div class="shop_distance">
                <p class="shop_delivery_msg">
                  <span>¥{{shop.float_minimum_order_amount}}起送</span>
                  <span class="segmentation">/</span>
                  <span>配送费约¥{{shop.float_delivery_fee}}</span>
                </p>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <!-- 当商家数据没有获取到时,先显示静态图片 -->
      <ul v-else>
        <li v-for="(item, index) in 10" :key="index">
          <img src="~assets/img/ShopList/shop_back.svg" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Star from 'components/Star/Star'

export default {
  name: 'ShopList',
  props: {
    shops: {
      type: Array,
      default () {
        return {};
      }
    }
  },
  components: {
    Star
  },
  methods: {
    goTo () {
      this.$router.push('/shop');
    }
  },
}
</script>

<style scoped>
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
