<template>
  <header class="option_bar">
    <section class="option_control">
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
    </section>
    <section class="option_preview">
      <div 
        class="preview_item" 
        v-for="category in filterCategory" 
        :key="category.id"
        @click="removeSettingOption(category.id)"
      >
        <span>{{ category.name }}</span>
      </div>
    </section>
  </header>
</template>

<script>
  export default {
    name: 'OptionBar',
    computed: {
      order(){
        return this.$store.state.feed_order
      },
      filterCategory(){
        const { filter_category, category } = this.$store.state
        return category.filter(cat => filter_category.includes(cat.id))
      }
    },
    methods: {
      changeOrder(order){
        if(this.order === order)return
        this.$store.dispatch('change_feed_order', { order })
        localStorage.setItem('feeds_order', order)
      },
      removeSettingOption(id){
        const copied = [...this.$store.state.filter_category]
        if(copied.length === 1)return

        const index = copied.indexOf(id)
        copied.splice(index, 1)
        this.$store.dispatch('change_filter_category', { category: copied })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/30_feed/20_OptionBar.scss';
</style>