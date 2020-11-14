<template>
  <form class="modal_form" @submit.prevent="onSubmit">
    <header>
      <h3>필터</h3>
    </header>
    <div class="categories">
      <label class="custom_checkbox" v-for="category in categories" :key="category.id">
        {{ category.name }}
        <input type="checkbox" :name="category.id" :checked="filterCategory.includes(category.id)">
        <span class="checkmark"></span>
      </label>
    </div>
    <button>저장하기</button>
    <div class="cancel_button" @click="$emit('close-filter')">
      <img src="@/assets/close.png" alt="clonse_icon">
    </div>
  </form>
</template>

<script>
  export default {
    name: 'FilterModal',
    computed: {
      categories(){
        return this.$store.state.category
      },
      filterCategory(){
        return this.$store.state.filter_category
      }
    },
    methods: {
      onSubmit(e){
        const result = []
        const data = new FormData(e.target)
        this.categories.forEach(({ id }) => data.get(id) && result.push(id))
        if(result.length === 0)return alert('카테고리를 선택하지 않았습니다.')
        
        this.$store.dispatch('change_filter_category', { category: result })
        this.$emit('close-filter')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/30_feed/15_FilterForm.scss';
</style>