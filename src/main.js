import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAlertify from 'vue-alertify';
 

Vue.config.productionTip = false;
Vue.use(VueAlertify);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
