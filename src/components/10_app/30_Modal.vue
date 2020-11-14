<template>
  <div class="modal">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .modal{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    @include flex_box(row, center, center);
  }
</style>