<template>
  <!-- Card register -->
   <div class="card p-5 shadow">

     <!-- Card content -->
     <div class="card-body" v-loading="loading">
       <!-- Title -->
       <h4 class="card-title mb-4" v-if="!reversal">Register here....</h4>
       <h4 class="card-title mb-4" v-else>Review your details before {{loading}} you continue</h4>
       <div class="row">
         <form @submit.prevent="validateForm()">
         <div class="col-12">
           <div class="form-group">
             <input type="text" v-validate="'required|email'" v-model="user.email" name="email" class="form-control form-controlc" :disabled=reversal placeholder="Email Address">
             <p class="text-right text-danger" v-if="errors.has('email')">{{errors.first('email')}}</p>
           </div>
           <div class="form-group">
             <input type="text" v-validate="'required'" v-model="user.businessName" name="businessName" class="form-control form-controlc" :disabled=reversal placeholder="Busniess name">
             <p class="text-right text-danger" v-if="errors.has('businessName')">{{errors.first('businessName')}}</p>
           </div>
           <div class="form-group">
             <input type="text" v-validate="'required'" v-model="user.address" name="address" class="form-control form-controlc" :disabled=reversal placeholder="Address">
             <p class="text-right text-danger" v-if="errors.has('address')">{{errors.first('address')}}</p>
           </div>
            <div class="form-group">
              <select name="country"  v-validate="'required'" v-model="user.country" class="form-control form-controlc" :disabled=reversal>
                <option value="" selected>Select your country..</option>
                <option v-for="item in $countries" :value="item.country">{{item.country}}</option>
              </select>
              <p class="text-right text-danger" v-if="errors.has('country')">{{errors.first('country')}}</p>
            </div>
           <div class="row">
             <div class="col-6">
              <div class="form-group">
                <input type="text" v-validate="'required'" name="firstName" v-model="user.firstName" class="form-control form-controlc" :disabled=reversal placeholder="First name">
                <p class="text-right text-danger" v-if="errors.has('firstName')">{{errors.first('firstName')}}</p>
              </div>
             </div>
             <div class="col-6">
              <div class="form-group">
                <input type="text"  v-validate="'required'" v-model="user.lastName" name="lastName" class="form-control form-controlc" :disabled=reversal placeholder="Last name">
                <p class="text-right text-danger" v-if="errors.has('lastName')">{{errors.first('lastName')}}</p>
              </div>
             </div>
           </div>
            <div class="form-group">
             <input type="text"  v-validate="'required'" v-model="user.position" name="position" class="form-control form-controlc" :disabled=reversal placeholder="Position">
             <p class="text-right text-danger" v-if="errors.has('position')">{{errors.first('position')}}</p>
            </div>
            <div class="row">
             <div class="col-6">
              <div class="form-group">
                <input type="text"  v-validate="'required'" v-model="user.telephone" name="telephone" class="form-control form-controlc" :disabled=reversal placeholder="Phone number">
                <p class="text-right text-danger" v-if="errors.has('telephone')">{{errors.first('telephone')}}</p>
              </div>
             </div>
             <div class="col-6">
              <div class="form-group">
                <input type="text" v-validate="'required'" v-model="user.industry" name="industry" class="form-control form-controlc" :disabled=reversal placeholder="Industry">
                <p class="text-right text-danger" v-if="errors.has('industry')">{{errors.first('industry')}}</p>
              </div>
             </div>
            </div>
            <div class="form-group">
             <input type="password" v-validate="'required'" v-model="user.password" name="password" class="form-control form-controlc" :disabled=reversal placeholder="Password">
             <p class="text-right text-danger" v-if="errors.has('password')">{{errors.first('password')}}</p>
            </div>
            <div class="form-group">
             <input type="password" v-validate="'required'" v-model="user.confirm_pwd" name="confirm_pwd" class="form-control form-controlc" :disabled=reversal placeholder="Confirm password">
             <p class="text-right text-danger" v-if="errors.has('confirm_pwd')">{{errors.first('confirm_pwd')}}</p>
            </div>
          </div>
       
          <div class="col-12">
          <div class="form-group">
              <b-form-checkbox 
                     v-model="user.tnc"
                     :value="true"
                     :unchecked-value="false">
                  Terms and Conditions
                </b-form-checkbox>
          </div>
         </div>
         <div class="col-12" v-if="!reversal">
          <div class="form-group">
            <input type="submit" class="btn btn-blockc" value="Begin Now">
          </div>
         </div>

         <div class="row">
           <div class="col-6" v-if="reversal">
          <div class="form-group">
            <router-link :to="{name:'signupPage'}" style="color: #fff" class="btn btn-blockc">Go Back</router-link>
          </div>
         </div>

         <div class="col-6" v-if="reversal">
          <div class="form-group">
            <button @click="submitForm()" class="btn btn-blockc">Signup Now</button>
          </div>
         </div>
         </div>

         <div class="col-12">
          <p class="text-center">Already have an account? <router-link :to="{name:'loginPage'}" class="text-infoc">Log in</router-link></p>
            <p class="text-center">Please read our <a href="" class="text-infoc">Privacy policy</a></p>
         </div>
       </form>
       </div>
     </div>

   </div>
  <!-- Card register end-->
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  export default {
    name: 'login',
    data(){
      return {
        
        
      }
    },
    methods:{
      ...mapActions('auth', ['signup']),
      validateForm(){
        var d = this;
        this.$validator.validateAll().then(result=>{
          if(result){
             this.$router.push({name:'confirm_details'})          
          }
        })  
      },

      submitForm(){
        var d = this;
         d.signup(d.user)
            .then(res=>{
              var dtf = res.data;
              if(dtf.success){
                d.$router.push({name:'signup-complete'});
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
      },

      back_btn(){
        this.$router.push({name:'signupPage'});
      },

      


    },
    computed: {
      ...mapGetters('auth', ['errorMsg','error','loading','user']),
      reversal(){
        if(this.$route.name=='confirm_details'){
          return true;
        }else{
          return false;
        }
      }
    }
  }
</script>

<style>
	
</style>