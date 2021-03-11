import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Inicio.vue')
  },
  {
    path: '/aboutme',
    name: 'AboutMe',
    component: () => import(/* webpackChunkName: "aboutme" */ '../views/AboutMe.vue')
  },
  {
    path: '/contactame',
    name: 'Contactame',
    component: () => import(/* webpackChunkName: "contactame" */ '../views/Contactame.vue')
  },
  {
    path: '/portafolio',
    name: 'Portafolio',
    component: () => import(/* webpackChunkName: "portafolio" */ '../views/Portafolio.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
