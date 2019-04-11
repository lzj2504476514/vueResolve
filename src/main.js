import Vue from 'vue';
import App from './App.vue';
import vueRouter from 'vue-router';
import mintui from 'mint-ui';
import 'mint-ui/lib/style.min.css';

import login from './component/account/login.vue';
import register from './component/account/register.vue';
import '../statics/css/mui.min.css';
import '../statics/fonts/mui.ttf';
import '../statics/css/icons-extra.css';
Vue.use(vueRouter)
Vue.use(mintui)
const router=new vueRouter({
    routes:[
        {
            path:'/login',
            name:'login',
            component:login
        },
        {
            path:'/register',
            name:'register',
            component:register
        }
    ]
});

new Vue({
    el:'#app',
    router,
    render:c=>c(App)
});