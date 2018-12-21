import { blackAxios } from '@/config';

// const blackAxios = config.blackAxios

export default {
  resource: {
    byId: 'games/byId/',
    byGroup: 'games/byGroup/',
    update: 'games/update-game',
    create: 'games/createGame',
    delete: 'games/deleteGame/',
    allgames: 'games/getAllGames/'
  },


  gamesById (dargs) {
    return blackAxios.get(this.resource.byId+dargs.Id+'/'+dargs.session)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  },

   games4Group (dargs) {
    return blackAxios.get(this.resource.byGroup+dargs.group+'/'+dargs.session)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  },

  allgames (dargs) {
    return blackAxios.get(this.resource.allgames+dargs.session)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  },

  creategame (dargs) {
    return blackAxios.post(this.resource.create, dargs)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  },

  deleteGame (dargs) {
    return blackAxios.post(this.resource.delete,dargs)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  },

  update(dargs){
    return blackAxios.post(this.resource.update, dargs)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  }

  
}
