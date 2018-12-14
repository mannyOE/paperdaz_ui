<template>
  <div id="app">
    <!-- header -->
    <b-header v-on:changereg="openregiform" v-on:changelog="openloginform"></b-header>

   	<div class="container">
     <div class="row">
       <div class="col-md-6 py-5">

        <b-cuponcode></b-cuponcode>

       </div>


       <div class="col-md-6 py-5">

          <b-fnfbox></b-fnfbox>

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
  import fnfbox from './global/fnfbox.vue'

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
      bFnfbox:fnfbox,
    }
  }
</script>

<style>

  

</style>
