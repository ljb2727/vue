import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
export const eventBus = new Vue({
  methods: {
    userWasEdited(date) {
      this.$emit('userWasEdited',date)
    }
  }
})
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
