/*
 * @Author: ssyx ssyx@gmail.com
 * @Date: 2022-10-17 09:09:53
 * @LastEditors: ssyx ssyx@gmail.com
 * @LastEditTime: 2022-10-17 11:35:24
 * @FilePath: \vsFile\mymi\src\utils\request.js
  */

import axios from 'axios';
import { Toast } from 'vant';

let request = axios.create({
    baseURL: '/',
    timeout: 3000,
    headers: {
        post: {
            'Content-Type': "application/x-www-form-urlencoded"
        }
    },
})

//请求拦截
request.interceptors.request.use(function (config) {
    console.log(config);
    console.log('请求加载', '拦截中。。。');
    // let el = document.createElement('div');
    // el.id = 'toast'
    // el.innerHTML = '加载中'
    // document.body.append(el)
    Toast.loading(config.loading);
    return config
}, function (err) {
    Promise.reject(err)
})


//响应拦截
request.interceptors.response.use(function (config) {
    console.log(config);
    //响应过程中做的事情
    console.log("响应拦截", "加载完成");
    //响应完成删除加载提示div

    Toast.clear()
    return config;
}, function (err) {
    Promise.reject(err);
})

export default request