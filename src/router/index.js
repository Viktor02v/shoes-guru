import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue' 
import Man from '../views/MenView.vue'

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
  ]
})

export default router
