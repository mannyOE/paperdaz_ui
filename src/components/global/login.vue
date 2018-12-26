<template>
  <!-- Card login -->
   <div class="card p-5 shadow">

     <!-- Card content -->
     <div class="card-body" v-loading="loading">
       <!-- Title -->
       <h4 class="card-title mb-4">Welcome to digital paper!</h4>
       <a href="#" class="btn social-btn shadow">
         <div class="row p-2">
           <div class="col-4">
             <img src="google.png" alt="" width="35%">
           </div>
           <div class="col-8">
             <p>Google</p>
           </div>
         </div>
       </a>
      <a href="#" class="btn social-btn fb-btn mt-4 shadow">
         <div class="row p-2">
           <div class="col-4">
             <i class="fab fa-facebook" style="color: #fff;font-size: 1.7em;"></i>
           </div>
           <div class="col-8">
             Facebook
           </div>
         </div>
       </a>
          <div class="mt-2 mb-3 text-center pull-right">
            <p class="">Sign up with 
          </p>
            <b-form-radio-group id="radios2" v-model="email" name="radioSubComponent">
        <b-form-radio :value="true">Email</b-form-radio>
        <b-form-radio :value="false">Phone</b-form-radio>
      </b-form-radio-group>
          </div>
         
       
         <form @submit.prevent="validateForm()">
         <div class="col-xs-12">
           <div class="form-group" v-if="email">
             <input v-validate="'required|email'" type="email" v-model="user.email" class="form-control form-controlc" name="email" placeholder="Email Address">
              <p class="text-right text-danger" v-if="errors.has('email')">{{errors.first('email')}}</p>
           </div>
           <div class="form-group" v-else>
             <input type="tel" v-validate="'required'" name="telephone" v-model="user.telephone" class="form-control form-controlc" placeholder="Phone number">
              <p class="text-right text-danger" v-if="errors.has('telephone')">{{errors.first('telephone')}</p>
           </div>
           <div class="form-group">
             <input type="password" v-validate="'required|min:6'" name="password" v-model="user.password" class="form-control form-controlc" placeholder="Password">
             <p class="text-right text-danger" v-if="errors.has('password')">{{errors.first('password')}}</p>
           </div>
         </div>
         <div class="col-12">
         	<p class="text-right"><a href="#">Forgote password?</a></p>
         </div>
          <div class="col-12 form-group">
         	<b-form-checkbox 
                     v-model="user.remember_me"
                     :value="true"
                     :unchecked-value="false">
      Remember Me
    </b-form-checkbox>
         </div>
         <div class="col-12">
         	<div class="form-group">
         		<input type="submit" class="btn btn-blockc" value="Log in">
         	</div>
         </div>
         </form>
         <div class="col-12">
         	<p class="text-center">Do not have account? <router-link :to="{name: 'signupPage'}" class="text-infoc">Sign up</router-link></p>
         		<p class="text-center">Please read our <a href="" class="text-infoc">Privacy policy</a></p>
         </div>
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
                d.$router.push({name:'dashboard'});
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