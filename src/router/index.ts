import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home.vue') 
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about.vue')
  }
]

const router = createRouter({
  // history: createWebHistory(),    // 使用history模式
  history: createWebHashHistory(),	 // 使用hash模式
  routes
})

export default router
