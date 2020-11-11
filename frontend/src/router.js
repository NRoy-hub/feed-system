import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Feed from './components/10_feed/Feed.vue'

const routes = [
  { path: '/', component: Feed }
]

export default new VueRouter({
  mode: 'history',
  routes
})