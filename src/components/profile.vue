<template>
  <div id="app">
    <!-- header -->

    <b-header v-on:changereg="openregiform" v-on:changelog="openloginform"></b-header>

    <div class="container">
     <div class="row">
      <div class="col-md-12">
         <ul id="headernav">
              <li>
                <router-link to="/profile/mainprofile">Profile</router-link>
              </li>
              <li>
                <router-link to="/profile/mainprofile/team">Team</router-link>
              </li>
              <li>
                <router-link to="/profile/mainprofile/Billing">Billing</router-link>
              </li>
          </ul>
      </div>
     <div class="col-md-2 bg-color">
      <div class="text-center">
        <div class="text-left">
          <ul>
            <li>
              <router-link to="/profile/mainprofile/Dashboard">Dashboard</router-link>
            </li>
            <li>
              <router-link to="/profile/mainprofile/companyFiles">Company Files</router-link>
            </li>
            <li>
              <router-link to="/profile/mainprofile/SendRequest">Send Request</router-link>
            </li>
            <li>
              <router-link to="/profile/mainprofile/TermsOfUse">Terms Of Use</router-link>
            </li>
          </ul>
          </div>
      </div>
     </div>


       <div class="col-md-10">

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
  #headernav{
    li{
      display: inline-block;
      padding: 20px;
    }
  }
  @media (max-width: 600px){
    .margin{
      margin: 0px;
    }
  }
  
</style>
