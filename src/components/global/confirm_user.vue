<template>
  <!-- Card login -->
   <div class="card p-5 shadow" v-loading="loading">

     <!-- Card content -->
    <div class="card-body" >
       <!-- Title -->
      <h4 class="card-title mb-4">Verificiation Failed. Resend Verification Email</h4>
             
    </div>
   </div>
   <!-- Card ligin end-->
</template>


<script>
  import { mapGetters, mapActions } from "vuex";
	export default {
	  name: 'login',
    data(){
      return {
        user: {
          email: '',
          telephone: '',
          password:''
        },
        email: true,
        
      }
    },
    methods:{
      ...mapActions('auth', ['login']),
      validateForm(){
        var d = this;
        this.$validator.validateAll().then(result=>{
          if(result){
            d.user.login_with = d.email;
            d.login(d.user)
            .then(res=>{
              var dtf = res.data;
              if(dtf.success){
                d.route.push(dtf.result.dashboard);
              } else{
                d.$message({
                message: dtf.message,
                type: 'warning',
                duration: 0,
                showClose: true
              })
              }           
            }).catch(error=>{
              d.$message({
                message: error.message,
                type: 'error',
                duration: 0,
                showClose: true
              })

            })
          }
        })  
      },


    },
    computed: {
      ...mapGetters('auth', ['errorMsg','error','loading'])
    }
	}
</script>


<style>
	
</style>