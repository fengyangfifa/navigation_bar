<template>
  <div class="star" :class="'star-' + size">
    <span class="star-item" v-for="(sc, index) in starClasses" :key="index" :class="sc"></span>
  </div>
</template>

<script>
// 类名常量
const CLASS_ON = 'on';
const CLASS_HALF = 'half';
const CLASS_OFF = 'off';

export default {
  props: {
    score: Number,
    size: Number
  },
  computed: {
    starClasses () {
      // 向scs添加中'on'、'half'、'off'
      // 'on'表示全星, 'half'表示半星, 'off'表示空星
      const {score} = this;
      const scs = [];
      let onInteger = Math.floor(score);
      // 小数计算不太精确，放大十倍
      let halfInteger = (score * 10 - onInteger * 10) >= 5 ? 1 : 0;
      let offInteger = 5 - onInteger - halfInteger;
      for (let i = 0; i < onInteger; i++) {
        scs.push(CLASS_ON);
      }
      if (halfInteger) {
        scs.push(CLASS_HALF);
      }
      for (let i = 0; i < offInteger; i++) {
        scs.push(CLASS_OFF);
      }
      return scs;
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"

.star //2x图 3x图
  float left
  font-size 0
  .star-item
    display inline-block
    background-repeat no-repeat
  &.star-48
    .star-item
      width 20px
      height 20px
      margin-right 22px
      background-size 20px 20px
      &:last-child
        margin-right: 0
      &.on
        bg-image('./images/star48_on')
      &.half
        bg-image('./images/star48_half')
      &.off
        bg-image('./images/star48_off')
  &.star-36
    .star-item
      width 15px
      height 15px
      margin-right 6px
      background-size 15px 15px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/star36_on')
      &.half
        bg-image('./images/star36_half')
      &.off
        bg-image('./images/star36_off')
  &.star-24
    .star-item
      width 10px
      height 10px
      margin-right 3px
      background-size 10px 10px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/star24_on')
      &.half
        bg-image('./images/star24_half')
      &.off
        bg-image('./images/star24_off')
</style>