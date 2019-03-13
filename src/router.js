import Vue from 'vue'
import Router from 'vue-router'
import Default from './components/default.vue'
import About from './components/about.vue'
import SnippetManage from './components/snippet-manage.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'snippets',
      component: Default
    },
    {
      path: '/snippet',
      name: 'snippetManage',
      component: SnippetManage
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
});