<template>
  <header class="topbar">
    <div class="info">[2020.11.13] 김태혁</div>
  </header>
</template>

<script>
  export default {
    name: 'Topbar'
  }
</script>

<style lang="scss" scoped>
  .topbar{
    width: 100%;
    height: 45px;
    padding: 0 15px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.07);

    .info{
      padding-top: 16px;
      line-height: 25px;
      color: #212529;
    }
  }
</style>