import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Feed from '@/components/30_feed/10_Feed'
import Detail from '@/components/40_detail/10_Detail'

export const url = {
  feed: '/',
  detail: id => `/feed/${ id ? id : ':id' }`
}

const routes = [
  { path: url.feed, component: Feed },
  { path: url.detail(), component: Detail }
]

export default new VueRouter({
  mode: 'history',
  routes
})