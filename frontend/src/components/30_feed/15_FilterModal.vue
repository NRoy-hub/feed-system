<template>
  <div class="filter_modal">
    <form class="modal_form">
      <header>
        <h3>필터</h3>
      </header>
      <ul class="categories">
        <li>
          <input type="checkbox">
          <span>category_name</span>
        </li>
        <li>
          <input type="checkbox">
          <span>category_name</span>
        </li>
        <li>
          <input type="checkbox">
          <span>category_name</span>
        </li>
      </ul>
      <button>저장하기</button>
      <cancel-button></cancel-button>
    </form>
  </div>
</template>

<script>
  import CancelButton from '@/components/10_app/20_CancelButton'
  export default {
    name: 'FilterModal',
    components: {
      'cancel-button': CancelButton
    }
  }
</script>

<style lang="scss" scoped>

</style>