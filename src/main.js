import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueHighlightJS from 'vue-highlightjs';
import SnippetGenerator from './common/snippet-generator';
import SureToast from 'vue-sure-toast';

Vue.config.productionTip = false;

Vue.use(VueHighlightJS);
Vue.use(SnippetGenerator);
Vue.use(SureToast);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
