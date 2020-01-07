<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    // document.querySelector('.wrapper'), 不推荐采用这种方式获取元素
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    // 监听滚动的位置
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position);
    });
  },
  methods: {
    backtop () {
      this.scroll.scrollTo(0, 0, 500);
    }
  },
}
</script>

<style scoped>

</style>
