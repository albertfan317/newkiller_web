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
  // 注意這裡的修改 - 使用import.meta.env.BASE_URL作為基礎路徑
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router