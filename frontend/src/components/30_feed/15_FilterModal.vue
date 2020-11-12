<template>
  <div class="filter_modal">
    <form class="modal_form">
      <header>
        <h3>필터</h3>
      </header>
      <div class="categories">
        <label class="custom_checkbox">category_name
          <input type="checkbox" checked>
          <span class="checkmark"></span>
        </label>
        <label class="custom_checkbox">category_name
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <label class="custom_checkbox">category_name
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
      </div>
      <button>저장하기</button>
      <div class="cancel_button">
        <img src="@/assets/close.png" alt="clonse_icon">
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'FilterModal'
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/30_feed/15_FilterModal.scss';
</style>