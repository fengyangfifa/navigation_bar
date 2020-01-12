<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" ref="nav" @titleclick="titleclick"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info ref="params" :paramInfo="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommends"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import {getDetail, Goods, GoodsParam, Shop, getRecommend} from 'network/detail'
import {debounce} from 'common/utils'
import {itemListenerMixin, backTopMixin} from 'common/mixins'

export default {
  name: 'Detail',
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      itemImgListener: null,
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
  },
  created() {
    // this.iid = this.$route.params.iid;
    this.iid = this.$route.query.iid;

    // 获取详情数据
    getDetail(this.iid).then(res => {
      const data = res.result;
      // 获取顶部的图片轮播数据
      this.topImages = res.result.itemInfo.topImages;

      // 获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

      // 获取店铺信息
      this.shop = new Shop(data.shopInfo);

      // 商品的详情数据
      this.detailInfo = data.detailInfo;

      // 商品参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

      // 商品评论信息
      if (data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0];
      }
    });

    // 获取推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list;
    });

    // 获取商品、参数、评论、推荐的y轴坐标
    this.getThemeTopY = debounce(() => {
      // 获取offsetTop
      this.themeTopYs = [0];
      // 需要减去顶部样式栏的高度
      const TopBarHeight = 44;
      this.themeTopYs.push((this.$refs.params.$el.offsetTop - TopBarHeight));
      // 有可能出现没有评论的情况
      let commentHeight = (this.$refs.comment.$el.offsetTop || this.$refs.recommend.$el.offsetTop) - TopBarHeight;
      this.themeTopYs.push(commentHeight);
      this.themeTopYs.push((this.$refs.recommend.$el.offsetTop - TopBarHeight));
      // 给数组放入一个非常大的值，利于后面使用
      this.themeTopYs.push(Number.MAX_SAFE_INTEGER);
    }, 100);
  },
  // updated() {
    // 这里获取高度还是有问题,最好是在组件中记录图片是否加载完成,
    // 然后再向父组件发送获取offsetTop的事件
    // this.themeTopYs = [0];
    // this.themeTopYs.push(this.$refs.params.$el.offsetTop);
    // this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
    // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
    // console.log(this.themeTopYs);
  // },
  methods: {
    imageLoad () {
      this.$refs.scroll.refresh();
      // this.refresh();
      // 因为在详情中的图片最多,所以基本上详情页的图片加载完成了,页面的图片基本上都加载了
      this.getThemeTopY();
    },
    titleclick (index) {
      // 滚动的对应位置
      this.$refs.scroll.scroll.scrollTo(0, -this.themeTopYs[index], 500);
    },
    // 根据内容滚动的位置，修改顶部栏的样式
    contentScroll (position) {
      // 获取y值
      const positionY = Math.abs(position.y);

      // 对比themeTopYs中的值，修改对应顶部的样式
      this.currentIndex = this.themeTopYs.findIndex((top, index) => {
        return positionY >= top && positionY < this.themeTopYs[index + 1];
      });
      if (this.$refs.nav.currentIndex != this.currentIndex) {
        this.$refs.nav.currentIndex = this.currentIndex;      
      }

      // 是否显示backTop
      this.isShowBackTop = Math.abs(position.y) > 1000;
    },

    // 响应添加购物车的事件
    addToCart () {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.newPrice;
      product.iid = this.iid;
      product.realprice = parseFloat(this.goods.realPrice);
      this.$store.dispatch('addCart', {product}).then(res => {
        this.$toast.show(res);
      });
    }
  },
  destroyed() {
    // 取消总线事件监听
    this.$bus.$off('itemImageLoad', this.itemImgListener);
  },
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #ffffff;
  height: 100vh;
  overflow: hidden;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #ffffff;
}

.content {
  /* 根据屏幕动态计算高度 */
  height: calc(100% - 44px - 49px);
}
</style>
