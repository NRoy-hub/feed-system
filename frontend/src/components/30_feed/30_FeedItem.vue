<template>
  <article class="feed_item">
      <header>
        <div class="category">{category_name}</div>
        <div class="content_id">content_id</div>
      </header>
      <div class="feed_container">
        <div>
          <span class="user_id">user_id</span>
          <span class="created_at">created_at</span>
        </div>
        <h2 class="title">TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle</h2>
        <router-link to="/detail">
          <span class="contents">contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents </span>
        </router-link>
      </div>
  </article>
</template>

<script>
  export default {
    name: 'FeedItem',
    props: {
      id: String,
      category_name: String,
      user_id: String,
      created_at: String,
      title: String,
      content: String
    }
  }
</script>

<style lang="scss" scoped>

</style>