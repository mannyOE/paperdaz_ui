import api from '@/api/live4admin'

// Remember to update resetState mutation
const state = {
  sub: {
    error: false,
    loading: false,
    user: {},
    ip: '',
  }
}

const getters = {
	error: state => state.sub.error,
	loading: state => state.sub.loading,
	session: state => state.sub.session,
	user: state => state.sub.user,
	ip: state => state.sub.ip,
}


const actions = {

  getIPAddress({ dispatch, commit, state }, args) {
    
    return api.getIp(args)
    .then(function (result) {        
        commit('setIp',result.data.result);
        commit('setUser', args);
          return result.data.result;
    })
  },

  updatePicks({ dispatch, commit, state }, args) {
    
    return api.update(args)
    .then(function (result) {        
        return result.data.result;
    })
  },


  setUser({ dispatch, commit, state }, args){
      debugger
    commit('setUser', args);
  },

  logout_user({ dispatch, commit, state }, args){
    commit('unSetUser');
    return true;
  }


}

const mutations = {
  loading (state) {
    state.sub.loading = true
  },
  notLoading (state) {
    state.sub.loading = false
  },

  setError (state, error) {
    state.sub.error = error
  },

  setUser (state, user) {
    state.sub.user.registered = true
  },
  unSetUser (state) {
  state.sub.user.first_name = '';
  state.sub.user.last_name = '';
  state.sub.user.registered = false;

},
  setSession (state, session) {
    state.sub.session = session
  },
   setIp (state, result) {
    state.sub.ip = result
  },

  clearErrors (state) {
    state.sub.loading = false;
    state.sub.error = false;
  },

  resetState (state) {
    state.sub = {
      error: false,
      loading: false,
      session: '',
      user: {},
      isAuth: false,
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