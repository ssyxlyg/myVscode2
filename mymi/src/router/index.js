/*
 * @Author: ssyx ssyx@gmail.com
 * @Date: 2022-10-11 15:20:57
 * @LastEditors: ssyx ssyx@gmail.com
 * @LastEditTime: 2022-10-17 15:00:51
 * @FilePath: \vsFile\mymi\src\router\index.js
  */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/user/Login.vue'
import Login2 from '../views/user/Login2.vue';


import User from '../views/user/User.vue';
import Ball from '../views/Ball.vue';
import Cart from '../views/Cart.vue';
import Cat from '../views/Cat.vue';
import Home from '../views/Home.vue';
import Home2 from '../views/Home2.vue';
import Mock from '../views/Mock.vue';






Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { requireAuth: true }
    },
    {
        path: '/mock',
        name: 'mock',
        component: Mock,
        meta: { requireAuth: true }
    },
    {
        path: '/home2',
        name: 'home2',
        component: Home2,
        meta: { requireAuth: true }
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/login2',
        name: 'login2',
        component: Login2
    },
    {
        path: '/user',
        name: 'user',
        component: User,
        meta: { requireAuth: true }
    },
    {
        path: '/ball',
        name: 'ball',
        component: Ball,
        meta: { requireAuth: true }
    },
    {
        path: '/cat',
        name: 'cat',
        component: Cat,
        meta: { requireAuth: true }
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart,
        meta: { requireAuth: true }
    },


]

const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (localStorage.token) {
            next(true)
        } else {
            next('/login?from=' + to.path)
        }
    } else {
        next(true)
    }
})
export default router
