<template>

  <b-navbar toggleable="md">
    <div class="container">
      <b-navbar-brand :to="{name:'home'}"><img src="img/logo.png" alt="" width="30%"></b-navbar-brand>

      	<b-navbar-nav v-if="!isLoggedIn">
      		<div class="col-xs-6 mx-2">
	      		<b-nav-item :to="{name: 'loginPage'}" class="btn btn-blockc header-btn shadow login-btn">
	      			Log in
	      		</b-nav-item>
      		</div>
      		<div class="col-xs-6 mx-2">
	      		<b-nav-item :to="{name: 'signupPage'}" class="btn btn-blockc header-btn shadow">
	      			Sign up
	      		</b-nav-item>
	      	</div>
    	</b-navbar-nav>

    	<b-navbar-nav style="height: 53px;" v-else>
    		<b-nav-item class="btn btn-blockc header-btn shadow" :to="{name:'upload-files'}">
      			Upload Files
      		</b-nav-item>
      		<b-nav-item >
      			<router-link to="/">
      				<b-dropdown variant="link" no-caret>
			          <template slot="button-content" class="color">
			            <p style="text-decoration: none;">{{user.email}} <i class="fa fa-angle-down"></i></p> 
			          </template>
			          <b-dropdown-item :to="{name:'profile'}">Profile</b-dropdown-item>
			          <b-dropdown-item @click.prevent="logout()">Logout</b-dropdown-item>
			        </b-dropdown>
      			</router-link>
      		</b-nav-item>
    	</b-navbar-nav>

    </div>
  </b-navbar>

</template>

<script>
  import { mapGetters, mapActions } from "vuex";
	export default {
		data(){
			return{
				
			}
		},
		methods:{
			logout(){
				this.logout_user();
			},
			...mapActions('user_mgt', ['logout_user'])
		},
		computed: {
			...mapGetters('user_mgt', ['user','isLoggedIn'])
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
