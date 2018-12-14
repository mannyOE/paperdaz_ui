<template>
  <div id="app">
    <!-- header -->
    <b-header v-on:changereg="openregiform" v-on:changelog="openloginform"></b-header>

   	<div class="container">
     <div class="row">
       <div class="col-md-7 p-5">

  			<img v-if="cuponcode==1" src="img/left-img.png" alt="" width="100%">

        <b-cuponcode v-else></b-cuponcode>

       </div>


       <div class="col-md-5">

          <b-login v-if="login==1" v-on:showlogin="openregiform"></b-login>
          <b-register v-else v-on:changetologin="openloginform"></b-register>

       </div>

     </div>
   	</div>
      
  	<b-footer v-on:showcupon="showcupon"></b-footer>

  </div>
</template>

<script>

  import header from './global/header.vue'
  import footer from './global/footer.vue'
  import login from './global/login.vue'
  import register from './global/register.vue'
  import cuponcode from './global/cuponcode.vue'

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
      bRegister:register,
      bCuponcode:cuponcode,
    }
  }
</script>

<style>

  @import './../cssm/var.css';
  @import './../cssm/btn.css';
  @import './../cssm/typo.css';

   .shadow{
        box-shadow: 0 1px 6px rgba(57,73,76,0.35);
   }

</style>
