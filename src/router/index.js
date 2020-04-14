import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Work from '@/components/Work'
import About from '@/components/About'
import Other from '@/components/Other'

Vue.use(Router)

export default new Router({
  routes: [
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
})