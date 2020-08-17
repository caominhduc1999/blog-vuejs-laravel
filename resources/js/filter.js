//moment js
import moment from 'moment';
import Vue from 'vue';

Vue.filter('timeformat', function(arg){
    return moment(arg).format("MMM Do YY")
})
