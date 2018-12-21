import api from '@/api/games';

// Remember to update resetState mutation
const state = {
  sub: {
    error: false,
    loading: false,
    games: [],
    live_game: {},
    mini_games: [],
    all_games: [],
    group_games:  [],
  }
}

// getters
const getters = {
  loading: state => state.sub.loading,
  games: state => state.sub.games,
  mini_games: state => state.sub.mini_games,
  live_game: state => state.sub.live_game,
  all_games: state => state.sub.all_games,
  group_games: state => state.sub.group_games,
}

// actions
const actions = {
  adminGames ({ dispatch, commit, state }, args) {
    commit('loading');
    return api.gamesById(args)
    .then(function (result) {
      var result = result.data;
      console.log(result);
      commit('notLoading');
      if(result.status === true){
        commit('setGames', result.result)
      }else{
        commit('isAuthError');
        commit('autherrorMsg', result.message);
      }
      var returnValue = result;
      return returnValue;
    })
  },
  groupGames({ dispatch, commit, state }, args) {
    commit('loading');
    return api.games4Group(args)
    .then(function (result) {
      var result = result.data;
      console.log(result);
      commit('notLoading');
      if(result.status === true){
        commit('setGroupGames', result.result)
      }else{
        commit('isAuthError');
        commit('autherrorMsg', result.message);
      }
      var returnValue = result;
      return returnValue;
    })
  },
  allgames ({ dispatch, commit, state }, args) {
    commit('loading');
    return api.allgames(args)
    .then(function (result) {
      var result = result.data;
      console.log(result);
      commit('notLoading');
      if(result.status === true){
        debugger;
        commit('setAllGames', result.result)
      }else{
        commit('isAuthError');
        commit('autherrorMsg', result.message);
      }
      var returnValue = result;
      return returnValue;
    })
  },


  deleteGames ({ dispatch, commit, state }, args) {
    commit('loading');
    return api.deleteGame(args)
    .then(function (result) {
      debugger;
      var returnValue = result.data;
      return returnValue;
    })
  },

  setLiveGame({dispatch, commit, state},dargs){
    commit('setLive', dargs);
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
  notLoading (state) {
    state.sub.loading = false
  },

  setError (state, error) {
    state.sub.error = error
  },
  setLive(state, live){
    state.sub.live_game = live;
  },
  setGames (state, games) {
    state.sub.games = games
  },
  setAllGames (state, games) {
    state.sub.all_games = games
  },
  setGroupGames (state, games) {
    state.sub.group_games = games
  },
  setMiniGames (state, games) {
    state.sub.mini_games = games
  },

  clearErrors (state) {
    state.sub.loading = false;
    state.sub.error = false;
  },

  resetState (state) {
    state.sub = {
      error: false,
      loading: false,
      games: [],
      mini_games: [],
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
