<template>
  <div>
    <div class="shop-header">
      <div class="shop-nav">
        <a href="javascript:;" class="back" @click="$router.back()">
          <i class="iconfont icon-arrow_left"></i>
        </a>
      </div>
      <div class="shop-content" @click="showOverlayOne = true">
        <img src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg" alt="">
        <div class="header-content">
          <h2 class="content-title">
            <span class="content-tag">
              <span class="mini-tag">品牌</span>
            </span>
            <span class="content-name">嘉禾一品（温都水城）</span>
            <span class="content-icon"></span>
          </h2>
          <div class="shop-message">
            <span class="shop-message-detail">4.2</span>
            <span class="shop-message-detail">月售90单</span>
            <span class="shop-message-detail">硅谷专送<span> 约28分钟</span></span>
            <span class="shop-message-detail">距离1000m</span>
          </div>
        </div>
      </div>
      <div class="shop-header-discounts" @click="showOverlayTwo = true">
        <div class="discounts-left activity-green">
          <div class="content-tag">
            <span class="mini-tag">首单</span>
          </div>
          <span>新用户下单立减17元(不与其它活动同享)</span>
        </div>
        <div class="discounts-right">8个优惠</div>
      </div>  
      <van-overlay class="overlay" :show="showOverlayOne" duration=0.5>
        <div class="brief-modal-content">
          <h2 class="content-title">
            <span class="content-tag">
              <span class="mini-tag">品牌</span>
            </span>
            <span class="content-name">嘉禾一品（温都水城）</span>
          </h2>
          <ul class="brief-modal-msg">
            <li>
              <h3>4.2</h3>
              <p>评分</p>
            </li>
            <li>
              <h3>90单</h3>
              <p>月售</p>
            </li>
            <li>
              <h3>硅谷专送</h3>
              <p>约28分钟</p>
            </li>
            <li>
              <h3>4元</h3>
              <p>配送费用</p>
            </li>
            <li>
              <h3>1000m</h3>
              <p>距离</p>
            </li>
          </ul>
          <h3 class="brief-modal-title">
            <span>公告</span>
          </h3>
          <div class="brief-modal-notice">是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户”</div>
          <div class="mask-footer" @click="showOverlayOne = false">
            <span class="iconfont icon-close"></span>
          </div>
        </div>
      </van-overlay>
      <van-popup v-model="showOverlayTwo" closeable :close-on-click-overlay="false"
       position="bottom" :style="{ height: '37%' }">
       <div class="activity-sheet-content">
         <h2 class="activity-sheet-title">优惠活动</h2>
         <ul class="list">
           <li class="activity-green">
             <span class="content-tag">
               <span class="mini-tag">首单</span>
             </span>
             <span class="activity-content">新用户下单立减17元(不与其它活动同享)</span>
           </li>
           <li class="activity-red">
             <span class="content-tag">
               <span class="mini-tag">满减</span>
             </span>
             <span class="activity-content">满35减19，满65减35</span>
           </li>
           <li class="activity-orange">
             <span class="content-tag">
               <span class="mini-tag">特价</span>
             </span>
             <span class="activity-content">【立减19.5元】欢乐小食餐</span>
           </li>
           <li class="activity-orange">
             <span class="content-tag">
               <span class="mini-tag">特价</span>
             </span>
             <span class="activity-content">【立减29元】火烤菠萝皇堡双人餐</span>
           </li>
           <li class="activity-orange">
             <span class="content-tag">
               <span class="mini-tag">特价</span>
             </span>
             <span class="activity-content">【立减16.5元】火烤菠萝皇堡单人餐</span>
           </li>
           <li class="activity-orange">
             <span class="content-tag">
               <span class="mini-tag">特价</span>
             </span>
             <span class="activity-content">【立减15】经典安格斯单人餐</span>
           </li>
           <li class="activity-orange">
             <span class="content-tag">
               <span class="mini-tag">特价</span>
             </span>
             <span class="activity-content">【立减11.95】皇堡双人餐</span>
           </li>
           <li class="activity-orange">
             <span class="content-tag">
               <span class="mini-tag">特价</span>
             </span>
             <span class="activity-content">【立减19.8】半价单人餐</span>
           </li>
         </ul>
       </div>
      </van-popup>
    </div>
    <div class="tab">
      <div class="tab-item">
        <a href="javascript:;" class="on">点餐</a>
      </div>
      <div class="tab-item">
        <a href="javascript:;">评价</a>
      </div>
      <div class="tab-item">
        <a href="javascript:;">商家</a>
      </div>
    </div>
    <shop-foods></shop-foods>
  </div>
</template>

<script>
import ShopFoods from 'views/Shop/ShopFoods/ShopFoods'

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
    }
  },
  components: {
    ShopFoods
  }
}
</script>

<style scoped>
.shop-header {
  background-color: #ffffff;
}

.shop-nav {
  width: 100%;
  height: 50px;
  background-image: url(https://fuss10.elemecdn.com/f/5c/ead54394c3de198d3e6d3e9111bbfpng.png);
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

.tab .tab-item a.on{
  color: #02a774;
}

.tab .tab-item a.on::after {
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
