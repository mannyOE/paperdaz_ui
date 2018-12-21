import api from '@/api/userMgt';

// Remember to update resetState mutation
const state = {
  sub: {
    error: false,
    loading: false,
    session: '',
    user: [],
    isAuth: false,
    admins: [],
    perms: {},
    groups: [],
    unconfirmed: [],
  }
}

const getters = {
	error: state => state.sub.error,
	loading: state => state.sub.loading,
	session: state => state.sub.session,
  user: state => state.sub.user,
  admins: state => state.sub.admins,
  isAuth: state => state.sub.isAuth,
  perms: state => state.sub.perms,
  groups: state => state.sub.groups,
  unconfirmed: state => state.sub.unconfirmed,
}


const actions = {

  updateUser({ dispatch, commit, state }, args) {

    return api.update(args)
    .then(function (result) {

          return result;
    })
  },

  fetchAdmin({ dispatch, commit, state }, args) {

    commit('loading');
    return api.getAdmins(args)
    .then(function (result) {
      result = result.data;
      console.log(result);
      commit('notLoading');

      if(result.status === true){
        commit('setAdmins', result.result)
      }else{
        commit('isAuthError');
        commit('autherrorMsg', result.message);
      }
      var returnValue = result;
      return returnValue;
    })
  },

  fetchUnconfirmed({ dispatch, commit, state }, args) {

    commit('loading');
    return api.getUncAdmins(args)
    .then(function (result) {
      var result = result.data;
      debugger
      console.log(result);
      commit('notLoading');

      if(result.status === true){
        commit('setUnconfirmed', result.result)
      }else{
        commit('isAuthError');
        commit('autherrorMsg', result.message);
      }
      var returnValue = result;
      return returnValue;
    })
  },
  confirmAccount({ dispatch, commit, state }, args) {

    commit('loading');
    return api.confirmAdmin(args)
    .then(function (result) {
      var result = result.data;
      commit('notLoading');

      if(result.status === true){
      }else{
        commit('isAuthError');
        commit('autherrorMsg', result.message);
      }
      var returnValue = result;
      return returnValue;
    })
  },

  fetchGroups({ dispatch, commit, state }, args) {

    return api.getGroups(args)
    .then(function (result) {
      var result = result.data;
      
      if(result.status === true){
        commit('setGroups', result.result)
      }else{
        commit('isAuthError');
        commit('autherrorMsg', result.message);
      }
      var returnValue = result;
      return returnValue;
    })
  },

  makeGroup({ dispatch, commit, state }, args) {

    commit('loading');
    debugger
    return api.createGroups(args)
    .then(function (result) {
      var result = result.data;
      commit('notLoading');
      
      if(result.status === true){
        
      }else{
        commit('isAuthError');
        commit('autherrorMsg', result.message);
      }
      var returnValue = result;
      return returnValue;
    })
  },

  accountBlock({ dispatch, commit, state }, args) {

    commit('loading');
    return api.blockAccount(args)
    .then(function (result) {
      var result = result.data;
      console.log(result);
      commit('notLoading');
      if(result.status === true){
        
      }else{
        commit('isAuthError');
        commit('autherrorMsg', result.message);
      }
      var returnValue = result;
      return returnValue;
    })
  },

  fetchPerms({ dispatch, commit, state }, args) {

    commit('loading');
    return api.fetchPermissions(args)
    .then(function (result) {
      var result = result.data;
      console.log(result);
      commit('notLoading');
      if(result.status === true){
        if(result.perms){
          commit('setPerms', result.perms);
        }
      }else{
        commit('isAuthError');
        commit('autherrorMsg', result.message);
      }
      var returnValue = result;
      return returnValue;
    })
  },

  refreP({ dispatch, commit, state }, args) {

    return api.fetchPermissions(args)
    .then(function (result) {
      
      var result = result.data;
      if(result.status === true){
          commit('setUser', result.result);
      }else{
        commit('isAuthError');
        commit('autherrorMsg', result.message);
      }
      var returnValue = result;
      return returnValue;
    })
  },


  updatePerm({ dispatch, commit, state }, args) {

    commit('loading');
    return api.updateP(args)
    .then(function (result) {
      var result = result.data;
      console.log(result);
      commit('notLoading');
      if(result.status === true){
        
      }else{
        commit('isAuthError');
        commit('autherrorMsg', result.message);
      }
      var returnValue = result;
      return returnValue;
    })
  },


  setUser({ dispatch, commit, state }, args){
  	commit('setSession', args.result._id);
    commit('setUser', args.result);
    commit('setIsAuth', true);
  },

  logout_user({ dispatch, commit, state }, args){
    commit('resetState');
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

  setPerms (state, perms) {
    state.sub.perms = perms
  },

  setGroups (state, groups) {
    state.sub.groups = groups
  },
  setUnconfirmed (state, groups) {
    debugger;
    state.sub.unconfirmed = groups
  },

  setUser (state, user) {
    
    user.password = '';
    state.sub.user = user
  },
  setSession (state, session) {
    state.sub.session = session
  },
  setAdmins (state, admins) {
    debugger
    state.sub.admins = admins
  },
   setIsAuth (state, auth) {
    state.sub.isAuth = auth
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
      user: [],
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