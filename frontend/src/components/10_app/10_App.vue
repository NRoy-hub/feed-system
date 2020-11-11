<template>
  <div id="app">
    <top-bar></top-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import router from '@/router'
import store from '@/store'
import Topbar from '@/components/20_topbar/10_Topbar'
export default {
  name: 'App',
  router,
  store,
  components: {
    'top-bar': Topbar
  }
}
</script>

<style src="@/reset.css"></style>
<style lang="scss" scoped>
</style>