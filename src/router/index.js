import { createRouter, createWebHistory } from 'vue-router'
import Top from '@/components/Top.vue'
import Work from '@/components/Work.vue'
import About from '@/components/About.vue'
import Other from '@/components/Other.vue'

const routes = [
  {
    path: '/',
    component: Top
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/work',
    component: Work
  },
  {
    path: '/other',
    component: Other
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
