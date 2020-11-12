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

<style src="@/styles/reset.css"></style>
<style lang="scss">
  @import '@/styles/10_app/10_App.scss';
  @import '@/styles/16_responsive/pc_768.scss';
  @import '@/styles/16_responsive/pc_1060.scss';
</style>