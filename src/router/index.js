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
    component: () => import('../views/ProfileView.vue')
  },
  // {
  //   path: '/employees',
  //   name: 'employees',
  //   component: () => import('../views/EmployeeView.vue')
  // },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/SigninView.vue')
  },
  {
    path: '/success',
    name: 'success',
    component: () => import('../views/SuccessView.vue')
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('../views/ErrorView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
