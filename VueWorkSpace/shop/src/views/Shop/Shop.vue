<template>
  <div>
    <div class="shop-header" v-if="info">
      <div class="shop-nav" :style="{backgroundImage: `url(${info.bgImg})`}">
        <a href="javascript:;" class="back" @click="$router.back()">
          <i class="iconfont icon-arrow_left"></i>
        </a>
      </div>
      <div class="shop-content" @click="showOverlayOne = true">
        <img :src="info.avatar" alt="">
        <div class="header-content">
          <h2 class="content-title">
            <span class="content-tag">
              <span class="mini-tag">品牌</span>
            </span>
            <span class="content-name">{{info.name}}</span>
            <span class="content-icon"></span>
          </h2>
          <div class="shop-message">
            <span class="shop-message-detail">{{info.score}}</span>
            <span class="shop-message-detail">月售{{info.sellCount}}单</span>
            <span class="shop-message-detail">
              {{info.description}}
              <span> 约{{info.deliveryTime}}分钟</span>
            </span>
            <span class="shop-message-detail">距离{{info.distance}}</span>
          </div>
        </div>
      </div>
      <div class="shop-header-discounts" v-if="info.supports" @click="showOverlayTwo = true">
        <div class="discounts-left" :class="supportClasses[info.supports[0].type]">
          <div class="content-tag">
            <span class="mini-tag">{{info.supports[0].name}}</span>
          </div>
          <span>{{info.supports[0].content}}</span>
        </div>
        <div class="discounts-right">{{info.supports.length}}个优惠</div>
      </div>  
      <van-overlay class="overlay" :show="showOverlayOne" duration=0.5>
        <div class="brief-modal-content">
          <h2 class="content-title">
            <span class="content-tag">
              <span class="mini-tag">品牌</span>
            </span>
            <span class="content-name">{{info.name}}</span>
          </h2>
          <ul class="brief-modal-msg">
            <li>
              <h3>{{info.score}}</h3>
              <p>评分</p>
            </li>
            <li>
              <h3>{{info.sellCount}}单</h3>
              <p>月售</p>
            </li>
            <li>
              <h3>{{info.description}}</h3>
              <p>约{{info.deliveryTime}}分钟</p>
            </li>
            <li>
              <h3>{{info.deliveryPrice}}元</h3>
              <p>配送费用</p>
            </li>
            <li>
              <h3>{{info.distance}}</h3>
              <p>距离</p>
            </li>
          </ul>
          <h3 class="brief-modal-title">
            <span>公告</span>
          </h3>
          <div class="brief-modal-notice">{{info.bulletin}}</div>
          <div class="mask-footer" @click="showOverlayOne = false">
            <span class="iconfont icon-close"></span>
          </div>
        </div>
      </van-overlay>
      <van-popup v-model="showOverlayTwo" :close-on-popstate="true" closeable :close-on-click-overlay="false"
       position="bottom" :style="{ height: '37%' }">
       <div class="activity-sheet-content">
         <h2 class="activity-sheet-title">优惠活动</h2>
         <ul class="list">
           <li :class="supportClasses[item.type]" v-for="(item, index) in info.supports" :key="index">
             <span class="content-tag">
               <span class="mini-tag">{{item.name}}</span>
             </span>
             <span class="activity-content">{{item.content}}</span>
           </li>
         </ul>
       </div>
      </van-popup>
    </div>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shop/foods" replace>点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/ratings" replace>评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/info" replace>商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import ShopFoods from 'views/Shop/ShopFoods/ShopFoods'
import ShopRatings from 'views/Shop/ShopRatings/ShopRatings'
import ShopInfo from 'views/Shop/ShopInfo/ShopInfo'

import {mapState} from 'vuex'
import Vue from 'vue'
import { Overlay, Popup, Tag } from 'vant'

Vue.use(Overlay);
Vue.use(Popup);
Vue.use(Tag);

export default {
  name: 'Shop',
  data() {
    return {
      // 是否显示遮罩层
      showOverlayOne: false,
      showOverlayTwo: false,
      // css类名
      supportClasses: ['activity-green', 'activity-red', 'activity-orange']
    }
  },
  mounted() {
    // 获取商家信息
    this.$store.dispatch('getShopInfo');
  },
  computed: {
    ...mapState(['info'])
  },
  components: {
    ShopInfo,
    ShopFoods,
    ShopRatings
  },
  activated() {
    // 进入页面时将弹窗关闭
    this.showOverlayTwo = false;
    this.showOverlayOne = false;
  },
  deactivated() {
    // 离开页面时将弹窗关闭
    this.showOverlayTwo = false;
    this.showOverlayOne = false;
  },
}
</script>

<style scoped>
.shop-header {
  background-color: #ffffff;
}

.shop-nav {
  width: 100%;
  height: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 5px 10px;
  position: relative;
}

.shop-nav::before {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  content: '';
  background-color: rgba(119, 103, 137, 0.43);
}

