<template>
  <div class="">
    <b-header></b-header>
    <div class="row" style="min-height: 500px; padding-left: 30px;">
     <div class="col-12 text-center">
       <img src="img/tree_small.png" alt="">
       <div style="font-size: 18px; margin-top: 20px;">Thank you for</div>
       <div style="color: green; font-size: 19px; font-weight: bold;">Saving a Tree!</div>

       <div style="margin-top: 30px; font-size: 18px;">Check your email to complete the registration</div>
     </div>
    </div>

    
      <b-footer></b-footer>
    
  </div>
</template>


<script>
   import header from './header.vue'
  import footer from './footer.vue'
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
    },
    components:{
      bHeader:header,
      bFooter:footer,
    }
	}
</script>


<style>
	
</style>