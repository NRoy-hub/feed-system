<template>
  <main class="detail-page page">
    <div class="detail_wrapper wrapper" >
      <section class="feed">
        <h2 class="title">{{ detail.title || '' }}</h2>
        <p class="contents">{{ detail.contents || '' }}</p>
        <div class="created_at">{{ detail.created_at ? $formatDate(detail.created_at) : '' }}</div>
      </section>
      <section class="replys">
        <header>
          <div class="result">
            답변
            <span class="result_count">{{ detail.reply ? detail.reply.length : 0 }}</span>
          </div>
        </header>
        <div class="replys_list">
          <reply-item v-for="item in detail.reply" :key="item.id" v-bind="item"></reply-item>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
  import ReplyItem from './20_ReplyItem'
  export default {
    name: 'Detail',
    components: {
      'reply-item': ReplyItem
    },
    data(){
      return {
        detail: {}
      }
    },
    created(){
      window.scrollTo(0, 0)
      this.$store.commit('load_on')
      this.$requestApi({
        method: 'get',
        path: '/api/view',
        params: { id: this.$route.params.id },
        success: ({ data }) => {
          this.detail = data
        },
        common: () => this.$store.commit('load_off')
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/40_detail/10_Detail.scss';
</style>