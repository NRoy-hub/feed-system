<template>
  <article :class="['commercial_item', fold ? 'fold' : '']">
      <header>
        <span class="sponsored">sponsored</span>
        <span class="hidden_button" @click="toggleFold">{{ fold ? '펼치기' : '접기' }}</span>
      </header>
    <a href="#">
      <div class="commercial_container">
        <figure>
          <div class="image" :style="{ backgroundImage: `url(${ $imageUrl + img })` }"></div>
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
      index: Number,
      fold: Boolean
    },
    methods: {
      toggleFold(){
        const store = this.$store
        const folded = [...store.state.folded_commercials]
        const position = folded.indexOf(this.index)
        if(position === -1){
          folded.push(this.index)
        }else{
          folded.splice(position, 1)
        }
        store.commit('set_commercial_fold', { folded })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/30_feed/40_CommercialItem.scss';
</style>