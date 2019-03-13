import Vue from 'vue';
import Router from 'vue-router';
import SnippetsList from './components/snippets-list.vue';
import About from './components/about.vue';
import SnippetManage from './components/snippet-manage.vue';
import Export from './components/export.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'snippets',
      component: SnippetsList
    },
    {
      path: '/snippet',
      name: 'snippetManage',
      component: SnippetManage
    },
    {
      path: '/export',
      name: 'export',
      component: Export
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
});