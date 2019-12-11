<template>
  <section class="msite">
    <!-- 首页头部 -->
    <HeaderTop :title="address.name">
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" :to="userInfo._id ? '/userinfo' : '/login'">
        <span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
        <span class="header_login_text" v-else>
          <i class="iconfont icon-person"></i>
        </span>
      </router-link>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category, index) in categorys" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl + category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <!-- 当数据没有加载时，显示一个背景图片 -->
      <img src="./images/msite_back.svg" alt="back" v-else>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <shopList></shopList>
    </div>
  </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import shopList from '../../components/shopList/shopList'

import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import {mapState} from 'vuex'

export default {
  data() {
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com'
    }
  },
  components: {
    HeaderTop,
    shopList
  },
  mounted() {
    // 请求食品分类列表
    this.$store.dispatch('getCategorys');
    // 请求商家列表
    this.$store.dispatch('getShops');
  },
  computed: {
    ...mapState(['address', 'categorys', 'userInfo']),
    // 根据categorys生成二维数组
    categorysArr () {
      const {categorys} = this;
      let arr = [];
      let minarr = [];
      categorys.forEach(item => {
        minarr.push(item);
        if (minarr.length === 8){
          arr.push(minarr);
          minarr = [];
        }
      });
      return arr;
    }
  },
  watch: {
    // 监视categorys的改变，当categorys数组发生改变时，创建一个swiper实例对象
    // categorys: function (value) {
    //   // 因为vue先改变对象状态，再异步更新界面。然而swiper要在页面更新显示后执行，才能产生效果
    //   // 故使用setTimeout函数，延迟创建swiper实例对象
    //   setTimeout(() => {
    //     // 创建一个Swiper实例对象，来实现轮播
    //     new Swiper('.swiper-container', {
    //       // 循环轮播
    //       loop: true,
    //       // 分页器
    //       pagination: {
    //         el: '.swiper-pagination',
    //       }
    //     });
    //   }, 100);
    // }
    categorys: function (value) {
      // 使用setTimeout虽然能在页面更新显示后才创建swiper实例对象
      // 但是，因为请求时间不确定，导致页面更新时间不确定，setTimeout的时间只能
      // 设置为较大的值，才能保证在页面更新后在执行回调函数

      // this.$nextTick函数保证在页面更新后立即执行回调函数，
      // 保证页面刷新的及时性

      this.$nextTick(() => {
        // 创建一个Swiper实例对象，来实现轮播
        new Swiper('.swiper-container', {
          // 循环轮播
          loop: true,
          // 分页器
          pagination: {
            el: '.swiper-pagination',
          }
        });        
      })
    }
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"

.msite  //首页
  width 100%
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .link_to_food
            width 25%
            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width 50px
                height 50px
            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
</style>
