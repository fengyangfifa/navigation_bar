<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="checked-button" @click.native="checkClick" :isChecked="isSelectAll"></check-button>
      <span>全选</span>
    </div>
    <div class="price">
      合计：￥{{totalPrice}}
    </div>
    <div class="calculate">
      去计算：({{checkCartLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

import { mapGetters } from 'vuex'

export default {
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['totalPrice', 'checkCartLength', 'isSelectAll'])
  },
  methods: {
    checkClick () {
      this.$store.dispatch('changeAllChecked', {flag: !this.isSelectAll})
    }
  },
}
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  position: relative;
  line-height: 40px;
  background-color: #eeeeee;
  display: flex;
  font-size: 14px;
}

.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}

.checked-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
}

.price {
  margin-left: 20px;
  flex: 1;
}

.calculate {
  width: 90px;
  color: #ffffff;
  text-align: center;
  background-color: orangered;
}
</style>
