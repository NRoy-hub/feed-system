export default {
  id_category(state){
    return state.category.map(cat => cat.id)
  },
  show_commercials(state){
    const base = Math.floor(state.feeds.length / state.commercial_cycle)
    const length = state.feeds.length % state.commercial_cycle === 0 ? base - 1 : base;
    return [...state.commercials].splice(0, length)
  }
}