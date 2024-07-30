import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue' 
import Man from '../views/MenView.vue'
import NikeGiftCard from '../views/NikeGiftCard.vue'
import Woman from'../views/WomenView.vue'
import Membership from'../views/BecomeAMemberView.vue'
import NIKExNBA from'../views/NIKExNBAxView.vue'
import Store from'../views/FindAStoreView.vue'

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
	 {
      path: '/nike-nba',
      name: 'nike-nba',
      component: NIKExNBA,
    },
	 {
      path: '/find-a-store',
      name: 'find-a-store',
      component: Store,
    },
  ]
})

export default router
