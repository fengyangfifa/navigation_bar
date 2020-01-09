<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleclick="titleclick"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info ref="params" :paramInfo="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommends"></goods-list>
    </scroll>
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

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import {getDetail, Goods, GoodsParam, Shop, getRecommend} from 'network/detail'
import {debounce} from 'common/utils'
import {itemListenerMixin} from 'common/mixins'

export default {
  name: 'Detail',
  mixins: [itemListenerMixin],
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
      getThemeTopY: null
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
    GoodsList
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

    this.getThemeTopY = debounce(() => {
      // 获取offsetTop
      this.themeTopYs = [0];
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      // 有可能出现没有评论的情况
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop || this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      console.log('----');
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
}

.detail-nav {
  position: relative;
  z-index: 10;
  background-color: #ffffff;
}

.content {
  /* 根据屏幕动态计算高度 */
  height: calc(100% - 44px);
}
</style>
