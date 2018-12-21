import api from '@/api/live4admin'
// Remember to update resetState mutation
const state = {
  sub: {
    game: {}, // name and description
    loading: false,
  }
}

// getters
const getters = {
  game: state => state.sub.game,
  loading: state => state.sub.loading,
}

// actions
const actions = {
  getLiveGame ({ dispatch, commit, state }, dargs) {
    /**
     * Save the name and description of project 
     * about to be created in state
     */
    commit('loading');
    return api.getLive(dargs)
    .then(function (result) {
      var result = result.data;
      commit('setLive',result.result);
      
      commit('notLoading')
      var returnValue = result.result;
      return returnValue;
    })
  },
  refresh ({ dispatch, commit, state }, dargs) {
    /**
     * Save the name and description of project 
     * about to be created in state
     */
    return api.getLive(dargs)
    .then(function (result) {
      var result = result.data;
      commit('setLive',result.result);
      var returnValue = result.result;
      return returnValue;
    })
  },
  getLiveGamePlayer ({ dispatch, commit, state }, dargs) {
    /**
     * Save the name and description of project 
     * about to be created in state
     */
    commit('loading');
    return api.getLivePlayer(dargs)
    .then(function (result) {
      var result = result.data;
      commit('setLive',result.result);
      
      commit('notLoading')
      var returnValue = result.result;
      return returnValue;
    })
  },

  refreshPlayer ({ dispatch, commit, state }, dargs) {
    /**
     * Save the name and description of project 
     * about to be created in state
     */
    // commit('loading');
    return api.getLivePlayer(dargs)
    .then(function (result) {
      var result = result.data;
      commit('setLive',result.result);
      
      // commit('notLoading')
      var returnValue = result.result;
      return returnValue;
    })
  },

  updateGame ({ dispatch, commit, state }, dargs) {
    /**
     * Save the name and description of project 
     * about to be created in state
     */
    commit('loading');
    return api.creategame(dargs)
    .then(function (result) {
      var result = result.data;
      console.log(result);
      commit('notLoading');
      var returnValue = result;
      return returnValue;
    })
  },
  updatePicks({ dispatch, commit, state }, args) {
    
    return api.update(args)
    .then(function (result) {        
        return result.data.result;
    })
  },




  resetState ({ dispatch, commit, state }) {
    /**
     * Clear all the saved data
     */
    commit('resetState');
  },
}

// mutations
const mutations = {
  resetState (state) {
    state.sub = {
      game: {}, // name and description
      loading: false,
    };
  },
  loading(state){
      state.sub.loading = true;
  },
  notLoading(state){
    state.sub.loading = false;
  },
  setLive(state, game){
    state.sub.game = game;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
