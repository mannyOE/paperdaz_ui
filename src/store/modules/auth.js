import api from '@/api/auth';

// Remember to update resetState mutation
const state = {
  sub: {
    error: false,
    userError: false,
    redirectError: false,
    autherror: false,
    autherrorMsg: 'Email or password is incorrect',
    loading: false,
    session: '',
    isAuth: false,
    regSuccess: false,
    user: [],
  }
}

// getters
const getters = {
  error: state => state.sub.error,
  userError: state => state.sub.userError,
  autherror: state => state.sub.autherror,
  autherrorMsg: state => state.sub.autherrorMsg,
  redirectError: state => state.sub.redirectError,
  loading: state => state.sub.loading,
  session: state => state.sub.session,
  isAuth: state => state.sub.isAuth,
  regSuccess: state => state.sub.regSuccess,
  user: state => state.sub.user,
}

// actions
const actions = {
  login ({ dispatch, commit, state }, args) {
    commit('loading');
    return api.login(args)
    .then(function (result) {
      
      commit('notLoading');
      if(result.error === undefined){
        var result = result.data;
      if(result.status === true){
        
        dispatch('user_mgt/setUser', result, {root: true})
        .then(function (status) {
          // Logged out
          // console.log(result.data);
        });
      }else{
        commit('isAuthError');
        commit('autherrorMsg', result.message);
      }
      var returnValue = result;
      return returnValue;
      }else{
        debugger;
        console.log(result.message);
        commit('isAuthError');
        commit('autherrorMsg', result.message);
        result.status = false;
        return result;
      }
      
    })
  },

  signup ({ dispatch, commit, state }, args) {
    commit('loading');
    return api.signup(args)
    .then(function (result) {
      commit('notLoading');
      if(result.data.status === true){
        commit('regSuccess');
      }
      return result.data;
    })
  },

  resend_confirmation ({ dispatch, commit, state }, args) {

    return api.resend_confirmation(args)
    .then(function (result) {

          return result;
    })
  },
  confirm_email({ dispatch, commit, state }, args) {
    commit('loading');
    return api.confirm_email(args)
    .then(function (result) {
      result = result.data;
      commit('notLoading');
        if(!result.status){
          commit('autherrorMsg', result.message);
        }
          return result;
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

  setUser (state, user) {
    user.user_password = '';
    state.sub.user = user
  },
  setSession (state, session) {
    state.sub.seesions = session
  },
  setIsAuth (state, auth) {
    state.sub.isAuth = auth
  },

  clearErrors (state) {
    state.sub.autherror = false;
    state.sub.redirectError = false;
    state.sub.loading = false;
    state.sub.error = false;
  },

  resetState (state) {
    state.sub = {
      error: false,
      userError: false,
      redirectError: false,
      autherror: false,
      autherrorMsg: 'Email or password is incorrect',
      loading: false,
      session: '',
      isAuth: false,
      user: [],
    };
  },

  notVerified (state) {
    state.sub.error = true;
    state.sub.autherrorMsg = "Please confirm you account from your email"
  },
  autherrorMsg(state, msg){
    debugger;
    state.sub.autherrorMsg = msg;
  },
  isAuthError (state) {
    state.sub.autherror = true;
  },

  notAuthError (state) {
    state.sub.autherror = false;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
