<template>
  <article class="comment">
    <header>
      <div class="user_name">reply_user_name</div>
    </header>
    <p class="contents">contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents </p>
    <div class="created_at">YYYY-MM-dd</div>
  </article>
</template>

<script>
  export default {
    name: 'CommentItem',
    props: {
      id: String,
      user_id: String,
      user_name: String,
      contents: String,
      created_at: String
    }
  }
</script>

<style lang="scss" scoped>
  .comment{
    padding: 20px 0;
    border: 1px solid $border_color;
    border-width: 1px 0 1px;
    &:not(:first-child){
      margin-top: 30px;
    }

    header{
      padding-bottom: 10px;
      border-bottom: 1px solid $border_color;
      line-height: 25px;
      color: $name_color;
    }
    .contents{
      margin-top: 15px;
      line-height: 25px;
      color: $contents_color;
    }
    .created_at{
      margin-top: 25px;
      line-height: 20px;
      color: $unused_color;
      font-size: 13px;
    }
  }
</style>