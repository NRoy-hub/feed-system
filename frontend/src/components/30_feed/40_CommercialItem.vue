<template>
  <article class="commercial_item">
    <a href="#">
      <header>
        <span class="sponsored">sponsored</span>
      </header>
      <div class="commercial_container">
        <figure>
          <img src="" alt="commercial_image">
        </figure>
        <div class="content_container">
          <div class="title">Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title</div>
          <p class="contents">content content content content content content content content content content content content content content content content content content content content content content content </p>
      
        </div>
      </div>
    </a>
  </article>
</template>

<script>
  export default {
    name: 'CommercialItem',
    props: {
      id: String
    }
  }
</script>

<style lang="scss" scoped>
  .commercial_item{
    padding: 25px 15px 21px;
    
    .sponsored{
      font-size: 13px;
      color: $unused_color;
    }
    .commercial_container{
      figure{
        position: relative;
        margin-top: 17.5px;
        width: 100%;
        padding-bottom: 52%;
        background: #f4f5f7;

        img{ 
          position: absolute;
          @include size(100%, 100%);
          object-fit: cover;
        }
      }
      .title{
        margin-top: 23.5px;
        line-height: 1.56;
        font-size: 18px;
        color: $title_color;
        font-weight: bold;
        @include ellipsis(100%);
      }
      .contents{
        margin-top: 5px;
        line-height: 1.56;
        color: $contents_color; 
        @include ellipsis(100%);
      }
    }
  }
</style>