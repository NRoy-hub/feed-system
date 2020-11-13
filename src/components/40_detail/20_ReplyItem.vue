<template>
  <article class="reply">
    <header>
      <div class="user_name">{{ user.name }}</div>
    </header>
    <p class="contents">{{ contents }}</p>
    <div class="created_at">{{ $formatDate(created_at) }}</div>
  </article>
</template>

<script>
  export default {
    name: 'ReplyItem',
    props: {
      user: Object,
      contents: String,
      created_at: String
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/40_detail/20_ReplyItem.scss';
</style>