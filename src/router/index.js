import Vue from 'vue'
import Router from 'vue-router'

/* components */
import database from '@/components/database'
import singlePageApp from '@/components/singlePageApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'singlePageApp',
      component: singlePageApp
    },
    {
      path: '/database',
      name: 'database',
      component: database
    }
  ],
  mode: 'history'
})
