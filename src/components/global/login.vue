<template>
  <!-- Card login -->
   <div class="card p-5 shadow">

     <!-- Card content -->
     <div class="card-body">
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
       <div class="row">
       	<div class="col-12">
          <p class="text-right py-3">Sign up with 
            <a v-if="email==1" href="#" class="text-infoc" @click="changetonumber">Phone number</a>
            <a v-else href="#" class="text-infoc" @click="changetonumber">Email</a>
          </p>
         </div>
         <div class="col-12">
           <div class="form-group" v-if="email==1">
             <input type="email" class="form-control form-controlc" placeholder="Email Address">
           </div>
           <div class="form-group" v-else>
             <input type="tel" class="form-control form-controlc" placeholder="Phone number">
           </div>
           <div class="form-group">
             <input type="password" class="form-control form-controlc" placeholder="Password">
           </div>
         </div>
         <div class="col-12">
         	<p class="text-right"><a href="#">Forgote password?</a></p>
         </div>
          <div class="col-12">
         	<div class="form-group">
         		<input type="checkbox">
         		<label for=""><p class="text-infoc pl-1">Remember me</p></label>
         	</div>
         </div>
         <div class="col-12">
         	<div class="form-group">
         		<input type="submit" class="btn btn-blockc" value="Log in">
         	</div>
         </div>
         <div class="col-12">
         	<p class="text-center">Do not have account? <a @click="openregiform" href="#" class="text-infoc">Sign up</a></p>
         		<p class="text-center">Please read our <a href="" class="text-infoc">Privacy policy</a></p>
         </div>
       </div>
     </div>

   </div>
   <!-- Card ligin end-->
</template>


<script>
	export default {
	  name: 'login',
    data(){
      return {
        passtype:'password',
        email:1,
      }
    },
    methods:{
      openregiform:function(){
        this.$emit('showlogin');
      },
      changetonumber:function(){
        if(this.email==1){
          this.email=2;
        }
        else{
          this.email=1;
        }
      }
    }
	}
</script>


<style>
	
</style>