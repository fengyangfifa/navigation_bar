<template>
  <div class="search">
    <header-top :title="title"></header-top>
    <form class="search_form" @submit.prevent="search">
      <input type="text" placeholder="请输入商家名称" class="search_input">
      <input type="submit" class="search_submit">
    </form>
    <div>
      <img src="~/assets/img/top.png" alt="">
    </div>
  </div>
</template>

<script>
import HeaderTop from 'common/HeaderTop/HeaderTop'

import { Toast } from 'vant'

export default {
  name: 'Search',
  components: {
    HeaderTop
  },
  data() {
    return {
      title: '搜索'
    }
  },
  methods: {
    search () {
      Toast('无数据');
    }
  },
}
</script>

<style scoped>
.search_form {
  height: 59px;
  width: 100%;
  background-color: #ffffff;
  padding: 12px 8px;
}

.search_form input {
  height: 35px;
  padding: 0 4px;
  border-radius: 2px;
  font-weight: bold;
  outline: none;
}

.search_input {
  float: left;
  width: 79%;
  border: 4px solid #f2f2f2;
  font-size: 14px;
  background-color: #f2f2f2;
}

.search_submit {
  float: right;
  width: 18%;
  border: 4px solid #02a774;
  font-size: 16px;
  color: #ffffff;
  background-color: #02a774;
}
</style>
