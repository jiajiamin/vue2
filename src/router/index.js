/*
 * @Author: your name
 * @Date: 2021-01-29 10:41:36
 * @LastEditTime: 2021-01-29 10:49:37
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue3\vue2\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history', // hash也可以
  base: process.env.BASE_URL,
  routes
})

export default router
