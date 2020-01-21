<template>
  <div class="order">
    <header-top :title="title"></header-top>
    <div class="not-login">
      <img src="~assets/img/person.png" alt="">
      <p>登录后查看外卖订单</p>
      <button>立即登录</button>
    </div>
  </div>
</template>

<script>
import HeaderTop from 'common/HeaderTop/HeaderTop'

export default {
  name: 'Order',
  components: {
    HeaderTop
  },
  data() {
    return {
      title: '订单列表'
    }
  },
}
</script>

<style scoped>
.not-login {
  padding-top: 95px;
  text-align: center;
}

.not-login img {
  height: 225px;
  width: 225px;
  margin: auto;
  display: block;
}

.not-login p {
  font-size: 17px;
  padding: 10px 0;
  color: #6a6a6a;
}

.not-login button {
  padding: 10px 20px;
  color: #ffffff;
  background-color: #02a774;
  font-size: 14px;
  border: 0;
  border-radius: 5px;
  outline: none;
}
</style>
