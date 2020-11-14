<template>
  <form class="setting_form" @submit.prevent="onSubmit">
    <header>
      <h3>옵션</h3>
    </header>
    <div class="options">
      <label class="custom_checkbox" v-for="option in settings" :key="option.name">
        {{ option.title }}
        <input type="checkbox" :name="option.name" :checked="option.checked">
        <span class="checkmark"></span>
      </label>
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
        return this.$store.getters.settings_array
      }
    },
    methods: {
      onSubmit(e){
        const data = new FormData(e.target)
        const result = {}
        this.settings.forEach(({ name, title }) => {
          result[name] = { title: title, checked: !!data.get(name) }
        })
        this.$store.dispatch('update_settings', { settings: result })
        this.$emit('close-filter')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/30_feed/17_SettingForm.scss'
</style>