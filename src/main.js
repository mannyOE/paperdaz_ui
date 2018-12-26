/* eslint-disable */

import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import {API} from './config'
import store from './store'
import VeeValidate from 'vee-validate';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Vuetify from 'vuetify'
 
Vue.use(Vuetify)

import './registerServiceWorker'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/font-awesome.css'


import router from './routers.js'


Vue.use(VeeValidate);
Vue.use(ElementUI);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')
