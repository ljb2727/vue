import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

import GlobalComponent from './components/global-component.vue'

//Vue.component('불러질 이름', 등록한 컴포넌트 이름)
Vue.component('global', GlobalComponent)
/*
임포트 시킨 컴포넌트의 네임
Vue.component(GlobalComponent.name, GlobalComponent)
*/

import testG from './components/test_g'
//불러온 컴포넌트의 이름이 생성명이 된다
Vue.component(testG.name, testG)

new Vue({
  render: h => h(App),
}).$mount('#app')
