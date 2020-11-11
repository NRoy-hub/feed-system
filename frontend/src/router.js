import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Feed from './components/30_feed/10_Feed.vue'

const routes = [
  { path: '/', component: Feed }
]

export default new VueRouter({
  mode: 'history',
  routes
})