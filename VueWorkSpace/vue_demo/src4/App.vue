<template>
  <div class="container">
    <Search />
    <users-main />
  </div>
</template>

<script>
import axios from "axios";

import Search from "./components/Search.vue";
import Main from "./components/Main.vue";

export default {
  data() {
    return {};
  },
  components: {
    Search,
    UsersMain: Main
  }
};
</script>

<style>

</style>
