<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll" 
    :probe-type='3' @scroll="contentScroll" :pullUpLoad="true">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="titles" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import BScroll from 'better-scroll' 

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll' 
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList' 
import BackTop from 'components/content/backTop/BackTop' 

import {getHomeMultidata, getHomeGoods} from 'network/home'

export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data () {
    return {
      banners: [],
      recommends: [],
      titles: ['流行', '新款', '精选'],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      isShowBackTop: false
    }
  },
  computed: {
    showGoods () {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    // 请求首页数据
    this.getHomeMultidata();

    // 初始化请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.scroll.refresh, 500);

    // 监听事件总线中图片加载完成的消息
    this.$bus.$on('itemImageLoad', () => {
      // 刷新scroll的可滑动高度
      refresh();
    });
  },
  methods: {
    getHomeMultidata () {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
        // console.log(this.$refs.scroll.scroll.scrollerHeight);
      });
    },

    // 事件监听
    tabClick (index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
      }
    },
    backClick () {
      this.$refs.scroll.backtop();
    },
    contentScroll (position) { 
      if (Math.abs(position.y) > 1000) {
        this.isShowBackTop = true;
      } else {
        this.isShowBackTop = false;
      }
    },
    // 防抖函数
    debounce (func, delay) {
      let timer = null;

      return function (...args) {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      }
    }
  },
}
</script>

<style scoped>
#home {
  padding-top: 44px;
  /* vh - viewport height */
  height: 100vh;
  position: relative;
}

.home-nav {
  color: #ffffff;
  background-color: var(--color-tint);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
/* .content {
  动态计算高度
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>
