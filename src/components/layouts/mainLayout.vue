<template>
	<div class="">
		<b-header></b-header>
		<div class="row">
			<div class="col-lg-7 hidden-xs hidden-md text-center">
				<!-- <img src="img/left-img.png" alt="" width="90%"> -->
				<b-cuponcode ></b-cuponcode>
			</div>
			<div class="col-xs-11 col-md-11 col-lg-4">
				<b-login></b-login>
			</div>
		</div>

		
			<b-footer></b-footer>
		
	</div>
</template>


<script>

  import header from './../global/header.vue'
  import footer from './../global/footer.vue'
  import login from './../global/login.vue'
  import register from './../global/register.vue'
  import cuponcode from './../global/cuponcode.vue'

  export default {
    data(){
      return {
        login:1,
        cuponcode:1,
      }
    },
    methods:{
      openregiform(){
        this.login=2;
      },
      openloginform(){
        this.login=1;
      },
      showcupon(){
        this.cuponcode=2;
      }
    },
    components:{
      bHeader:header,
      bFooter:footer,
      bLogin:login,
      // bRegister:register,
      bCuponcode:cuponcode,
    }
  }
</script>

<style>

  @import './../../cssm/var.css';
  @import './../../cssm/btn.css';
  @import './../../cssm/typo.css';

   .shadow{
        box-shadow: 0 1px 6px rgba(57,73,76,0.35);
   }

</style>
