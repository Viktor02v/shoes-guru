import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue' 
import Man from '../views/MenView.vue'
import NikeGiftCard from '../views/NikeGiftCard.vue'
import Woman from'../views/WomenView.vue'
import Membership from'../views/BecomeAMemberView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
	 {
      path: '/man',
      name: 'man',
      component: Man
    },
	 {
      path: '/gift-card',
      name: 'gift-card',
      component: NikeGiftCard
    },
	 {
      path: '/woman',
      name: 'woman',
      component: Woman
    },
	 {
      path: '/membership',
      name: 'membership',
      component: Membership,
    },
  ]
})

export default router
