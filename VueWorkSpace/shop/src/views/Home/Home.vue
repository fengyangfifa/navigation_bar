<template>
  <div class="home">
    <!-- 顶部样式 -->
    <header-top :title="address.name">
      <router-link to="/search" class="header-search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link :to="userInfo._id ? '/profile':'/login'" class="header-login" slot="right">
        <span v-if="!userInfo._id">登录|注册</span>
        <span v-else><i class="iconfont icon-person"></i></span>
      </router-link>
    </header-top>
    <div class="wrapper">
      <!-- 轮播区域 -->
      <div class="content">
        <div class="swiper-container" v-if="categorys.length">
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
        <!-- 当食品分类列表数据没有加载完成时,使用静态图片代替 -->
        <img src="~assets/img/Home/msite_back.svg" alt="" v-else>
        <!-- 附近商家 -->
        <shop-list :shops="shops"></shop-list>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from 'common/HeaderTop/HeaderTop'
import ShopList from 'components/ShopList/ShopList'

import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import BScroll from 'better-scroll'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HeaderTop,
    ShopList
  },
  data() {
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com',
    }
  },
  mounted() {
    // 请求食品分类列表
    this.$store.dispatch('getCategorys');
    // 请求商家列表
    this.$store.dispatch('getShops');
  },
  computed: {
    ...mapState(['categorys', 'userInfo', 'shops', 'address']),
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
      });
    },
    shops: function (value) {
      this.$nextTick(() => {
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
  overflow: hidden;
}

.iconfont.icon-person {
  font-size: 22px;
}
</style>
