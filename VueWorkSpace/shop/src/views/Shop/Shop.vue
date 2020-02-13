<template>
  <div>
    <div class="shop-header">
      <div class="shop-nav">
        <a href="javascript:;" class="back">
          <i class="iconfont icon-arrow_left"></i>
        </a>
      </div>
      <div class="shop-content">
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
      <div class="shop-header-discounts">
        <div class="discounts-left">
          <div class="content-tag">
            <span class="mini-tag">首单</span>
          </div>
          <span>新用户下单立减17元(不与其它活动同享)</span>
        </div>
        <div class="discounts-right">8个优惠</div>
      </div>
      <div class=""></div>
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
  </div>
</template>

<script>
export default {
  name: 'Shop'
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
  background-color: #70bc46;
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

</style>
