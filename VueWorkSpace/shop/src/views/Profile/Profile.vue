<template>
  <div class="profile">
    <!-- 顶部样式 -->
    <header-top :title="title"></header-top>
    <!-- 登录和头像部分 -->
    <div class="profile-info" @click="goTo">
      <a href="javascript:;" class="profile-link">
        <div class="profile-image">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">{{nameShow}}</p>
          <p>
            <span class="user-icon">
              <i class="iconfont icon-shouji icon-mobile"></i>
            </span>
            <span class="icon-mobile-number">{{userInfo.phone ? userInfo.phone : '暂无绑定手机号'}}</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-jiantou1"></i>
        </span>
      </a>
    </div>
    <!-- 余额积分 -->
    <div class="profile_info_data">
      <div class="balance">
        <p class="info_data_top"><span>0.00</span>元</p>
        <p class="info_data_bottom">我的余额</p>
      </div>
      <div class="discount">
        <p class="info_data_top"><span>0</span>个</p>
        <p class="info_data_bottom">我的优惠</p>
      </div>
      <div class="integral">
        <p class="info_data_top"><span>0</span>分</p>
        <p class="info_data_bottom">我的积分</p>
      </div>
    </div>
    <!-- 订单积分 -->
    <div class="profile-info-order">
      <div class="profile-order">
        <span><i class="iconfont icon-order-s"></i></span>
        <div class="my-order-div">
          <span>我的订单</span>
          <span class="my-order-icon"><i class="iconfont icon-jiantou1"></i></span>
        </div>
      </div>
      <div class="profile-mall">
        <span><i class="iconfont icon-jifen"></i></span>
        <div class="my-order-div">
          <span>积分商城</span>
          <span class="my-order-icon"><i class="iconfont icon-jiantou1"></i></span>
        </div>
      </div>
      <div class="profile-member">
        <span><i class="iconfont icon-vip"></i></span>
        <div class="my-order-div">
          <span>硅谷外卖会员卡</span>
          <span class="my-order-icon"><i class="iconfont icon-jiantou1"></i></span>
        </div>
      </div>
    </div>
    <!-- 服务中心 -->
    <div class="service-center">
      <span><i class="iconfont icon-fuwu"></i></span>
      <div class="my-order-div">
        <span>服务中心</span>
        <span class="my-order-icon"><i class="iconfont icon-jiantou1"></i></span>
      </div>
    </div>
    <!-- 退出按钮 -->
    <van-button type="danger" size="large" class="logout-button" @click="logout">退出登录</van-button>
    <!-- 上传图片 -->
    <van-uploader :after-read="afterRead" />
  </div>
</template>

<script>
import HeaderTop from 'common/HeaderTop/HeaderTop'

import Vue from 'vue'
import { Button, Dialog, Toast, Uploader } from 'vant'
import { mapState } from 'vuex'

Vue.use(Button);
Vue.use(Uploader);

export default {
  name: 'Profile',
  components: {
    HeaderTop
  },
  data() {
    return {
      title: '我的'  
    }
  },
  methods: {
    // 页面跳转
    goTo () {
      if (this.userInfo._id) {

      } else {
        // 跳转至登录页
        this.$router.push('/login');
      }
    },
    // 退出登录
    logout () {
      Dialog.confirm({
        title: '提示',
        message: '确认退出吗?'
      }).then(() => {
        this.$store.dispatch('logout');
      }).catch(() => {
        Toast('取消登出');
      });
    },
    // 上传文件
    afterRead (file) {
      console.log(file);
    }
  },
  computed: {
    ...mapState(['userInfo']),
    // 姓名显示,计算属性
    nameShow () {
      if (this.userInfo._id) {
        return this.userInfo.name ? this.userInfo.name : '未设置';
      }
      return '登录/注册';
    }
  },
}
</script>

<style scoped>
.profile-info {
  position: relative;
}

.profile-info::before {
  position: absolute;
  content: '';
  height: 1px;
  width: 100%;
  background-color: #ffffff;
  /* transform: scaleY(0.5); */
}

.profile-link {
  display: block;
  width: 100%;
  height: 100px;
  background-color: #02a774;
  padding: 20px 10px;
  line-height: normal;
}

.profile-image {
  float: left;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  vertical-align: top;
}

.profile-image i {
  background-color: #e4e4e4;
  font-size: 62px;
  display: block;
  line-height: 64px;
}

.user-info {
  float: left;
  margin: 8px 0 0 15px;
}

.user-info p{
  color: #ffffff;
}

.user-info-top {
  font-size: 18px;
  padding-bottom: 2px;
}

.user-icon {
  display: inline-block;
  margin-left: -15px;
  margin-right: 10px;
  width: 20px;
  height: 20px;
}

.icon-mobile {
  font-size: 30px;
  vertical-align: middle;
}

.icon-mobile-number {
  font-size: 14px;
}

.arrow {
  width: 12px;
  height: 12px;
  position: absolute;
  right: 15px;
  top: 40%;
}

.arrow i {
  color: #ffffff;
  font-size: 5px;
}

.profile_info_data {
  height: 81px;
  width: 100%;
  background-color: #ffffff;
}

.profile_info_data div {
  width: 33.33%;
  height: 100%;
  float: left;
  text-align: center;
}

.balance, .discount {
  border-right: 1px solid #f2f2f2;
}

.info_data_top {
  width: 100%;
  padding: 15px 5px 10px;
  font-size: 14px;
}

.info_data_top span{
  font-size: 30px;
  font-weight: 700;
  display: inline-block;
  margin-left: 12px;
}

.balance .info_data_top span {
  color: #f90;
}

.discount .info_data_top span {
  color: #ff5f3e;
}

.integral .info_data_top span {
  color: #6ac20b;
}

.info_data_bottom {
  font-size: 14px;
}

.profile-info-order {
  margin-top: 10px;
  height: 159px;
  width: 100%;
  background-color: #ffffff;
}

.profile-order,
.profile-mall,
.profile-member {
  height: 53px;
  padding-left: 15px;
  line-height: 53px;
}

.profile-order > span,
.profile-mall > span,
.profile-member > span {
  display: inline-block;
  width: 20px;
  height: 20px;
}

.profile-info-order > div > span i {
  font-size: 30px;
  margin-left: -10px;
}
.profile-order > span i {
  color: #02a774;
}

.profile-mall > span i {
  color: #ff5f3e;
}

.profile-member > span i {
  color: #f90;
}

.my-order-div {
  float: right;
  width: 340px;
  height: 53px;
  padding: 18px 10px 18px 0;
  line-height: 17px;
  font-size: 16px;
  border-bottom: 1px solid #f1f1f1;
  color: #333;
}

.my-order-div .my-order-icon {
  float: right;
  width: 10px;
  height: 10px;
}

.my-order-div .my-order-icon i {
  font-size: 10px;
  color: #bbbbbb;
}

.service-center {
  height: 53px;
  padding-left: 15px;
  line-height: 53px;
}

.service-center {
  margin-top: 10px;
  background-color: #ffffff;
}

.service-center > span {
  display: inline-block;
  width: 20px;
  height: 20px;
}

.service-center > span i {
  font-size: 30px;
  margin-left: -10px;
  color: #02a774;
}

.logout-button {
  margin-top: 10px;
  border-radius: 4px;
}
</style>
