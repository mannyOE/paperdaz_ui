/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';


import auth from './modules/auth';
import user_mgt from './modules/user_mgt';
import persistent from './modules/persistent';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: 'pioneerState',
      getState: key => Cookies.getJSON(key),
      setState: (key, state) => Cookies.set(key, state, { expires: 14 }),
      paths: ['user_mgt','persistent']
    })
  ],
  modules: {
    auth,
    user_mgt,
    persistent
  }
});
