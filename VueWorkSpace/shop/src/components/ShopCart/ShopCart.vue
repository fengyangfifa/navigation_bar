<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left" @click="changeShow">
        <div class="logo-wrapper">
          <div class="logo" :class="{highlight: totalCount}">
            <i class="iconfont icon-shopping_cart"></i>
          </div>
          <div class="num" v-if="totalCount">{{totalCount}}</div>
        </div>
        <div class="price">￥{{totalPrice}}</div>
        <div class="desc">另需配送费￥{{info.deliveryPrice}} 元</div>
      </div>
      <div class="content-right">
        <div class="pay" :class="payClass">{{payText}}</div>
      </div>
    </div>
    <transition name="move">
      <div class="shopcart-list" v-show="listShop">
        <div class="list-header">
          <span class="title">购物车</span>
          <span class="empty" @click="emptyCart">清空</span>
        </div>
        <div class="list-content">
          <ul>
            <li class="food" v-for="(item, index) in cartFoods" :key="index">
              <span class="name">{{item.name}}</span>
              <div class="price">
                <span>{{item.price}}</span>
              </div>
              <cart-control :food="item"></cart-control>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <div class="list-overlay" @click="changeShow" v-show="listShop"></div>
  </div>
</template>

<script>
import CartControl from 'components/CartControl/CartControl'

import {mapState, mapGetters} from 'vuex'
import BScroll from 'better-scroll'
import { Dialog } from 'vant'

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
  computed: {
    ...mapState(['cartFoods', 'info']),
    ...mapGetters(['totalCount', 'totalPrice']),
    // 支付金额的样式
    payClass () {
      const {totalPrice} = this;
      const {minPrice} = this.info;
      return totalPrice >= minPrice ? 'enough' : 'not-enough';
    },
    // 支付金额text
    payText () {
      const {totalPrice} = this;
      const {minPrice} = this.info;
      if (totalPrice > 0) {
        return totalPrice >= minPrice ? '去结算' : `还差￥${minPrice - totalPrice}元起送`;
      } else {
        return `￥${minPrice}元起送`;
      }
    },
    // 是否显示购物清单
    listShop () {
      if (this.totalCount === 0) {
        this.show = false;
        return false;
      }
      if (this.show) {
        // 如果显示购物列表，则创建BScroll实例
        this.$nextTick(() => {
          // 实现单例模式，避免创建多个BScroll实例
          if (!this.scroll) {
            this.scroll = new BScroll('.list-content', {
              click: true
            });
          } else {
            // 让滚动条刷新一下：重新计算内容的高度，看是否需要生成滚动条
            this.scroll.refresh();
          }
        });
      }
      return this.show;
    }
  },
  methods: {
    changeShow () {
      this.show = !this.show;
    },
    // 清空购物车
    emptyCart () {
      Dialog.confirm({
        title: '提示',
        message: '确定清空购物车吗?'
      }).then(() => {
        this.$store.dispatch('clearCart');
      }).catch(() => {
      });
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
  background-color: #2b333b;
}

.content-right .pay {
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
