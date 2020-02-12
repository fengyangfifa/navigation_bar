<template>
  <div class="star" :class="'star-' + size">
    <span class="star-item" :class="item" v-for="(item, index) in starClasses" :key="index"></span>
  </div>
</template>

<script>
// 类名常量
const CLASS_ON = 'on';
const CLASS_HALF = 'half';
const CLASS_OFF = 'off';

export default {
  name: 'Star',
  props: {
    size: Number,
    score: Number
  },
  computed: {
    starClasses () {
      // 向classArry添加中'on'、'half'、'off'
      // 'on'表示全星, 'half'表示半星, 'off'表示空星
      const {score} = this;
      const classArry = [];
      let onInteger = Math.floor(score);
      // 小数计算不太精确，放大十倍
      let halfInteger = (score * 10 - onInteger * 10) > 5 ? 1 : 0;
      let offInteger = 5 - onInteger - halfInteger;
      for (let i = 0; i < onInteger; i++) {
        classArry.push(CLASS_ON);
      }
      for (let i = 0; i < halfInteger; i++) {
        classArry.push(CLASS_HALF);
      }
      for (let i = 0; i < offInteger; i++) {
        classArry.push(CLASS_OFF);
      }
      return classArry;
    }
  },
}
</script>

<style scoped>
.star-item {
  display: inline-block;
  background-repeat: no-repeat;
}

.star-24 .star-item{
  width: 10px;
  height: 10px;
  margin-right: 3px;
  background-size: 10px 10px;
}

.star-36 .star-item{
  width: 15px;
  height: 15px;
  margin-right: 6px;
  background-size: 15px 15px;
}

.star-48 .star-item {
  width: 20px;
  height: 20px;
  margin-right: 22px;
  background-size: 20px 20px;

}

.star-item:last-child {
  margin-right: 0;
}

.star-24 .on {
  background-image: url('~assets/img/Star/star24_on@2x.png');
}

.star-24 .half {
  background-image: url('~assets/img/Star/star24_half@2x.png');
}

.star-24 .off {
  background-image: url('~assets/img/Star/star24_off@2x.png');
}

.star-36 .on {
  background-image: url('~assets/img/Star/star36_on@2x.png');
}

.star-36 .half {
  background-image: url('~assets/img/Star/star36_half@2x.png');
}

.star-36 .off {
  background-image: url('~assets/img/Star/star36_off@2x.png');
}

.star-48 .on {
  background-image: url('~assets/img/Star/star48_on@2x.png');
}

.star-48 .half {
  background-image: url('~assets/img/Star/star48_half@2x.png');
}

.star-48 .off {
  background-image: url('~assets/img/Star/star48_off@2x.png');
}

</style>
