<template>

   <!-- Footer -->
	<footer id="footer" class="page-footer font-small indigo mt-5">
   		
   		<div class="container" style="padding: 8px;">
			<div class="row">
				<div class="col-md-3 py-2">
					<ul>
						<li class="mx-2 colorwhite"><i class="fab fa-linkedin-in fa-1x"></i></li>
						<li class="mx-2 colorwhite"><i class="fab fa-twitter fa-1x"></i></li>
						<li class="mx-2 colorwhite"><i class="fab fa-facebook-f fa-1x"></i></li>
						<li class="mx-2 colorwhite"><i class="fab fa-youtube fa-1x"></i></li>
						<li class="mx-2 colorwhite"><i class="far fa-file fa-1x"></i></li>
					</ul>
				</div>
				<div class="col-md-9">
				    <!-- Copyright -->
				    <div class="footer-copyright text-center py-2 colorwhite">
				    	© 2018 	PAPERXAZ | All Rights Reserve | Mission | 
				    	<router-link to="/faq/Geleral">FAQ's</router-link> |
 						<a href="#" @click="showcupon">Soft Launch</a>  | Contact | Chat with us!
				    </div>
				    <!-- Copyright -->
			    </div>
		    </div>
	    </div>

  	</footer>
  	<!-- Footer -->

</template>

<script>
export default {
  methods:{
  	showcupon(){
  		this.$emit('showcupon');
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
   	@import './../../cssm/var.css';

	
	#footer{
		background: $mainc!important;
		a{
			color: #fff!important;
		}
		p{
			margin: 0px!important;
		}
		ul{
			padding: 0px;
			margin: 0px;
			display: inline;
			li{
				display: inline;
			}
		}
	}

</style>
