import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import OfferDetailsView from '../views/OfferDetailsView.vue'
import UserDetails from '../views/UserDetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/OfferDetails/:id',
    name: 'offerDetails',
    component: OfferDetailsView
  },
  {
    path: '/UserDetails',
    name: 'userDetails',
    component: UserDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router