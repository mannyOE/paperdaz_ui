<template>
  <div class="col-md-12" v-if="addmember">
    <div class="text-right py-2">
      <a class="btn btn-blockc shadow login-btn" style="width: 20%;" @click="clickmember">Add Team</a>
    </div>
    <table class="table table-responsive-md">
      <thead>
        <tr>
          <th scope="col">Created</th>
          <th scope="col">Email</th>
          <th scope="col">Name</th>
          <th scope="col">Role</th>
          <th scope="col">Uploaded</th>
          <th scope="col">Completed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">11.05.2018</th>
          <td>md.jual.ah@gmail.com</td>
          <td>Jual ahmed</td>
          <td>Human Rusources</td>
          <td>8</td>
          <td>150</td>
        </tr>
        <tr>
          <th scope="row">11.05.2018</th>
          <td>md.jual.ah@gmail.com</td>
          <td>Jual ahmed</td>
          <td>Human Rusources</td>
          <td>8</td>
          <td>150</td>
        </tr>
        <tr>
          <th scope="row">11.05.2018</th>
          <td>md.jual.ah@gmail.com</td>
          <td>Jual ahmed</td>
          <td>Human Rusources</td>
          <td>8</td>
          <td>150</td>
        </tr>
        <tr>
          <th scope="row">11.05.2018</th>
          <td>md.jual.ah@gmail.com</td>
          <td>Jual ahmed</td>
          <td>Human Rusources</td>
          <td>8</td>
          <td>150</td>
        </tr>
        <tr>
          <th scope="row">11.05.2018</th>
          <td>md.jual.ah@gmail.com</td>
          <td>Jual ahmed</td>
          <td>Human Rusources</td>
          <td>8</td>
          <td>150</td>
        </tr>
        <tr>
          <th scope="row">11.05.2018</th>
          <td>md.jual.ah@gmail.com</td>
          <td>Jual ahmed</td>
          <td>Human Rusources</td>
          <td>8</td>
          <td>150</td>
        </tr>
        <tr>
          <th scope="row">11.05.2018</th>
          <td>md.jual.ah@gmail.com</td>
          <td>Jual ahmed</td>
          <td>Human Rusources</td>
          <td>8</td>
          <td>150</td>
        </tr>
      </tbody>
    </table>
    <div>
      <div class="row">
        <div class="col-md-6 pt-3">
          <p>
            Showing
            <select name="" id="">
              <option value="">20</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
            Resoult par page
          </p>
        </div>
        <div class="col-md-6 text-right">
          <nav aria-label="Page navigation example" class="text-right">
            <ul class="pagination text-right justify-content-end">
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              <li class="page-item item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-12 text-center" v-else>
    <section id="cuponcodea">
      <div class="text-right py-2">
        <a class="btn btn-blockc shadow login-btn" style="width: 20%;" @click="clickmemberback">Add More</a>
      </div>
      <div id="cuponcode" class="shadow">
        <p class="py-3">An email will be sent to the team member to create a profile.</p>
        <div class="form-group py-3">
          <input type="text" class="form-control form-controlc" placeholder="Email">
        </div>
        <input type="submit" class="btn btn-blockc" value="Send">
        </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data(){
      return {
        addmember:true,
      }
    },
    methods:{
      openloginform(){
        this.$emit('changetologin');
      },
      clickmember(){
        this.addmember=false;
      },
      clickmemberback(){
        this.addmember=true;
      }
    }
  }
</script>

<style>

  @import './../../cssm/var.css';
  .page-item{
    margin: 0px 5px;
    a{
      color: $mainc!important;
    }
  }
  .login-btn{
    background: #fff;
    border: 1px solid $mainc;
    color: $mainc!important;
  }
  #cuponcodea{
    min-height: 400px;
    position: relative;
    #cuponcode{
      width: 500px;
      background: $mainc4!important;
      padding: 40px;
      margin: auto;
      p{
        color: $mainc;
        font-weight: 600;
      }
    }
  }
</style>