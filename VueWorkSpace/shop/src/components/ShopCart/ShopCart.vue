<template>
  <div class="shopcart">
    <div class="content" @click="changeShow">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <i class="iconfont icon-shopping_cart"></i>
          </div>
          <div class="num">1</div>
        </div>
        <div class="price">￥0</div>
        <div class="desc">另需配送费￥4 元</div>
      </div>
      <div class="content-right">
        <div class="pay not-enough"> ￥20元起送 </div>
      </div>
    </div>
    <transition name="move">
      <div class="shopcart-list" v-show="show">
        <div class="list-header">
          <span class="title">购物车</span>
          <span class="empty">清空</span>
        </div>
        <div class="list-content">
          <ul>
            <li class="food">
              <span class="name">八宝酱菜</span>
              <div class="price">
                <span>￥4</span>
              </div>
              <cart-control></cart-control>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <div class="list-overlay" @click="changeShow" v-show="show"></div>
  </div>
</template>

<script>
import CartControl from 'components/CartControl/CartControl'

export default {
  name: 'ShopCart',
  data() {
    return {
      show: false
    }
  },
  components: {
    CartControl
  },
  methods: {
    changeShow () {
      this.show = !this.show;
    }
  },
}
</script>

<style scoped>
.shopcart {
  height: 45px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
}

.shopcart .content {
  width: 100%;
  height: 100%;
  z-index: 20;
  position: relative;
}

.shopcart .content-left {
  height: 100%;
  width: 270px;
  background-color: #141d27;
  float: left;
}

.content-left .logo-wrapper {
  display: inline-block;
  position: relative;
  height: 56px;
  width: 56px;
  background-color: #141d27;
  margin: 0 12px;
  padding: 6px;
  top: -11px;
  border-radius: 50%;
}

.logo-wrapper .logo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #2b343c;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-wrapper .logo.highlight {
  background-color: #02a774;
  color: #ffffff;
}

.logo-wrapper .logo.highlight i {
  color: #ffffff;
}

.logo-wrapper .logo i {
  line-height: 44px;
  font-size: 24px;
  color: #80858a;
}

.logo-wrapper .num {
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  border-radius: 16px;
  font-size: 9px;
  font-weight: 700;
  color: #ffffff;
  background-color: #f01414;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
}

.content-left .price {
  display: inline-block;
  vertical-align: top;
  margin-top: 5px;
  line-height: 24px;
  padding-right: 12px;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
}

.content-left .desc {
  display: inline-block;
  vertical-align: bottom;
  margin-bottom: 13px;
  font-size: 10px;
  margin-left: -45px;
}

.content-right {
  width: 105px;
  height: 100%;
  float: left;
}

.content-right .pay {
  background-color: #2b333b;
  line-height: 45px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
}

.content-right .pay.enough {
  background-color: #00b43c;
}

.shopcart-list {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: translateY(-100%);
  z-index: 15;
}

.shopcart-list .list-header {
  height: 41px;
  line-height: 41px;
  padding: 0 18px;
  background-color: #f3f5f7;
  border-bottom: 1px solid rgba(7,17,27,0.1);
  display: flex;
  justify-content: space-between;
}

.shopcart-list .list-header .title {
  font-size: 14px;
  color: #07111b;
}

.shopcart-list .list-header .empty {
  color: #00a0dc;
  font-size: 12px;
}

.shopcart-list .list-content {
  padding: 0 18px;
  max-height: 217px;
  overflow: hidden;
  background-color: #ffffff;
}

.shopcart-list .list-content .food {
  padding: 12px 0;
  position: relative;
  border: none;
}

.list-content .food .name {
  line-height: 24px;
  font-size: 14px;
  color: #07111b;
}

.list-content .food .price {
  position: absolute;
  right: 90px;
  bottom: 12px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 700;
  color: #f01414;
}

.list-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-color: rgba(7,17,27,0.6);
  backdrop-filter: blur(10px);
  z-index: 10;
}

.move-enter-active, .move-leave-active {
  transition: transform .5s;
}

.move-enter, .move-leave-to {
  transform: translateY(0);
}
</style>
