<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show (message, duration = 1500) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = '';
      }, duration);
    }
  },
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
  z-index: 999;
}
</style>
