<template>
  <div id="app">
    <top-bar></top-bar>
    <router-view></router-view>
    <loading v-if="$store.state.loading"></loading>
  </div>
</template>

<script>
import Vue from 'vue'
import { requestApi, formatDate, imageUrl } from '@/common'
import router from '@/router'
import store from '@/store/_store.js'
import Topbar from '@/components/20_topbar/10_Topbar'
import Loading from './20_Loading'

export default {
  name: 'App',
  router,
  store,
  components: {
    'top-bar': Topbar,
    'loading': Loading
  },
  created(){
    Vue.prototype.$requestApi = requestApi
    Vue.prototype.$formatDate = formatDate
    Vue.prototype.$imageUrl = imageUrl
  }
}
</script>

<style src="@/styles/reset.css"></style>
<style lang="scss">
  @import '@/styles/10_app/10_App.scss';
  @import '@/styles/16_responsive/pc_768.scss';
  @import '@/styles/16_responsive/pc_1160.scss';
</style>