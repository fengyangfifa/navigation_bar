<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control class="one-tab-control" :titles="titles" 
    @tabClick="tabClick" ref="tabControlone" v-show="isTabFixed">
    </tab-control>
    <scroll class="content" ref="scroll" 
    :probe-type='3' @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="titles" @tabClick="tabClick" ref="tabControltwo"></tab-control>
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

import {getHomeMultidata, getHomeGoods} from 'network/home'
import {debounce} from 'common/utils'
import {itemListenerMixin, backTopMixin} from 'common/mixins'

export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
  },
  mixins: [itemListenerMixin, backTopMixin],
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
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
      itemImgListener: null,
      firstClickTab: [0, 1, 1]
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
        // 完成上拉加载更多
        this.$refs.scroll.scroll.finishPullUp();
      });
    },

    // 事件监听
    tabClick (index) {
      let preType = this.currentType;
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
      // 使两个tabControl保持一致
      this.$refs.tabControlone.currentIndex = index;
      this.$refs.tabControltwo.currentIndex = index;
      // 当第一次点击不同的tab-control时，跳转到对应的顶部
      if (preType !== this.currentType && this.firstClickTab[index]) {
        let top = this.$refs.tabControltwo.$el.offsetTop;
        this.$refs.scroll.scroll.scrollTo(0, -top, 300);
        this.firstClickTab[index] = 0;
      }
    },
    // 监听滚动
    contentScroll (position) {
      // 决定切换栏是否吸顶
      if (Math.abs(position.y) > this.tabOffsetTop) {
        this.isTabFixed = true;
      } else {
        this.isTabFixed = false;
      }
      // 是否显示backTop
      this.isShowBackTop = Math.abs(position.y) > 1000;
    },
    loadMore () {
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad () {
      // 获取TabControl组件对象，从组件对象中获取切换栏的高度
      // 所有的组件都有一个属性$el，用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControltwo.$el.offsetTop;
    }
  },
  // 离开和进入组件时，保存滑动区域高度的状态
  activated() {
    // 进入时刷新scroll，然后回到离开时的高度
    this.$refs.scroll.refresh();
    this.$refs.scroll.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    // 记录离开时的高度
    this.saveY = this.$refs.scroll.scroll.y;

    // 取消以this.itemImgListener作为回调函数的，全局事件的监听
    this.$bus.$off('itemImageLoad', this.itemImgListener);
  },
}
</script>

<style scoped>
#home {
  /* vh - viewport height */
  height: 100vh;
  position: relative;
}

.home-nav {
  color: #ffffff;
  background-color: var(--color-tint);
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}

.one-tab-control {
  position: relative;
  z-index: 10;
}
/* .content {
  动态计算高度
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>
