import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import Snippets from './views/Snippets.vue'
import Export from './views/Export.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'snippets',
      component: Snippets
    },
    {
      path: '/',
      name: 'snippet',
      component: Snippets
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/export',
      name: 'export',
      component: Export
    }
  ]
})
