import { blackAxios } from '@/config';

// const blackAxios = config.blackAxios

export default {
  resource: {
    getSingle: 'games/getSingleGame/',
    playerget: 'games/getSingleGamePlayer/',
    playerip: 'games/getPlayerIp',
    update: 'games/updatePicks/',
  },


  getLive (dargs) {
    return blackAxios.get(this.resource.getSingle+dargs.Id+'/'+dargs.session)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  },
  getLivePlayer (dargs) {
    return blackAxios.get(this.resource.playerget+dargs.Id)
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
    return blackAxios.get(this.resource.delete+dargs.id+'/'+dargs.session+'/'+dargs.photo)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  },
  getIp(){
    return blackAxios.get(this.resource.playerip)
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
