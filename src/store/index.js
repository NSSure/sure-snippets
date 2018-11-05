import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import db from '../db';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snippets: []
  },
  getters: {
    getSnippets: state => state.snippets,
    listAllSnippets: (state) => () => {
      console.log(state);
      return db.snippets.toArray();
    }
  },
  actions,
  mutations
})