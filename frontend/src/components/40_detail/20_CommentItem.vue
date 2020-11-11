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

</style>