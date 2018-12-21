/* eslint-disable */

import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import {API} from './config'

import Vuetify from 'vuetify'
 
Vue.use(Vuetify)

import './registerServiceWorker'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import router from './routers.js'


Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
