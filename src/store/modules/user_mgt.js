/* eslint-disable */
import api from '@/api/userMgt';

// Remember to update resetState mutation
const state = {
  sub: {
    session: '',
    user: [],
    isLoggedIn: false,
  }
}

const getters = {
	session: state => state.sub.session,
  user: state => state.sub.user,
  admins: state => state.sub.admins,
  isLoggedIn: state => state.sub.isLoggedIn,
}


const actions = {

  updateUser({ dispatch, commit, state }, args) {

    return api.update(args)
    .then(function (result) {

          return result;
    })
  },

  

  setUser({ dispatch, commit, state }, args){
  	commit('setSession', args.token);
    commit('setUser', args.user);
    commit('setIsAuth', true);
  },

  logout_user({ dispatch, commit, state }, args){
    commit('resetState');
  }


}

const mutations = {
  
  setUser (state, user) {
    user.password = '';
    state.sub.user = user
  },
  setSession (state, session) {
    state.sub.session = session
  },
  
  setIsAuth (state, auth) {
    state.sub.isLoggedIn = auth
  },

  clearErrors (state) {
    
  },

  resetState (state) {
    state.sub = {
      session: '',
      user: [],
      isLoggedIn: false,
    };
  },

 
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}