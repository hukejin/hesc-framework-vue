import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/treeModule',
    name: 'treeModule',
    component: () => import('../views/treemodule/treemodule.vue')
  },
  {
    path: '/contactbooks',
    name: 'contactbooks',
    component: () => import('../views/treemodule/contactbooks.vue')
  },
  {
    path: '/listmodule',
    name: 'listmodule',
    component: () => import('../views/listmodule/listmodule.vue')
  },
  {
    path: '/searchlistmodule',
    name: 'searchlistmodule',
    component: () => import('../views/listmodule/searchlistmodule.vue')
  },
  {
    path: '/tabmodule',
    name: 'tabmodule',
    component: () => import('../views/tabmodule/tabmodule.vue')
  },
  {
    path: '/pictest',
    name: 'pictest',
    component: () => import('../views/pictest.vue')
  },
  {
    path: '/webdemo',
    name: 'webdemo',
    component: () => import('../views/httpmodule/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
