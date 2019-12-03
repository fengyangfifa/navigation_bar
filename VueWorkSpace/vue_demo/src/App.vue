<template>
  <div>
    <p>click {{count}} times, count is {{evenOradd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if add</button>
    <button @click="inctrementAsync">increment async</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    evenOradd () {
      return this.count % 2 === 0 ? '偶数':'奇数';
    }
  },
  methods: {
    increment () {
      this.count++;
    },
    decrement () {
      this.count--;
    },
    incrementIfOdd () {
      if(this.count % 2 === 1){
        this.count++;
      }
    },
    inctrementAsync () {
      setTimeout(() => {
        this.count++;
      }, 1000);
    },
  },
}
</script>

<style>
  
</style>
