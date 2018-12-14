import Vue from 'vue'
import App from './App.vue'

import './registerServiceWorker'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from 'vue-router'

import { routers } from './routers.js'

Vue.use(VueRouter)

const router= new VueRouter({
	routes:routers
});

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
