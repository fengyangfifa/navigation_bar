<template>
  <div class="header">
    <slot name="left"></slot>
    <span class="header-title">
      <span>{{title}}</span>
    </span>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: 'HeaderTop',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.header {
  height: 45px;
  width: 100%;
  background-color: #02a774;
  position: relative;
}

.header-title {
  position: absolute;
  width: 50%;
  left: 50%;
  height: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.header-title span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #ffffff;
  font-size: 20px;
  color: #ffffff;
  display: block;
  text-align: center;
}
</style>
