<template>
  <article :class="['commercial_item', fold ? 'fold' : '']">
      <header>
        <span class="sponsored">sponsored</span>
        <span class="hidden_button" @click="toggleFold">{{ fold ? '펼치기' : '접기' }}</span>
      </header>
    <a href="#">
      <div class="commercial_container">
        <figure>
          <img :src="$imageUrl + img" alt="commercial_image">
        </figure>
        <div class="content_container">
          <div class="title">{{ title }}</div>
          <p class="contents">{{ contents }}</p>
        </div>
      </div>
    </a>
  </article>
</template>

<script>
  export default {
    name: 'CommercialItem',
    props: {
      id: Number,
      title: String,
      contents: String,
      created_at: String,
      img: String,
      fold: Boolean
    },
    methods: {
      toggleFold(){
        this.$emit('fold_commercial')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/30_feed/40_CommercialItem.scss';
</style>