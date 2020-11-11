<template>
  <main class="detail-page">
    <div class="detail">
      <section class="feed">
        <h2 class="title">Title TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle</h2>
        <p class="contents">contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents </p>
        <div class="created_at">YYYY-MM-dd</div>
      </section>
      <section class="comments">
        <header>
          <div class="result">
            답변 <span class="result_count">2</span>
          </div>
        </header>
        <div class="comments_list">
          <comment-item v-for="comment in comments" :key="comment.id"></comment-item>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
  import CommentItem from './20_CommentItem'
  export default {
    name: 'Detail',
    components: {
      'comment-item': CommentItem
    },
    data(){
      return {
        comments: [
          { id: 'commend_01' },
          { id: 'commend_02' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>