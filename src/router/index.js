import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path: '/me/:id',
    name: 'Me',
    component:  () => import(/* webpackChunkName: "me" */ '../views/me/index.vue'),
    //  children: [
    //   {
    //     path: 'test',
    //     name:'',
    //     component: Login
    //   }
    // ]
  }
]

const router = new VueRouter({
  mode: 'history',  //hash
  // base: process.env.BASE_URL,
  // base:'/zto',
  routes
})

export default router
