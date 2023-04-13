import { createRouter, createWebHistory } from 'vue-router'

const UserDetailsView = () => import('../views/UserDetailsView.vue')
const OfferDetailsView = () => import('../views/OfferDetailsView.vue')
const MainView = () => import('../views/MainView.vue')

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