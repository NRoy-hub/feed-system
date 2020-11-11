import Vue from 'vue'
import App from './components/10_app/10_App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
