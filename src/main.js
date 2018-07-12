import Vue from 'vue';
import BootstrapVue from "bootstrap-vue";
import VueResource from 'vue-resource';
import "./Util/tinyColor.js";
import store from './store';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Notify from 'vue2-notify';
import App from './App.vue';

Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(Notify, {
    visiblity: 5000,
    permanent: true,
    closeButtonClass: 'close'
});
Vue.http.options.emulateJSON = true;
new Vue({
    el: '#app',
    store,
    http: {
        root: 'http://espclock.local'
    },
    render: h => h(App)
})