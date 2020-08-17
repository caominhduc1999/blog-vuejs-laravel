
require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster').default);

import {routes} from './routes.js';

//v-form
import { Form, HasError, AlertError } from 'vform'
window.Form = Form
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

window.Toast = Toast;

import Vuex from 'vuex'
Vue.use(Vuex)
import storeData from './store/index.js';
const store = new Vuex.Store(
    storeData
)

import {filter} from './filter.js'


const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history'
})

const app = new Vue({
    el: '#app',
    router,
    store
});
