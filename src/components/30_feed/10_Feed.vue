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
          <feed-item 
            v-for="(feed, index) in feeds" 
            :key="`feed_${ feed.id }`"
            :style="{ order: Math.floor(index / cycle) }"
            v-bind="feed"
          ></feed-item>
          <commercial-item 
            v-for="(commercial, index) in showCommercials"
            :style="{ order: index }"
            :key="`commercial_${ commercial.id }`"
            :fold="foldedCommercials.includes(index)"
            @fold_commercial="foldCommercial(index)"
            v-bind="commercial"
          ></commercial-item>
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
        order: 'asc',
        feeds: [],
        feedPage: 1,
        feedEnd: false,
        commercials: [],
        foldedCommercials: [],
        commercialPage: 1,
        commercialEnd: false,
        openFilter: false,
        filterCategory: [],
        cycle: 4
      }
    },
    watch: {
      filterCategory(){
        this.resetFeeds()
      },
      order(){
        this.resetFeeds()
      },
      feeds(){
        if(this.commercialEnd)return
        if(this.commercials.length < Math.floor(this.feeds.length / this.cycle)){
          const limit = 5
          this.$store.commit('load_on')
          this.$requestApi({
            method: 'get',
            path: '/api/ads',
            params: { page: this.commercialPage, limit },
            success: (res) => {
              this.commercials = [...this.commercials, ...res.data]
              if(res.current_page === res.last_page){
                this.commercialEnd = true
              }
              this.commercialPage += 1
            },
            common: () => this.$store.commit('load_off')
          })
        }
      }
    },
    computed: {
      showCommercials(){
        const base = Math.floor(this.feeds.length / this.cycle)
        const length = this.feeds.length % this.cycle === 0 ? base - 1 : base;
        return [...this.commercials].splice(0, length)
      }
    },
    methods: {
      handleScroll(){
        const { scrollY, innerHeight } = window;
        const floor = document.documentElement.offsetHeight - scrollY - innerHeight;
        if(floor < 1 && !this.feedEnd){
          this.updateFeeds(data => {
            this.feeds = [ ...this.feeds, ...data ]
          })
        }
      },
      toggleFilter(next){ this.openFilter = next },      
      updateFilter(next){ this.filterCategory = next },
      foldCommercial(commercialIndex){
        const index = this.foldedCommercials.indexOf(commercialIndex)
        if(index === -1)
          this.foldedCommercials.push(commercialIndex)
        else 
          this.foldedCommercials.splice(index, 1)
      },
      updateFeeds(cb){
        const { filterCategory: category, order: ord, $store: store, feedPage: page } = this
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
              this.feedEnd = true
            }
            this.feedPage += 1
            cb(res.data)
          },
          common: () => store.commit('load_off')
        })
      },
      resetFeeds(){
        this.feedPage = 1
        this.feedEnd = false
        this.foldedCommercials = []
        this.updateFeeds(data => {
          this.feeds = data
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