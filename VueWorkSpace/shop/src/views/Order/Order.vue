<template>
  <div>
    <header-top :title="title"></header-top>
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

</style>
