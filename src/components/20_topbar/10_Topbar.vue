<template>
  <header class="topbar">
    <div :class="['topbar_wrapper', $route.path !== '/' ? 'can_back' : '']">
      <div class="info">[2020.11.13] 김태혁</div>
      <div class="back" v-if="$route.path !== '/'" @click="goBack">
        <img src="@/assets/back.png" alt="back_icon">
      </div>
    </div>
  </header>
</template>

<script>
  import { url } from '@/router'
  export default {
    name: 'Topbar',
    computed: {
      home_url(){
        return url.feed;
      }
    },
    methods: {
      goBack(){
        const stack = this.$store.state.history
        if(stack[stack.length - 2] === '/')
          this.$router.go(-1)
        else
          this.$router.replace('/')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/20_topbar/10_Topbar.scss';
</style>