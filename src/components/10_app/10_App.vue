<template>
  <div id="app">
    <top-bar></top-bar>
    <router-view></router-view>
    <loading v-if="$store.state.loading"></loading>
  </div>
</template>

<script>
import Vue from 'vue'
import { formatDate, imageUrl, requestApi, getStorageArray } from '@/common'
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
    Vue.prototype.$pushHistory = (path) => {
      this.$store.commit('add_history', { path })
    }

    // * get category
    this.$store.dispatch('get_category', () => {
      const localCategory = getStorageArray(localStorage.getItem('filter_category'))
      const localOrder = localStorage.getItem('feeds_order')
      this.$store.commit('set_feed_order', { order: localOrder })
      this.$store.dispatch('change_filter_category', { 
        category: localCategory || this.$store.getters.id_category 
      })
    })
  }
}
</script>

<style src="@/styles/reset.css"></style>
<style lang="scss">
  @import '@/styles/10_app/10_App.scss';
  @import '@/styles/16_responsive/pc_768.scss';
  @import '@/styles/16_responsive/pc_1160.scss';
  @import '@/styles/animation.scss';
</style>