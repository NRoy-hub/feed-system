<template>
  <article class="feed_item">
    <header>
      <div class="category">category_name</div>
      <div class="content_id">content_id</div>
    </header>
    <div class="feed_container">
      <div>
        <span class="user_id">user_id</span>
        <span class="created_at">created_at</span>
      </div>
      <h2 class="title">TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle</h2>
      <router-link :to="detailUrl">
        <span class="contents">contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents </span>
      </router-link>
    </div>
  </article>
</template>

<script>
  import { url } from '@/router'
  export default {
    name: 'FeedItem',
    props: {
      id: String,
      category_name: String,
      user_id: String,
      created_at: String,
      title: String,
      content: String
    },
    computed: {
      detailUrl(){
        return url.detail(this.id)
      }
    },

  }
</script>

<style lang="scss" scoped>
  .feed_item{
    width: 100%;
    box-sizing: border-box;
    padding: 26px 4% 21px 4%;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
    background: white;

    header{
      padding-bottom: 11px;
      border-bottom: 1px solid $border_color;
      @include flex_box(row, space-between);
      font-size: 13px;
      .category{ color: $id_color; }
      .content_id{ color: $unused_color; }
    }

    .feed_container{
      margin-top: 15px;
      
      .user_id{
        font-size: 13px;
        color: $custom_green;
      }
      .created_at{
        display: none;
        margin-left: 12px;
        padding-left: 10px;
        border-left: 1px solid $border_color;
        font-size: 13px;
        color: #495057;
      }
    }

    .title{
      margin-top: 24px;
      @include ellipsis(100%);
      font-size: 18px;
      font-weight: bold;
      color: $title_color;
    }
    .contents{
      margin-top: 15px;
      display: block;
      @include ellipsis(100%);
      color: $contents_color;
    }

  }
</style>