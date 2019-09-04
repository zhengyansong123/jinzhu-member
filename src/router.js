import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('./views/home/Home.vue')
    },
    {
      path: '/category',
      component: () => import('./views/category/Category.vue')
    },
    {
      path: '/car',
      component: () => import('./views/car/Car.vue')
    },
    {
      path: '/about',
      component: () => import('./views/about/About.vue')
    }
  ]
})
