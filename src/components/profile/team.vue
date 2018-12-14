<template>
    <div class="col-md-8">
      
    
    <!-- Card register -->
    <div class="card p-5">

     <!-- Card content -->
     <div class="card-body">
       <!-- Title -->
       <h4 class="card-title mb-4">Register here....</h4>
       <div class="row">
         <div class="col-12">
           <div class="form-group">
             <input type="text" class="form-control form-controlc" placeholder="Email Address">
           </div>
           <div class="form-group">
             <input type="text" class="form-control form-controlc" placeholder="Busniess name">
           </div>
           <div class="form-group">
             <input type="text" class="form-control form-controlc" placeholder="Address">
           </div>
            <div class="form-group">
              <select name="" id="" class="form-control form-controlc">
                <option value="" selected>Select your country..</option>
                <option value="">Select your country..</option>
              </select>
            </div>
           <div class="row">
             <div class="col-6">
              <div class="form-group">
                <input type="text" class="form-control form-controlc" placeholder="First name">
              </div>
             </div>
             <div class="col-6">
              <div class="form-group">
                <input type="text" class="form-control form-controlc" placeholder="Last name">
              </div>
             </div>
           </div>
            <div class="form-group">
             <input type="text" class="form-control form-controlc" placeholder="Position">
            </div>
            <div class="row">
             <div class="col-6">
              <div class="form-group">
                <input type="text" class="form-control form-controlc" placeholder="Phone number">
              </div>
             </div>
             <div class="col-6">
              <div class="form-group">
                <input type="text" class="form-control form-controlc" placeholder="Industry">
              </div>
             </div>
            </div>
            <div class="form-group">
             <input type="text" class="form-control form-controlc" placeholder="Password">
            </div>
            <div class="form-group">
             <input type="text" class="form-control form-controlc" placeholder="Confirm password">
            </div>
          </div>
       
          <div class="col-12">
          <div class="form-group">
            <input type="checkbox">
            <label for=""><p class="text-infoc pl-1">Trems & Condition</p></label>
          </div>
         </div>
         <div class="col-12">
          <div class="form-group">
            <input type="submit" class="btn btn-blockc" value="Log in">
          </div>
         </div>
         <div class="col-12">
          <p class="text-center">Do not have account? <a @click="openloginform" href="#" class="text-infoc">Log in</a></p>
            <p class="text-center">Please read our <a href="" class="text-infoc">Privacy policy</a></p>
         </div>
       </div>
     </div>

    </div>
    <!-- Card register end-->

    </div>

   
</template>

<script>
  export default {
    name: 'login',
    methods:{
      openloginform(){
        this.$emit('changetologin');
      }
    }
  }
</script>

<style>
  
</style>