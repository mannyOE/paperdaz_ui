<template>
	<div class="">
		<b-header></b-header>
		<div class="row" style="min-height: 485px;">
			<div class="col-lg-2 p-l-1">
			   <b-sidebar></b-sidebar>
			</div>
			<div class="col-xs-12 col-md-12 col-lg-10">
				<router-view></router-view>
			</div>
		</div>

		
			<b-footer></b-footer>
		
	</div>
</template>


<script>

  import header from './../global/header.vue'
  import footer from './../global/footer.vue'
  import sidebar from './../business users/sidebar'
  import cuponcode from './../global/cuponcode.vue'

  export default {
    data(){
      return {
        login:1,
        cuponcode:1,
      }
    },
    methods:{
     
    },
    components:{
      bHeader:header,
      bFooter:footer,
      bSidebar:sidebar,
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
   .p-l-1 {
   	padding-left: 40px;
   }

</style>
