import { blackAxios } from '@/config';

// const blackAxios = config.blackAxios

export default {
  resource: {
    fetchGroup: 'group/fetchAll',
    fetchUnc: 'users/unconfirmed',
    confirm: 'user/confirmAccount',
    createGroup: 'group/create',
    update: 'user/update',
    allAdmins: 'user/getAllAdmins/',
    block: 'user/blockAccount/',
    perms: 'user/permissions/',
    updatePe: 'user/permissionUpdate'
  },


  getGroups (dargs) {
    return blackAxios.get(this.resource.fetchGroup+'/'+dargs.session)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  },

getUncAdmins (dargs) {
    return blackAxios.get(this.resource.fetchUnc+'/'+dargs.session)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  },
  confirmAdmin (dargs) {
    return blackAxios.get(this.resource.confirm+'/'+dargs.session+'/'+dargs.Id)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  },



  createGroups (dargs) {
    debugger
    return blackAxios.post(this.resource.createGroup, dargs)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  },

  update (dargs) {
    return blackAxios.post(this.resource.update, dargs)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  },

  updateP(dargs){
    
    return blackAxios.post(this.resource.updatePe,dargs)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  },

  getAdmins (dargs) {
    return blackAxios.get(this.resource.allAdmins+dargs.session)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  },

  blockAccount (dargs) {
    return blackAxios.get(this.resource.block+dargs.session+'/'+dargs.Id+'/'+dargs.state)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  },

  fetchPermissions(dargs) {
    return blackAxios.get(this.resource.perms+dargs.session)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  },

  
}
