import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  loading: false,
  // * category
  category: [],
  filter_category: [],
  // * feed
  feeds: [],
  feed_page: 1,
  feed_end: false,
  feed_order: 'asc',
  feed_limit: 10,
  // * commercial
  commercials: [],
  folded_commercials: [],
  commercial_page: 1,
  commercial_end: false,
  commercial_cycle: 4,
  commercial_limit: 5,
  // * setting option
  settings: {
    contents_ellipsis: { title: '글 내용 생략', checked: true },
    infinity_scroll: { title: '무한 스크롤 사용', checked: true }
  }
}

export default new Vuex.Store({
  state, getters, mutations, actions
})