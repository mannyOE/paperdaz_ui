<template>
  <div id="app">
    <!-- header -->

    <b-header v-on:changereg="openregiform" v-on:changelog="openloginform"></b-header>

   	<div class="container">
     <div class="row my-5">
       <div class="col-md-6 shadow bg-color">
			<div class="p-5 text-center margin">
				<div class="text-left">
					<h4>Frequently Asked Questions</h4>
					<ul>
						<li>
							<router-link to="/faq/Geleral">Geleral</router-link>
						</li>
						<li>
							<router-link to="/faq/Geleral/Billing">Billing</router-link>
						</li>
						<li>
							<router-link to="/faq/Geleral/BusinessUsers">Business Users</router-link>
						</li>
						<li>
							<router-link to="/faq/Geleral/FreeUsers">Free Users</router-link>
						</li>
					</ul>
					</div>
			</div>
       </div>


       <div class="col-md-6">

  			<router-view></router-view>		
  			
       </div>

     </div>
   	</div>
      
  	<b-footer v-on:showcupon="showcupon"></b-footer>

  </div>
</template>

<script>

  import header from './global/header.vue'
  import footer from './global/footer.vue'
  

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
    }
  }
</script>

<style>
  	@import './../cssm/var.css';
	.router-link-exact-active{
		color: $mainc;
	}
	a{
		color:$mainc3;
	}
	.margin{
		margin: 30px;
	}
	ul{
		list-style: none;
		text-align: left;
		padding: 0px;
		margin: 0px;
		li{
			padding: 5px 0px;
			font-weight: 700;
			color: $mainc2;
			cursor: pointer;
		}
		li:hover{
				color: $mainc;
			}
	}
	@media (max-width: 600px){
		.margin{
			margin: 0px;
		}
	}
	
</style>
