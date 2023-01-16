import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import DetailView from '../views/DetailView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/details/:id',
    name: 'details',
    component: DetailView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
