import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // 路由懶加載
    component: () => import('../views/About.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router