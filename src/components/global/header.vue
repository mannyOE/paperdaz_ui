<template>

  <b-navbar toggleable="md">
    <div class="container">
      <b-navbar-brand href="/"><img src="img/logo.png" alt="" width="30%"></b-navbar-brand>

      	<b-navbar-nav v-if="login">
      		<b-nav-item href="#" @click="showlog" class="btn btn-blockc header-btn shadow login-btn">
      			<router-link to="/">Log in</router-link>
      		</b-nav-item>
      		<b-nav-item href="#/" class="btn btn-blockc header-btn shadow" @click="showreg">
      			<router-link to="/">Sign up</router-link>
      		</b-nav-item>
    	</b-navbar-nav>

    	<b-navbar-nav style="height: 53px;" v-else>
    		<b-nav-item class="btn btn-blockc header-btn shadow" @click="showreg">
      			<router-link to="/profile/mainprofile/fileupload">Upload Files</router-link>
      		</b-nav-item>
      		<b-nav-item href="#/">
      			<router-link to="/">
      				<b-dropdown variant="link" no-caret>
			          <template slot="button-content" class="color">
			            <p>md.jual.ah@gmail.com</p> <i class="fas fa-angle-down fa-2x"></i>
			          </template>
			          <b-dropdown-item href="#">Open</b-dropdown-item>
			          <b-dropdown-item href="#" v-b-modal.modal-center>Send Request</b-dropdown-item>
			          <b-dropdown-item href="#">Download</b-dropdown-item>
			          <b-dropdown-item href="#">Delete</b-dropdown-item>
			        </b-dropdown>
      			</router-link>
      		</b-nav-item>
    	</b-navbar-nav>

    </div>
  </b-navbar>

</template>

<script>
	export default {
		data(){
			return{
				login:false,
			}
		},
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
	
	.btn-link p,.svg-inline--fa{
		color: $mainc3!important;
		font-weight: 700;
	}
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
