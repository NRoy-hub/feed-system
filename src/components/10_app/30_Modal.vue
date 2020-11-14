<template>
  <div class="modal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data(){
    return{
      preScroll: 0
    }
  },
  methods: {
    preventScroll(){
      window.scrollTo(0, this.preScroll)
    }
  },
  created(){
    this.preScroll = window.scrollY
    document.addEventListener('scroll', this.preventScroll)
  },
  destroyed(){
    document.removeEventListener('scroll', this.preventScroll)
  }
}
</script>

<style lang="scss" scoped>
  .modal{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    @include flex_box(row, center, center);
  }
</style>