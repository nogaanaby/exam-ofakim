import Vue from 'vue'
import Router from 'vue-router'

/* components */
import navBar from '@/components/navBar'
import signIn from '@/components/signIn'
import home from '@/components/home'
import slider from '@/components/slider'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App'
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: signIn
    },
    {
      path: '/navBar',
      name: 'navBar',
      component: navBar
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/slider',
      name: 'slider',
      component: slider
    }
  ],
  mode: 'history'
})
