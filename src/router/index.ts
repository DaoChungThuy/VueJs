import { createRouter, createWebHistory } from 'vue-router'
import main from './main'

const routes = [...main]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
