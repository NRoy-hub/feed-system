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
        filterCategory: [],
        end: false
      }
    },
    watch: {
      filterCategory(){
        this.page = 1
        this.end = false
        this.updateFeeds(data => {
          this.feeds = data
        })
      },
      order(){
        this.page = 1
        this.end = false
        this.updateFeeds(data => {
          this.feeds = data
        })
      }
    },
    methods: {
      handleScroll(){
        const { scrollY, innerHeight } = window;
        const floor = document.documentElement.offsetHeight - scrollY - innerHeight;
        if(floor < 1 && !this.end){
          this.updateFeeds(data => {
            this.feeds = [ ...this.feeds, ...data ]
          })
        }
      },
      toggleFilter(next){ this.openFilter = next },      
      updateFilter(next){ this.filterCategory = next },
      updateFeeds(cb){
        const { filterCategory: category, order: ord, $store: store, page } = this
        if(store.state.loading)return

        this.$store.commit('load_on')
        this.$requestApi({
          method: 'get',
          path: '/api/list',
          params: {
            page, ord, category,
            limit: 10
          },
          success: (res) => {
            if(res.current_page === res.last_page){
              this.end = true
            }
            this.page += 1
            cb(res.data)
          },
          common: () => store.commit('load_off')
        })
      }
    },
    created(){
      // * get category
      const store = this.$store
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

      // * scroll
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed(){
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="scss" scoped>
    @import '@/styles/30_feed/10_Feed.scss';
</style>