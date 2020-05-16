import Vue from 'vue'
import Vuex from 'vuex';
import Router from 'vue-router'
import Store from './store'

import App from './App.vue'

Vue.use(Vuex);
Vue.config.productionTip = false

new Vue({
  Store,
  Router,
  render: h => h(App),
}).$mount('#app')
