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
    <filter-modal></filter-modal>
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
        commercials: [{ id: 'ad-01' }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .feed-page{
    width: 100%;
    display: flex;

    .aside_bar{
      padding-right: 40px;
      display: none;

      .login_button{
        @include size(235px, 60px);
        border-radius: 5px;
        background-color: $custom_green;
        @include flex-box(row, center, center);
        color: white;
        font-size: 22px;
        font-weight: bold;
        cursor: pointer;
      }
    }

    .feed{
      flex: 1;
      .feed_list{
        @include flex-box(column);
      }
    }
  }
</style>