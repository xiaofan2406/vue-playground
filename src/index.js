import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import './index.css';
import App from './app/App';
import store from './store';
import router from './router';


Vue.use(Element);

// keep vue-router and vuex store in sync
sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
