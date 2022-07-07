import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue')
  },
  {
    path: '/salaryService',
    name: 'salaryService',
    component: () => import('../views/SalaryServiceView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profiles/ProfileForAdmin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
