import api from '@/api/games'
// Remember to update resetState mutation
const state = {
  sub: {
    game: {}, // name and description
    loading: false,
    type: '',
  }
}

// getters
const getters = {
  game: state => state.sub.game,
  loading: state => state.sub.loading,
  api: state => state.sub.api,
  type: state => state.sub.type,
}

// actions
const actions = {
  setGameInitial ({ dispatch, commit, state }, dargs) {
    /**
     * Save the name and description of project 
     * about to be created in state
     */
    // commit('loading');
    return api.creategame(dargs)
    .then(function (result) {
      var result = result.data;
      console.log(result);
      // commit('notLoading');
      if(result.status === true){
        commit('resetState');
      }else{
        console.log('error');
      }
      debugger;
      var returnValue = result;
      return returnValue;
    })
  },

  updateGame ({ dispatch, commit, state }, dargs) {
    /**
     * Save the name and description of project 
     * about to be created in state
     */
    // commit('loading');
    return api.update(dargs)
    .then(function (result) {
      var result = result.data;
      console.log(result);
      // commit('notLoading');
      var returnValue = result;
      return returnValue;
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
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
