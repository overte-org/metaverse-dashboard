/*
    index.js

    Created by Kalila L. on 2 Jul 2020.
    Copyright 2020 Vircadia and contributors.

    Distributed under the Apache License, Version 2.0.
    See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
*/

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        icon: 'mdi-login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/',
        name: 'Home',
        icon: 'mdi-home',
        component: Home
    },
    {
        path: '/people',
        name: 'People',
        icon: 'mdi-account-group',
        component: () => import('../views/People.vue')
    },
    {
        path: '/domain',
        name: 'Domain',
        icon: 'mdi-earth',
        component: () => import('../views/Domain.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        icon: 'mdi-face-profile',
        component: () => import('../views/Profile.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router