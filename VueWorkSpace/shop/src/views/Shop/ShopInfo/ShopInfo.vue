<template>
  <div class="shop-info">
    <div class="info-content">
      <div class="section">
        <h3 class="section-title">配送信息</h3>
        <div class="delivery">
          <div>
            <span class="delivery-icon">{{info.description}}</span>
            <span>由商家配送提供配送，约 {{info.deliveryTime}} 分钟送达，距离 {{info.distance}}</span>
          </div>
          <div class="delivery-money">配送费￥{{info.deliveryPrice}}</div>
        </div>
      </div>
      <div class="split">
      </div>
      <div class="section">
        <h3 class="section-title">活动与服务</h3>
        <div class="activity-sheet-content">
          <ul class="list">
            <li :class="supportClasses[item.type]" v-for="(item, index) in info.supports" :key="index">
              <span class="content-tag">
                <span class="mini-tag">{{item.name}}</span>
              </span>
              <span class="activity-content">{{item.content}}</span>
            </li>
          </ul>
       </div>
      </div>
      <div class="split">
      </div>
      <div class="section">
        <h3 class="section-title">商家实景</h3>
        <div class="pic-wrapper">
          <ul class="pic-list">
            <li class="pic-item" v-for="(item, index) in info.pics" :key="index">
              <img :src="item" alt="">
            </li>
          </ul>
        </div>
      </div>
      <div class="split">
      </div>
      <div class="section">
        <h3 class="section-title">商家信息</h3>
        <ul class="detail">
          <li>
            <span class="bold">品类</span>
            <span>{{info.category}}</span>
          </li>
          <li>
            <span class="bold">商家电话</span>
            <span>{{info.phone}}</span>
          </li>
          <li>
            <span class="bold">地址</span>
            <span>{{info.address}}</span>
          </li>
          <li>
            <span class="bold">营业时间</span>
            <span>{{info.workTime}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'

export default {
  name: 'ShopInfo',
  data() {
    return {
      // css类名
      supportClasses: ['activity-green', 'activity-red', 'activity-orange']
    }
  },
  computed: {
    ...mapState(['info'])
  },
  mounted() {
    new BScroll('.shop-info');
    new BScroll('.pic-wrapper', {
      scrollX: true
    });
  },
}
</script>

<style scoped>
.shop-info {
  width: 100%;
  height: 471px;
  margin-top: 2px;
  background-color: #ffffff;
  overflow: hidden;
}

.shop-info .section {
  width: 100%;
  padding: 16px 14px 14px;
  background-color: #ffffff;
}

.section .section-title {
  color: #000;
  line-height: 16px;
  font-weight: 700;
  font-size: 16px;
}

.section .delivery {
  margin-top: 16px;
  line-height: 18px;
  font-size: 13px;
}

.delivery .delivery-icon {
  display: inline-block;
  width: 55px;
  padding: 1px 0;
  background-color: #0097ff;
  color: #ffffff;
  border-radius: 4px;
  font-size: 11px;
  text-align: center;
  margin-right: 10px;
}

.delivery .delivery-money {
  margin-top: 5px;
}

.info-content .split {
  width: 100%;
  height: 18px;
  border-top: 1px solid rgba(7,17,27,0.1);
  border-bottom: 1px solid rgba(7,17,27,0.1);
  background-color: #f3f5f7;
}

.activity-sheet-content {
  color: #666;
  margin-top: 16px;
}

.activity-sheet-title {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
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

.section .pic-wrapper {
  width: 100%;
  overflow: hidden;
  margin-top: 16px;
  white-space: nowrap;
}

.pic-wrapper .pic-list {
  font-size: 0;
  width: 624px;
}

.pic-wrapper .pic-item {
  display: inline-block;
  margin-right: 6px;
}

.pic-wrapper .pic-item:last-child {
  margin-right: 0;
}

.pic-item img {
  height: 90px;
  width: 120px;
}

.detail {
  margin-bottom: -16px;
}

.detail li{
  padding: 16px 12px 16px 0;
  font-size: 13px;
  line-height: 16px;
  display: flex;
  justify-content: space-between;
  margin-right: -10px;
  position: relative;
}

.detail li::after {
  position: absolute;
  content: '';
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #ddd;
  transform: scaleY(0.5);
}

.detail lI:last-child::after {
  content: '';
  height: 0;
}

.detail li .bold {
  font-weight: 700;
  color: #333;
}
</style>
