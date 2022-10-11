/*
 * @Author: ssyx ssyx@gmail.com
 * @Date: 2022-10-09 13:56:53
 * @LastEditors: ssyx ssyx@gmail.com
 * @LastEditTime: 2022-10-11 14:45:35
 * @FilePath: \vsFile\myvue\src\main.js
  */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.$http = axios;

// 全局引用
import './assets/css/test2.css'
import Vant from 'vant';
import 'vant/lib/index.css'

Vue.use(Vant);


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
