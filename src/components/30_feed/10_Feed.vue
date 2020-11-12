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
          <feed-item v-for="feed in feeds" :key="feed.id"></feed-item>
          <commercial-item v-for="commercial in commercials" :key="commercial.id"></commercial-item>
        </section>
      </div>
    </div>
    <filter-modal v-if="open_filter" @close-filter="toggleFilter(false)"></filter-modal>
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
        feeds: [{ id: 'feed-01' }],
        commercials: [{ id: 'ad-01' }],
        open_filter: false
      }
    },
    methods: {
      toggleFilter(next){
        this.open_filter = next;
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import '@/styles/30_feed/10_Feed.scss';
</style>