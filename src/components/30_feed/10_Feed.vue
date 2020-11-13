<template>
  <main class="feed-page page">
    <div class="feed_wrapper wrapper">
      <aside class="aside_bar">
        <div class="login_button">
          <span>로그인</span>
        </div>
      </aside>
      <div class="feed">
        <option-bar @open-filter="toggleFilter(true)"></option-bar>
        <section class="feed_list">
          <feed-item v-for="feed in feeds" :key="feed.id" v-bind="feed"></feed-item>
          <commercial-item v-for="commercial in commercials" :key="commercial.id"></commercial-item>
        </section>
      </div>
    </div>
    <filter-modal 
      v-if="openFilter" 
      @close-filter="toggleFilter(false)"
      :filter_category.sync="filterCategory"
    ></filter-modal>
  </main>
</template>

<script>
  import OptionBar from './20_OptionBar'
  import FeedItem from './30_FeedItem'
  import CommercialItem from './40_CommercialItem'
  import FilterModal from './15_FilterModal'

  export default {
    name: "Feed",
    components: {
      'option-bar': OptionBar,
      'feed-item': FeedItem,
      'commercial-item': CommercialItem,
      'filter-modal': FilterModal
    },
    data(){
      return {
        feeds: [],
        commercials: [],
        openFilter: false,
        filterCategory: []
      }
    },
    watch: {
      filterCategory(){
        const category = this.filterCategory
        // * get list
        this.$store.commit('load_on')
        this.$requestApi({
          method: 'get',
          path: '/api/list',
          params: {
            page: 1,
            ord: 'asc',
            limit: 10,
            category
          },
          success: (res) => this.feeds = res.data,
          common: () => this.$store.commit('load_off')
        })
      }
    },
    methods: {
      toggleFilter(next){ this.openFilter = next },      
      updateFilter(next){ this.filterCategory = next }
    },
    created(){
      const store = this.$store
      // * get category
      store.commit('load_on')
      this.$requestApi({
        method: 'get',
        path: '/api/category',
        success: ({ category }) => {
          store.commit('set_category', { category })
          this.filterCategory = category.map(item => item.id)
        },
        common: () => store.commit('load_off')
      })
    }
  }
</script>

<style lang="scss" scoped>
    @import '@/styles/30_feed/10_Feed.scss';
</style>