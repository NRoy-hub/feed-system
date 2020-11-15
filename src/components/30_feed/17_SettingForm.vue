<template>
  <form class="setting_form" @submit.prevent="onSubmit">
    <header>
      <h3>옵션</h3>
    </header>
    <div class="options">
      <label class="custom_checkbox">
        글 내용 생략
        <input type="checkbox" name="contents_ellipsis" :checked="settings.contents_ellipsis" @change="onChangeCheckbox">
        <span class="checkmark"></span>
      </label>

      <div class="custom_radio">
        <div class="head">불러오는 개수</div>
        <label>
          <input type="radio" name="limit" value="10" :checked="settings.limit === 10" @change="onChangeRadio">
          <span class="radio_button">10개</span>
        </label>
        <label>
          <input type="radio" name="limit" value="20" :checked="settings.limit === 20" @change="onChangeRadio">
          <span class="radio_button">20개</span>
        </label>
        <label>
          <input type="radio" name="limit" value="30" :checked="settings.limit === 30" @change="onChangeRadio">
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
    data(){
      return{
        settings: { ...this.$store.state.settings }
      }
    },
    methods: {
      onSubmit(){
        this.$store.dispatch('update_settings', { settings: this.settings })
        this.$emit('close-filter')
      },
      onChangeCheckbox(e){
        const { name, checked } = e.target
        this.settings[name] = checked
      },
      onChangeRadio(e){
        const { name, value } = e.target
        this.settings[name] = parseInt(value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/30_feed/17_SettingForm.scss'
</style>