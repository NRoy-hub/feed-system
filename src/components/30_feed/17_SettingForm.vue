<template>
  <form class="setting_form" @submit.prevent="onSubmit">
    <header>
      <h3>옵션</h3>
    </header>
    <div class="options">
      <label class="custom_checkbox">
        글 내용 생략
        <input type="checkbox" name="contents_ellipsis" :checked="true">
        <span class="checkmark"></span>
      </label>
      <label class="custom_checkbox">
        무한 스크롤 사용
        <input type="checkbox" name="infinity_scroll" :checked="true">
        <span class="checkmark"></span>
      </label>
      <div class="custom_radio">
        <label>
          <input type="radio" name="limit" value="10" :checked="settings.limit === 10">
          <span class="radio_button">10개</span>
        </label>
        <label>
          <input type="radio" name="limit" value="20" :checked="settings.limit === 20">
          <span class="radio_button">20개</span>
        </label>
        <label>
          <input type="radio" name="limit" value="30" :checked="settings.limit === 30">
          <span class="radio_button">30개</span>
        </label>
      </div>
    </div>
    <button>설정하기</button>
    <div class="cancel_button" @click="$emit('close-filter')">
      <img src="@/assets/close.png" alt="clonse_icon">
    </div>
  </form>
</template>

<script>
  export default {
    name: 'SettingForm',
    computed: {
      settings(){
        return this.$store.state.settings
      }
    },
    methods: {
      onSubmit(e){
        const data = new FormData(e.target)
        const result = {}
        Object.keys(this.settings).map(name => {
          result[name] = data.get(name)
        })
        result.limit = parseInt(result.limit)
        this.$store.dispatch('update_settings', { settings: result })
        this.$emit('close-filter')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/30_feed/17_SettingForm.scss'
</style>