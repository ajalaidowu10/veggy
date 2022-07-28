/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import "font-awesome/css/font-awesome.css";
import Vue from 'vue';
import router from './routes';
import App from './App.vue';
import store from './store';

window.Vue = require('vue');


const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
