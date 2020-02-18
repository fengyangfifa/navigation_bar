<template>
  <div class="cartcontrol-wrapper">
    <div class="cartcontrol">
      <transition name="move">
        <div class="iconfont icon-remove_circle_outline" v-show="food.count"></div>
      </transition>
      <div class="cart-count">{{food.count}}</div>
      <div class="iconfont icon-add_circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartControl',
  props: {
    food: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.cartcontrol-wrapper {
  position: absolute;
  right: 0;
  bottom: 6px;
}

.cartcontrol .iconfont {
  display: inline-block;
  padding: 6px;
  line-height: 24px;
  font-size: 24px;
  color: #02a774;
}

.cartcontrol .cart-count {
  display: inline-block;
  vertical-align: top;
  width: 12px;
  padding-top: 6px;
  line-height: 24px;
  text-align: center;
  font-size: 10px;
  color: #93999f;
}

.move-enter-active, .move-leave-active {
  transition: all .3s
}

.move-enter, .move-leave-to {
  opacity: 0;
  transform: translateX(15px) rotate(180deg);
}
</style>
