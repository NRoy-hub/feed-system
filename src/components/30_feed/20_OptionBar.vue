<template>
  <header class="option_bar">
    <div class="order_buttons">
      <div class="order selected">
        <span>오름차순</span>
      </div>
      <div class="order">
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
    name: 'OptionBar'
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/30_feed/20_OptionBar.scss';
</style>