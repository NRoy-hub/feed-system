<template>
  <main class="feed-page page">
    <div class="feed_wrapper wrapper">
      <aside class="aside_bar">
        <div class="login_button">
          <span>로그인</span>
        </div>
      </aside>
      <div class="feed">
        <option-bar @open-filter="toggleFilter(true)" :order.sync="order"></option-bar>
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
        page: 1,
        order: 'asc',
        feeds: [],
        commercials: [],
        openFilter: false,
        filterCategory: []
      }
    },
    watch: {
      filterCategory(){
        this.page = 1
        this.updateFeeds(data => {
          this.feeds = data
        })
      },
      order(){
        this.page = 1
        this.updateFeeds(data => {
          this.feeds = data
        })
      }
    },
    methods: {
      toggleFilter(next){ this.openFilter = next },      
      updateFilter(next){ this.filterCategory = next },
      updateFeeds(cb){
        const { filterCategory: category, order: ord, $store: store, page } = this

        this.$store.commit('load_on')
        this.$requestApi({
          method: 'get',
          path: '/api/list',
          params: {
            page,
            ord,
            limit: 10,
            category
          },
          success: (res) => cb(res.data),
          common: () => store.commit('load_off')
        })
      }
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