<template>
  <b-container fluid>
      
    <b-row class="text-center mb-3">
      <b-col md='2' class="my-1 offset-md-1" style="padding: 0px;">
        <p class="py-2">Send request to</p>
      </b-col>
      <b-col md="9">
        <div class="row">
          <b-col md='5' class="my-1" style="padding: 0px;" v-for="i in sendemail">
            <input type="text" class="form-control form-controlc search-form" placeholder="md.jual.ah@gmail.com">
          </b-col>
          <b-col md='5' style="padding: 0px;">
            <button class="nav-item btn header-btn shadow colorbg">Send</button>
            <a href="#/profile/mainprofile/SendRequest" class="px-2 color" @click="sendemail++">+ Add another email</a>
          </b-col>
        </div>
      </b-col>
      <b-col md='12' class="my-1">
        <p class="my-3">Introduce Paperdaz or select one or multiple files below:</p>
      </b-col>
    </b-row>

    <!-- User Interface controls -->
    <b-row class="pb-5 d-none">

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
        <div style="margin-left: 41px;">
            <input :id="row.value" type="checkbox" name="flavour1" autocomplete="off"  class="custom-control-input" v-model="selected" :value="row.value">
            <label :for="row.value" class="custom-control-label"><span style="visibility: hidden;">Orange</span></label>
        </div>
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
  </b-container>
</template>

<script>

const items = [
  { Order:'1',UploadedBy:{ first:'jual',last:'ahmed' },Access:'Public',title:"What to Expect 2017",Type:'/img/pdf_icon.png',Email:'No',DateTime:'10:32  11.03.2018',actions:'1' },
  { Order:'2',UploadedBy:{ first:'jual',last:'ahmed' },Access:'Public',title:"What to Expect 2017",Type:'/img/pdf_icon.png',Email:'No',DateTime:'10:32  11.03.2018',actions:'2' },
  { Order:'3',UploadedBy:{ first:'jual',last:'ahmed' },Access:'Public',title:"What to Expect 2017",Type:'/img/pdf_icon.png',Email:'No',DateTime:'10:32  11.03.2018',actions:'3' },
  { Order:'4',UploadedBy:{ first:'jual',last:'ahmed' },Access:'Public',title:"What to Expect 2017",Type:'/img/pdf_icon.png',Email:'No',DateTime:'10:32  11.03.2018',actions:'4' },
  { Order:'5',UploadedBy:{ first:'Jennifer',last:'Garner' },Access:'Public',title:"What to Expect 2017",Type:'/img/pdf_icon.png',Email:'No',DateTime:'10:32  11.03.2018',actions:'5' },
  { Order:'6',UploadedBy:{ first:'Jennifer',last:'Garner' },Access:'Public',title:"What to Expect 2017",Type:'/img/pdf_icon.png',Email:'No',DateTime:'10:32  11.03.2018',actions:'6' },
  { Order:'7',UploadedBy:{ first:'Jennifer',last:'Garner' },Access:'Public',title:"What to Expect 2017",Type:'/img/pdf_icon.png',Email:'No',DateTime:'10:32  11.03.2018',actions:'7' },
  { Order:'8',UploadedBy:{ first:'Jennifer',last:'Garner' },Access:'Public',title:"What to Expect 2017",Type:'/img/pdf_icon.png',Email:'No',DateTime:'10:32  11.03.2018',actions:'8' }
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
        { key: 'actions', label: 'Select' }
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
      names: [],
      selected: [],
      sendemail:1
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
    },
    toggleAll (checked) {
      this.selected = checked ? this.flavours.slice() : []
    }
  },
    watch: {
    selected (newVal, oldVal) {
      // Handle changes in individual flavour checkboxes
      if (newVal.length === 0) {
        this.indeterminate = false
        this.allSelected = false
      } else if (newVal.length === this.flavours.length) {
        this.indeterminate = false
        this.allSelected = true
      } else {
        this.indeterminate = true
        this.allSelected = false
      }
    }
  }
}
</script>

 <style>

  @import './../../cssm/var.css';
  .search-form{
    padding: 10px;
  }
  #__BVID__26__BV_toggle_{
    margin-top: -10px;
  }
  .custom-control-input:checked ~ .custom-control-label::before,.page-item.active .page-link{
    background: $mainc;
    color: #fff!important;
  }
  .color{
    font-size: 15px;
    color: $mainc;
  }
  .colorbg{
    background: $mainc;
    color: #fff;
    padding: 8px 38px;
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