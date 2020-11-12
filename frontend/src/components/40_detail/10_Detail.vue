<template>
  <main class="detail-page page">
    <div class="detail wrapper">
      <section class="feed">
        <h2 class="title">Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title </h2>
        <p class="contents">contents contents contents contents contents contents contents contents contents contents contents </p>
        <div class="created_at">YYYY-MM-dd</div>
      </section>
      <section class="comments">
        <header>
          <div class="result">
            답변<span class="result_count">2</span>
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
  .detail-page{
    box-sizing: border-box;
    padding: 20px 4%;

    .detail{
      width: 100%;
      @include flex_box(column); 

      .feed{
        padding: 20px 0;
        border-top: 1px solid $custom_green;
        border-bottom: 1px solid $custom_green;

        .title{
          padding-right: 23px;
          word-break: break-all;
          line-height: 28px;
          font-size: 18px;
          font-weight: bold;
          color: $title_color;
        }
        .contents{
          margin-top: 5px;
          line-height: 25px;
          color: $contents_color;
        }
        .created_at{
          margin-top: 15px;
          line-height: 20px;
          font-size: 13px;
          color: $unused_color;
        }
      }

      .comments{
        padding-top: 30px;

        header{
          padding-bottom: 10px;
          .result{
            color: #495057;
            line-height: 25px;
          }
          .result_count{ 
            margin-left: 9px;
            color: $custom_green; 
          }
        }
      }
    }

  }
</style>