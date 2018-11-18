import Vue from 'vue'
import Router from 'vue-router'
import Default from './components/default.vue'
import About from './components/about.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'snippets',
      component: Default
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
