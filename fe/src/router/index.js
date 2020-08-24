import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/maintenModel'
  },
  {
    path: '/maintenData',
    name: 'maintenData',
    component: () => import(/* webpackChunkName: "maintenData" */ '../views/maintenData.vue')
  },
  {
    path: '/maintenModel',
    name: 'maintenModel',
    component: () => import(/* webpackChunkName: "maintenModel" */ '../views/maintenModel.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
