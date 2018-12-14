<template>

  <b-navbar toggleable="md">
    <div class="container">
      <b-navbar-brand href="/"><img src="img/logo.png" alt="" width="30%"></b-navbar-brand>
      	<b-navbar-nav v-if="1">
      		<b-nav-item href="#" @click="showlog" class="btn btn-blockc header-btn shadow login-btn">
      			<router-link to="/">Log in</router-link>
      		</b-nav-item>
      		<b-nav-item href="#/" class="btn btn-blockc header-btn shadow" @click="showreg">
      			<router-link to="/">Sign up</router-link>
      		</b-nav-item>
    	</b-navbar-nav>
    </div>
  </b-navbar>

</template>

<script>
	export default {
		methods:{
			showreg(){
				this.$emit('changereg')
			},
			showlog(){
				this.$emit('changelog')
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
  	@import './../../cssm/var.css';


	.header-btn{
		padding: 0px 24px;
    	margin: 7px;
    	a{
    		color: #fff!important;
    	}
	}
	.login-btn{
		background: #fff;
		border: 1px solid $mainc;
		a{
			color: $mainc!important;
		}
	}

	@media (max-width: 768px){
		.navbar-expand-md .navbar-nav{
			width: 100%;
		}
	}
	

</style>