.back {
  position: absolute;
  top: 10px;
  left: 0;
}

.back i {
  display: block;
  font-size: 20px;
  color: #ffffff;
  padding: 5px;
}

.shop-content {
  position: relative;
  height: 79px;
  width: 100%;
  background-color: #ffffff;
  padding: 30px 20px 5px 20px;
}

.shop-content img {
  width: 66px;
  height: 66px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-top: -40px;
  border-radius: 2px;
  box-shadow: 0 0 0.4vw 0 rgba(0,0,0,0.2);
}

.header-content {
  height: 44px;
  width: 100%;
}

.content-title {
  text-align: center;
  color: #333333;
  height: 24px;
  font-size: 20px;
  position: relative;
}

.content-title .content-tag {
  font-size: 12px;
  display: inline-block;
  height: 18px;
  width: 36px;
  background-color: rgb(255, 240, 6);
  text-align: center;
  margin-right: 10px;
  position: relative;
  border-radius: 2px;
}

.content-title .mini-tag {
  position: absolute;
  display: block;
  height: 18px;
  margin-top: 4px;
  margin-left: 6px;
}

.content-icon {
  position: relative;
  width: 20px;  
  height: 16px;
}

.content-icon::after {
  display: inline-block;
  content: '';
  border-style: solid;
  border-width: 6px 6px;
  border-color: transparent transparent transparent rgba(0,0,0,0.67);
}

.shop-message {
  height: 12px;
  margin-top: 8px;
  font-size: 12px;
  color: #333333;
  text-align: center;
}

.shop-message-detail:not(:last-child):after {
  content: " \B7 ";
  opacity: 0.2;
}

.shop-header-discounts {
  height: 25px;
  padding: 5px 7px;
  border: 1px solid #eee;
  background-color: #ffffff;
  border-radius: 1px;
  margin: 0 30px;
  line-height: 13px;
}

.discounts-left {
  width: 239px;
  float: left;
  overflow: hidden;
  height: 13px;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.discounts-left .content-tag {
  height: 13px;
  width: 24px;
  text-align: center;
  margin-right: 5px;
  border-radius: 2px;
  color: #ffffff;
  float: left;
}

.discounts-left .mini-tag {
  font-size: 12px;
}

.discounts-right {
  float: left;
  font-size: 12px;
  position: relative;
  width: 60px;
  padding-left: 5px;
}

.discounts-right::after {
  content: '';
  border-style: solid;
  border-width: 4px 4px;
  border-color: rgba(0,0,0,0.67) transparent transparent transparent;
  display: block;
  position: absolute;
  right: 0;
  top: 2px;
}

.tab {
  height: 40px;
  line-height: 40px;
  background-color: #ffffff;
  position: relative;
}

.tab .tab-item {
  width: 33.3333%;
  float: left;
  text-align: center;
  font-size: 14px;
  color: #4d555d;
}

.tab .tab-item a{
  display: block;
  position: relative;
}

.tab .tab-item a.router-link-active{
  color: #02a774;
}

.tab .tab-item a.router-link-active::after {
  content: '';
  width: 35px;
  height: 2px;
  background-color: #02a774;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.overlay {
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.brief-modal-content {
  width: 340px;
  height: 235px;
  position: relative;
  background-color: #ffffff;
  padding: 25px 20px;
  border-radius: 5px;
}

.brief-modal-msg {
  margin: 20px -10px 0;
}

.brief-modal-msg li {
  float: left;
  width: 20%;
  text-align: center;
}

.brief-modal-msg li h3 {
  color: #333333;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 8px;
}

.brief-modal-msg li p {
  font-size: 12px;
  color: #999;
}

.brief-modal-msg::after {
  content: '';
  display: block;
  clear: both;
}

.brief-modal-title {
  margin: 15px auto;
  text-align: center;
  font-size: 12px;
  color: #999;
}

.brief-modal-notice {
  font-size: 13px;
  line-height: 1.54;
  color: #333333;
  overflow-y: auto;
}

.mask-footer {
  position: absolute;
  bottom: -60px;
  left: 50%;
  padding: 6px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  transform: translateX(-50%);
  border-radius: 50%;
}

.mask-footer span {
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
}

.activity-sheet-content {
  padding: 20px 30px;
  color: #333333;
}

.activity-sheet-title {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
}

.activity-sheet-content .list {
  height: 160px;
  overflow-y: auto;
}

.activity-sheet-content li {
  margin-bottom: 12px;
}

.activity-sheet-content .content-tag {
  width: 36px;
  height: 18px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  margin-right: 10px;
  border-radius: 2px;
}

.activity-sheet-content .mini-tag {
  color: #ffffff;
  font-size: 12px;
  line-height: 12px;
}

.activity-sheet-content .activity-content {
  font-size: 13px;
}

 .activity-green .content-tag {
  background-color: #70bc46;
}

.activity-red .content-tag {
  background-color: #f07373;
}

.activity-orange .content-tag {
  background-color: #f1884f;
}
</style>
