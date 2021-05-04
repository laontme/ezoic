import Vue from 'vue';
import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css';
import 'boxicons/css/boxicons.min.css';

import App from '@/components/App.vue';

import { store } from '@/store';

Vue.use(Vuetify);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  vuetify: new Vuetify(),
  store,
});
