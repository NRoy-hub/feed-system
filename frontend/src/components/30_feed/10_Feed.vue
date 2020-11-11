<template>
  <main class="feed-page">
    <aside class="aside_bar">
      <div class="login_button">
        <span>로그인</span>
      </div>
    </aside>
    <div class="feed">
      <option-bar></option-bar>
      <section class="feed_list">
        <feed-item v-for="feed in feeds" :key="feed.id"></feed-item>
        <commercial-item v-for="commercial in commercials" :key="commercial.id"></commercial-item>
      </section>
    </div>
  </main>
</template>

<script>
  import OptionBar from './20_OptionBar'
  import FeedItem from './30_FeedItem'
  import CommercialItem from './40_CommercialItem'

  export default {
    name: "Feed",
    components: {
      'option-bar': OptionBar,
      'feed-item': FeedItem,
      'commercial-item': CommercialItem
    },
    data(){
      return {
        feeds: [{ id: 'feed-01' }],
        commercials: [{ id: 'ad-01' }]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>