import Vue from 'vue';
import App from './App';
import Vuetify from 'vuetify';
import router from './router';

import 'vuetify/dist/vuetify.min.css';
 
Vue.use(Vuetify);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
