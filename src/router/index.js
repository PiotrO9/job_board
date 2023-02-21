import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import OfferDetailsView from '../views/OfferDetailsView.vue'
import UserDetailsView from '../views/UserDetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/OfferDetails',
    name: 'offerDetails',
    component: OfferDetailsView
  },
  {
    path: '/UserDetailsView',
    name: 'UserDetailsView',
    component: UserDetailsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router