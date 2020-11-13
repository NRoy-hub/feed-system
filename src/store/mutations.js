export default {
  set_category(state, payload){
    state.category = payload.category
  },
  load_on(state){
    state.loading = true
  },
  load_off(state){
    state.loading = false
  }
}