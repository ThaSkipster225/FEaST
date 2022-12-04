import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterModal from '@/components/RegisterModal.vue'
import LoginModal from '@/components/LoginModal.vue'
import BuckStopVue from '@/views/BuckStop.vue'
import KazanSushiVue from '@/views/KazanSushi.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pretzelplace',
    name: 'pretzelplace',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pretzelplace.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LoginModal
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterModal
  },
  {
    path: '/buckstop',
    name: 'buckstop',
    component: BuckStopVue
  },
  {
    path: '/sushi',
    name: 'sushi',
    component: KazanSushiVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
