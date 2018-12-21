import { blackAxios } from '@/config';

// const blackAxios = config.blackAxios

export default {
  resource: {
    res: 'auth/login',
    confirmPassword: 'auth/confirm_password',
    resend_confirmation: 'auth/resend_confirmation',
    confirm_email: 'auth/confirm_email/',
    register: 'auth/register'
  },


  login (dargs) {
    return blackAxios.post(this.resource.res, dargs)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error.message);
        var err = {};
        err.message = error.message;
        err.status = false;
        err.error = true;
        return err;
      });
  },

  signup (dargs) {
    return blackAxios.post(this.resource.register, dargs)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  },

  forgotPassword(dargs){
    return blackAxios.post('/recover_password', dargs)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
  })
},

confirmPassword (dargs) {
  return blackAxios.post(this.resource.confirmPassword, dargs)
  .then(function (response) {

    return response;
  })
  .catch(function (error) {
    return error;
  });
},
resend_confirmation (dargs) {
  return blackAxios.post(this.resource.resend_confirmation, dargs)
  .then(function (response) {
    return response;
  })
  .catch(function (error) {
    return error;
  });
},
confirm_email (dargs) {
  return blackAxios.get(this.resource.confirm_email+dargs.id+'/'+dargs.token)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  },
}
