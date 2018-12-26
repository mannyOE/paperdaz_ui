/* eslint-disable */
import api from '@/api/auth';

// Remember to update resetState mutation
const state = {
  sub: {
    error: false,
    errorMsg: 'Email or password is incorrect',
    loading: false,
    user: {}
  }
}

// getters
const getters = {
  error: state => state.sub.error,
  errorMsg: state => state.sub.autherrorMsg,
  loading: state => state.sub.loading,
  user: state => state.sub.user,
}

// actions
const actions = {
  login ({ dispatch, commit, state }, args) {
    commit('loading');
    return api.login(args)
    .then(function (result) {
      commit('notLoading');
      // save user's permission
        dispatch('user_mgt/setUser', result.data.result, {root: true})
        .then(function (status) {
          // User is set
        });
      return result;
    })
    .catch((error)=>{
      commit('notLoading');
      commit('setErrorMsg', error.message);
      commit('setError',error.error);
      throw error;
    })
  },

  signup ({ dispatch, commit, state }, args) {
    commit('loading');
    return api.signup(args)
    .then(function (result) {
      commit('notLoading');
      return result;
    })
    .catch((error)=>{
      commit('notLoading');
      commit('setErrorMsg', error.message);
      commit('setError',error.error);
      throw error;
    })
  },

  resend_confirmation ({ dispatch, commit, state }, args) {

    return api.resend_confirmation(args)
    .then(function (result) {
      
    })
    .catch(error=>{

    })
  },

  

  confirm_email({ dispatch, commit, state }, args) {
    commit('loading');
    return api.confirm_email(args)
    .then(function (result) {
      
    })
    .catch(error=>{
      
    })
  },

  
  clearErrors ({ commit, state }) {
    commit('clearErrors');
  },
  resetState ({ commit, state }) {
    commit('resetState');
  },
}

// mutations
const mutations = {
  loading (state) {
    state.sub.loading = true
  },
  regSuccess (state) {
    state.sub.regSuccess = true
  },
  notLoading (state) {
    state.sub.loading = false
  },

  setError (state, error) {
    state.sub.error = error
  },
  setErrorMsg (state, error) {
    state.sub.errorMsg = error
  },


  clearErrors (state) {
    state.sub.loading = false;
    state.sub.error = false;
    state.sub.errorMsg = '';
  },

  resetState (state) {
    state.sub = {
      error: false,
      errorMsg: false,
      loading: false,
    };
  },

  notVerified (state) {
    state.sub.error = true;
    state.sub.autherrorMsg = "Please confirm you account from your email"
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
