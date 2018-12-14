<template>
	<div class="row">
		<div class="col-md-8">

    	<!-- Card register -->
     	<div class="card">

        <!-- Card content -->
        <div class="card-body">
           <div class="row">
              <div class="col-10">
               <div class="form-group">
                 <input type="text" class="form-control form-controlc" placeholder="Email Address">
               </div>
               <div class="form-group">
                 <input type="text" class="form-control form-controlc" placeholder="Password">
               </div>
               <div class="form-group">
                 <input type="text" class="form-control form-controlc" placeholder="Compaly name">
               </div>
                <div class="form-group">
                  <select name="" id="" class="form-control form-controlc">
                    <option value="" selected>Select industry..</option>
                    <option value="">Select your industry..</option>
                  </select>
                </div>
               <div class="form-group">
                 <input type="text" class="form-control form-controlc" placeholder="Address">
               </div>
                <div class="form-group">
                  <input type="number" placeholder="Mumber">
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
              <div class="col-2">
                <div class="form-group pt-1">
                  <a href="" class="btn btn-blockc" style="font-size: 10px;">Change</a>
                </div>
                <div class="form-group mt-4 pt-1">
                  <a href="" class="btn btn-blockc" style="font-size: 10px;">Change</a>
                </div>
              </div>
            </div>
        </div>

     	</div>
    	<!-- Card register end-->

  	</div>

   	<div class="col-md-4">
         <p>this is profile edit area</p>
    </div>
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