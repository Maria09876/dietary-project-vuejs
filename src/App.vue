<template>
  <NavBar/>
  <router-view></router-view>
</template>

<script>
import NavBar from './components/UI/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
