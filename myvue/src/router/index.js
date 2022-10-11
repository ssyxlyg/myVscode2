/*
 * @Author: ssyx ssyx@gmail.com
 * @Date: 2022-10-09 13:56:53
 * @LastEditors: ssyx ssyx@gmail.com
 * @LastEditTime: 2022-10-11 14:17:56
 * @FilePath: \vsFile\myvue\src\router\index.js
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Produce from '../views/Produce.vue'
import Admin from '../views/Admin/index.vue'
import Order from '../views/Admin/Order.vue'
import Ucenter from '../views/Admin/Ucenter.vue'
import Vant from '../views/Vant.vue'



Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/produce/:id',
        name: 'produce',
        component: Produce
    },
    {
        path: '/vant/',
        name: 'vant',
        component: Vant
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin,
        children: [
            { path: 'order', component: Order },
            { path: 'ucenter', component: Ucenter },
            { path: '', redirect: 'Ucenter' }

        ]
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
