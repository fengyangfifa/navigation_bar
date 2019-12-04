<template>
  <div>
    <!-- <p>click {{$store.state.count}} times, count is {{evenOradd}}</p> -->
    <p>click {{count}} times, count is {{evenOradd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if add</button>
    <button @click="inctrementAsync">increment async</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["evenOradd"])
    // ...mapGetters({evenOradd:"evenOradd2"})
    // evenOradd () {
    //   return this.$store.getters.evenOradd;
    // }
  },
  methods: {
    ...mapActions(["increment", "decrement", "incrementIfOdd", "inctrementAsync"])
  },
  // methods: {
  //   increment () {
  //     // 通知vuex更新数据
  //     this.$store.dispatch("increment");
  //   },
  //   decrement () {
  //     this.$store.dispatch("decrement");
  //   },
  //   incrementIfOdd () {
  //     this.$store.dispatch("incrementIfOdd");
  //   },
  //   inctrementAsync () {
  //     this.$store.dispatch("inctrementAsync");
  //   },
  // },
}
</script>

<style>
  
</style>
