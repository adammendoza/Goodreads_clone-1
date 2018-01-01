import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import { routes } from './routes';
import store from './store/store'

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes,
	store,
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

export const eventBus = new Vue();