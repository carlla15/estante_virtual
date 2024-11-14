import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookcaseView from '../views/BookcaseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/book/:id',
      name: 'BookDetail',
      props: true,
      component: () => import('../views/BookDetail.vue')
    }
    ,
    {
      path: '/authentication',
      name: 'authentication',
      component: () => import('../views/AuthView.vue')
    },

    {
      path: '/bookcase',
      name: 'bookcase',
      component: () => import('../views/BookcaseView.vue') 

    }
  ]
})

export default router
