import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.axios = axios;

import Scroller from '@/components/Scroller'
Vue.component('Scroller', Scroller);

import Loading from '@/components/Loading'
Vue.component('Loading', Loading);

Vue.filter('setWH', (url, arg) => {
  return url.replace(/w\.h/, arg);
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')