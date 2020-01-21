<template>
  <div class="navbar">
    <a href="javascrpit:;" :class="{on: '/home' == $route.path}" @click="goTo('/home')">
      <span><i class="iconfont icon-waimai"></i></span>
      <span>外卖</span>
    </a>
    <a href="javascrpit:;" :class="{on: '/search' == $route.path}" @click="goTo('/search')">
      <span><i class="iconfont icon-search"></i></span>
      <span>搜索</span>
    </a>
    <a href="javascrpit:;" :class="{on: '/order' == $route.path}" @click="goTo('/order')">
      <span><i class="iconfont icon-dingdan"></i></span>
      <span>订单</span>
    </a>
    <a href="javascrpit:;" :class="{on: '/profile' == $route.path}" @click="goTo('/profile')">
      <span><i class="iconfont icon-geren"></i></span>
      <span>我的</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    goTo (path) {
      this.$router.replace(path);
    }
  },
}
</script>

<style scoped>
.navbar {
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
}

.navbar::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 1px;
  background-color:#e4e4e4;
  left: 0;
  top: 0;
}

.navbar a {
  margin-top: 3px;
  display: inline-block;
  width: 25%;
  text-align: center;
}

.navbar span {
  font-size: 12px;
  margin-top: 2px;
  display: block;
}

.navbar span i{
  font-size: 22px;
}

.on {
  color: #02a774;
}
</style>
