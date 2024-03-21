import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: '/',
    name: 'powerView',
    component: import('@/views/powerView/powerView.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
