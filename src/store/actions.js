import { requestApi } from '@/common'

export default {
  // * category
  get_category({ commit }, cb){
    commit('load_on')
    requestApi({
      method: 'get',
      path: '/api/category',
      success: ({ category }) => {
        commit('set_category', { category })
        cb && cb()
      },
      common: () => commit('load_off')
    })
  },
  change_filter_category({ commit, dispatch }, { category }){
    commit('set_filter_category', { category })
    dispatch('update_feeds')
  },

  // * feed
  get_feeds({ commit, state, dispatch }, { isAdd = false } = {}){
    commit('load_on')
    requestApi({
      method: 'get',
      path: '/api/list',
      params: {
        page: state.feed_page, 
        ord: state.feed_order, 
        category: state.filter_category,
        limit: state.settings.limit
      },
      success: (res) => {
        const feeds = res.data
        commit('set_feeds_setting', { 
          page: state.feed_page + 1, 
          end: res.current_page === res.last_page
        })
        commit(isAdd ? 'add_feeds' : 'set_feeds', { feeds })
        dispatch('get_commercials')
      },
      common: () => commit('load_off')
    })
  },
  update_feeds({ commit, dispatch }){
    commit('set_feeds_setting', { page: 1, end: false })
    commit('set_commercial_fold', { folded: [] })
    dispatch('get_feeds')
  },
  add_feeds({ dispatch }){
    dispatch('get_feeds', { isAdd: true })
  },

  // * commercial
  get_commercials({ commit, state }){
    const { 
      feeds, 
      commercials, 
      commercial_cycle, 
      commercial_page: page,
      commercial_end: end,
      settings
    } = state

    if(!end && commercials.length < Math.floor(feeds.length / commercial_cycle)){
      commit('load_on')
      requestApi({
        method: 'get',
        path: '/api/ads',
        params: { page, limit: (settings.limit / 2) },
        success: (res) => {
          commit('set_commercials_setting', { 
            page: state.commercial_page + 1, 
            end: res.current_page === res.last_page
          })
          commit('add_commercials', { commercials: res.data })
        },
        common: () => commit('load_off')
      })
    }
  },

  // * etc
  change_feed_order({ commit, dispatch }, { order }){
    commit('set_feed_order', { order })
    dispatch('update_feeds')
  },
  update_settings({ commit, dispatch }, { settings }){
    commit('set_settings', { settings })
    dispatch('update_feeds')
  }
}