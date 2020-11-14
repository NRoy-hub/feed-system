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
    <div class="open_buttons">
      <div class="open_button setting_button" @click="$emit('open-setting')">
        <span>옵션</span>
      </div>
      <div class="open_button filter_button" @click="$emit('open-filter')">
        <span>필터</span>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'OptionBar',
    computed: {
      order(){
        return this.$store.state.feed_order
      }
    },
    methods: {
      changeOrder(order){
        if(this.order === order)return
        this.$store.dispatch('change_feed_order', { order })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/30_feed/20_OptionBar.scss';
</style>