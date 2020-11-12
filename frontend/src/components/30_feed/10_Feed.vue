<template>
  <main class="feed-page page">
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
    <filter-modal v-if="on_filter"></filter-modal>
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
        on_filter: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .feed-page{
    min-height: calc(100vh - 45px);
    display: flex;

    .aside_bar{
      padding-right: 40px;
      display: none;

      .login_button{
        @include size(235px, 60px);
        border-radius: 5px;
        background-color: $custom_green;
        @include flex_box(row, center, center);
        color: white;
        font-size: 22px;
        font-weight: bold;
        cursor: pointer;
      }
    }

    .feed{
      width: 100%;
      flex: 1;
      @include flex_box(column);
      .feed_list{
        flex: 1;
        @include flex_box(column);
        gap: 10px;
        padding-bottom: 10px;
        background: #f4f5f7;

        & > *{
          box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
          background: white;
        }
      }
    }
  }
</style>