<template>
  <form class="modal_form" @submit.prevent="onSubmit">
    <header>
      <h3>필터</h3>
    </header>
    <div class="categories">
      <label class="custom_checkbox" v-for="category in categories" :key="category.id">
        {{ category.name }}
        <input type="checkbox" :name="category.id" :checked="filterCategory.includes(category.id)" @change="onChange">
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
    data(){
      return{
        filterCategory: [ ...this.$store.state.filter_category]
      }
    },
    computed: {
      categories(){
        return this.$store.state.category
      }
    },
    methods: {
      onSubmit(){
        const category = this.filterCategory
        if(category.length === 0)return alert('카테고리가 선택되지 않았습니다')
        this.$store.dispatch('change_filter_category', { category })
        this.$emit('close-filter')
        // * save to local storage
        localStorage.setItem('filter_category', category.toString())
      },
      onChange(e){
        const { name } = e.target
        const id = parseInt(name)
          const index = this.filterCategory.indexOf(id)
        if(index === -1)
          this.filterCategory.push(id)
        else
          this.filterCategory.splice(index, 1)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/30_feed/15_FilterForm.scss';
</style>