<template>
  <header class="topbar">
    <div :class="['topbar_wrapper', $route.path !== '/' ? 'can_back' : '']">
      <div class="info">[2020.11.13] 김태혁</div>
      <router-link :to="home_url" class="back" v-if="$route.path !== '/'">
        <img src="@/assets/back.png" alt="back_icon">
      </router-link>
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
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/20_topbar/10_Topbar.scss';
</style>