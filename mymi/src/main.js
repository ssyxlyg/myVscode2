/*
 * @Author: ssyx ssyx@gmail.com
 * @Date: 2022-10-11 15:20:57
 * @LastEditors: ssyx ssyx@gmail.com
 * @LastEditTime: 2022-10-12 16:47:50
 * @FilePath: \vsFile\mymi\src\main.js
  */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// vant 引入
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

// 引入 axios
import axios from 'axios'
Vue.prototype.$http = axios

// 引入 qs 
import qs from 'qs';
Vue.prototype.$qs = qs


//引入reset.css
import './assets/css/reset.css'
// 引入 js
import './assets/js/flexible.min.js'


Vue.config.productionTip = false

const vm = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
console.log(vm);
