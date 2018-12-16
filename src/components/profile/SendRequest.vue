<template>
  <b-container fluid>

    <!-- User Interface controls -->
    <b-row class="pb-5">

      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Filter" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Sort" class="mb-0">
          <b-input-group>
            <b-form-select v-model="sortBy" :options="sortOptions">
              <option slot="first" :value="null">-- none --</option>
            </b-form-select>
            <b-form-select :disabled="!sortBy" v-model="sortDesc" slot="append">
              <option :value="false">Asc</option>
              <option :value="true">Desc</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>

    </b-row>
    <!-- Main table element -->
    <h5 class="pb-4">Your company have planted <span class="color">{{ items.length }}</span> seeds!</h5>

    <b-table show-empty
             stacked="md"
             :items="items"
             :fields="fields"
             :current-page="currentPage"
             :per-page="perPage"
             :filter="filter"
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             :sort-direction="sortDirection"
             @filtered="onFiltered"
    > 
      <template slot="Order" slot-scope="row">{{row.value}}</template>
      <template slot="DateTime" slot-scope="row">{{row.value}}</template>
      <template slot="UploadedBy" slot-scope="row">{{row.value.first}} {{row.value.last}}</template>
      <template slot="title" slot-scope="row">{{ row.value }}</template>
      <template slot="Type" slot-scope="row"><img v-bind:src="row.value" alt="" width="40%"></template>
      <template slot="Status" slot-scope="row">{{row.value}}</template>
      <template slot="actions" slot-scope="row">
        <b-dropdown variant="link" size="lg" no-caret>
          <template slot="button-content">
            <i class="color fas fa-ellipsis-h"></i>
          </template>
          <b-dropdown-item href="#">Open</b-dropdown-item>
          <b-dropdown-item href="#" v-b-modal.modal-center>Send Request</b-dropdown-item>
          <b-dropdown-item href="#">Download</b-dropdown-item>
          <b-dropdown-item href="#">Delete</b-dropdown-item>
        </b-dropdown>
      </template>
    </b-table>

    <div class="text-center p-5" v-if="items.length<1">
      <img src="/img/seeds_gray.png" alt=""><br>
      <p>Let’s start growing a tree, each completed documents represent a leave!</p>
    </div>

    <b-row v-if="items.length>1">
      <b-col md="6" class="my-1">
        <b-form inline horizontal label="Showing" class="m-0 p-0">
          <p class="px-2">Showing </p>
            <b-form-select :options="pageOptions" v-model="perPage" />
          <p class="px-2">results per page </p>
        </b-form>
      </b-col>
      <b-col md="6" class="my-1">
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0 justify-content-end text-right" />
      </b-col>
    </b-row>


    <div id="sendrequestmoder">
      <!-- Main UI -->
      <div class="mt-3 mb-3">
        Submitted Email:
        <ul>
          <li v-for="n in names">{{n}}</li>
        </ul>
      </div>
      <!-- Modal Component -->
      <b-modal id="modal-center"
               ref="modal"
               title="Send request"
               @ok="handleOk"
               @shown="clearName"
               >
        <form @submit.stop.prevent="handleSubmit">
          <b-form-group id="exampleInputGroup1"
                        label="Email address:"
                        label-for="exampleInput1"
                        class="font-weight-bold">
            <b-form-input id="exampleInput1"
                          type="email"
                          v-model="name"
                          required
                          placeholder="md.jual.ah@gmail.com"
                          class="form-control form-controlc">
            </b-form-input>
          </b-form-group>
          <b-form-group id="exampleInputGroup1"
                        label="Add Note:"
                        label-for="exampleInput1"
                        class="font-weight-bold">
            <b-form-textarea id="textarea1"
                         v-model="text"
                         placeholder="Enter something"
                         :rows="3"
                         :max-rows="6"
                         class="form-control form-controlc">
            </b-form-textarea>
          </b-form-group>
        </form>
      </b-modal>
    </div>

  </b-container>
</template>

<script>

const items = [
  { Order:1,UploadedBy:{ first:'jual',last:'ahmed' },Access:'Public',title:"What to Expect 2017",Type:'/img/pdf_icon.png',Email:'No',DateTime:'10:32  11.03.2018',actions:'sdf' },
  { Order:2,UploadedBy:{ first:'jual',last:'ahmed' },Access:'Public',title:"What to Expect 2017",Type:'/img/pdf_icon.png',Email:'No',DateTime:'10:32  11.03.2018',actions:'sdf' },
  { Order:3,UploadedBy:{ first:'jual',last:'ahmed' },Access:'Public',title:"What to Expect 2017",Type:'/img/pdf_icon.png',Email:'No',DateTime:'10:32  11.03.2018',actions:'sdf' },
  { Order:4,UploadedBy:{ first:'jual',last:'ahmed' },Access:'Public',title:"What to Expect 2017",Type:'/img/pdf_icon.png',Email:'No',DateTime:'10:32  11.03.2018',actions:'sdf' },
  { Order:5,UploadedBy:{ first:'Jennifer',last:'Garner' },Access:'Public',title:"What to Expect 2017",Type:'/img/pdf_icon.png',Email:'No',DateTime:'10:32  11.03.2018',actions:'sdf' },
  { Order:6,UploadedBy:{ first:'Jennifer',last:'Garner' },Access:'Public',title:"What to Expect 2017",Type:'/img/pdf_icon.png',Email:'No',DateTime:'10:32  11.03.2018',actions:'sdf' },
  { Order:7,UploadedBy:{ first:'Jennifer',last:'Garner' },Access:'Public',title:"What to Expect 2017",Type:'/img/pdf_icon.png',Email:'No',DateTime:'10:32  11.03.2018',actions:'sdf' },
  { Order:8,UploadedBy:{ first:'Jennifer',last:'Garner' },Access:'Public',title:"What to Expect 2017",Type:'/img/pdf_icon.png',Email:'No',DateTime:'10:32  11.03.2018',actions:'sdf' }
]

export default {
  data () {
    return {
      items: items,
      fields: [
        { key: 'Order', label: 'Order', sortable: true, 'class': 'text-center' },
        { key: 'DateTime', label: 'Date & Time', sortable: false, 'class': 'text-center' },
        { key: 'title', label: 'Title', sortable: true, 'class': 'text-center' },
        { key: 'Type', label: 'Type', sortable: true, 'class': 'text-center' },
        { key: 'Access', label: 'Access', sortable: true, 'class': 'text-center' },
        { key: 'UploadedBy', label: 'UploadedBy', sortable: true, sortDirection: 'desc' },
        { key: 'Email', label: '+Email', sortable: false, 'class': 'text-center' },
        { key: 'actions', label: 'Actions' }
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: items.length,
      pageOptions: [ 5, 10, 15 ],
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      modalInfo: { title: '', content: '' },
      name: '',
      names: []
    }
  },
  computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
    }
  },
  methods: {
   openloginform(){
      this.$emit('changetologin');
    },
    clickmember(){
      this.addmember=false;
    },
    clickmemberback(){
      this.addmember=true;
    },
    onFiltered (filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }, clearName () {
      this.name = ''
    },
    handleOk (evt) {
      // Prevent modal from closing
      evt.preventDefault()
      if (!this.name) {
        alert('Please enter your name')
      } else {
        this.handleSubmit()
      }
    },
    handleSubmit () {
      this.names.push(this.name)
      this.clearName()
      this.$refs.modal.hide()
    }

  }
}
</script>

 <style>

  @import './../../cssm/var.css';
  #__BVID__26__BV_toggle_{
    margin-top: -10px;
  }
  .color{
    font-size: 20px;
    color: $mainc;
  }
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