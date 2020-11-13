<template>
  <header class="option_bar">
    <div class="order_buttons">
      <div :class="['order', order === 'asc' ? 'selected' : '']" @click="changeOrder('asc')">
        <span>오름차순</span>
      </div>
      <div :class="['order', order === 'desc' ? 'selected' : '']" @click="changeOrder('desc')">
        <span>내림차순</span>
      </div>
    </div>
    <div class="filter_button" @click="$emit('open-filter')">
      <span>필터</span>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'OptionBar',
    props: {
      order: String
    },
    methods: {
      changeOrder(next){
        if(this.order === next)return
        this.$emit('update:order', next) 
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/30_feed/20_OptionBar.scss';
</style>