<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import router from './router'
export default {
  name: 'App',
  router
}
</script>

<style lang="scss" scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
</style>