import axios from 'axios';
import Vue from 'vue'
var hostname = location.hostname;
hostname = hostname.toLowerCase();

const isProd = hostname !== 'localhost' 
var port = '3001';

export const API = isProd ? 'http://api-paperdaz.appspot.com/' : 'http://localhost:'+port+'/'


console.log("Connecting API: "+ API);

Vue.prototype.$API = API;


// export var HOST = 'https://127.0.0.1:8080/#/';
export var blackAxios = axios.create({
  baseURL: API
});
