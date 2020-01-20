<template>
  <div>
    <!-- 顶部样式 -->
    <header-top :title="title">
      <router-link to="/search" class="header-search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link to="/login" class="header-login" slot="right">
        <span>登录|注册</span>
      </router-link>
    </header-top>
  </div>
</template>

<script>
import HeaderTop from 'common/HeaderTop/HeaderTop'

export default {
  name: 'Home',
  components: {
    HeaderTop
  },
  data() {
    return {
      title: '昌平区北七家修正大厦(北清路北)'
    }
  },
}
</script>

<style scoped>
.header-search {
  position: absolute;
  width: 10%;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  font-size: 25px;
  color: #ffffff;
}

.header-search i {
  font-size: 25px;
  color: #ffffff;
}

.header-login {
  position: absolute;
  right: 15px;
  font-size: 14px;
  color: #ffffff;
  top: 50%;
  transform: translateY(-50%);
}
</style>
