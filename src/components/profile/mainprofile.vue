<template>
	<div class="row">
		<div class="col-md-8">

    	<!-- Card register -->
     	<div class="card">

        <!-- Card content -->
        <div class="card-body">
           <div class="row">
              <div class="col-6 offset-2">
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
                  <input type="text" class="form-control form-controlc" placeholder="Phone number">
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
                  <input type="text" class="form-control form-controlc" placeholder="Role">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control form-controlc" placeholder="Country">
                </div>  
                <div class="form-group">
                  <input type="date" class="form-control form-controlc" placeholder="date and time">
                </div>  
                <div class="form-group">
                  <input type="text" class="form-control form-controlc" placeholder="time z">
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
        <div class="form-group pt-1 text-center">
          <file></file>
          <p class="mt-3"><a href="" class="btn btn-blockc mt-3" style="display: inline;">Upload</a></p>
        </div>
    </div>
	</div>
</template>

<script>

  import imagess from './img.vue'

	export default {
	  name: 'mainprofile',
    components:{
      file:imagess,
    },
    methods:{
      openloginform(){
        this.$emit('changetologin');
      }
    },
	}
</script>

<style>
	
</style>