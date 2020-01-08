<template>
  <swiper class="detail-swiper" v-if="showImg">
    <swiper-item v-for="(item, index) in topImages" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  components: {
    SwiperItem,
    Swiper
  },
  props: {
    topImages: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  computed: {
    // 是否加载轮播组件
    // 当图片数据加载到时，才加载轮播组件，
    // 否则可能造成轮播组件不能滚动
    showImg () {
      return this.topImages.length != 0;
    }
  },
}
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
