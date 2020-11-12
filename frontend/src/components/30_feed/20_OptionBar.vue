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
    <div class="filter_button">
      <span>필터</span>
    </div>
  </header>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .option_bar{
    height: 44px;
    padding: 0 4%;
    border-bottom: 1px solid $border_color;
    @include flex-box(row, space-between, flex-start);
    font-size: 13px;
    color: $unused_color;

    .order_buttons{
      margin-top: 16px;
      display: flex;

      .order{
        @include flex-box(row, flex-start, center);
        margin-right: 13px;
        cursor: pointer;
        &::before{
          @include size(6px, 6px);
          margin-right: 5px;
          display: inline-block;
          background: $border_color;
          border-radius: 3px;
          content: "";
        }
        &.selected{
          color: #495057;
          cursor: default;
          &::before{ background-color: $custom_green; }
        }
      }
    }

    .filter_button{
      margin-top: 10px;
      border: 1px solid $border_color;
      border-radius: 3px;
      padding: 5px 14px 3px 12px;
      cursor: pointer;
    }
  }
</style>