<template>
  <div class="toast" v-show="show">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 8px 10px;
  transform: translate(-50%, -50%);
}
</style>
