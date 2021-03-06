import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Greeting from '../views/Greeting.vue'
import Mocking from '../views/Mocking.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/greeting',
    name: 'Greeting',
    component: Greeting
  },
  {
    path: '/mocking',
    name: 'Mocking',
    component: Mocking
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
