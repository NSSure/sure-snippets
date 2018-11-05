import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import VueHighlightJS from 'vue-highlightjs';
import SnippetGenerator from './common/snippet-generator';

Vue.config.productionTip = false;

Vue.use(VueHighlightJS);
Vue.use(SnippetGenerator);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
