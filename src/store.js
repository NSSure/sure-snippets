import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snippet: null,
    snippets: [],
    manualSelectionExport: false
  },
  getters: {

  },
  actions: {
    setSnippet: ({commit}, snippet) => { commit('setSnippet',  snippet) },
    addSnippet: ({commit}, snippet) => { commit('addSnippet',  snippet) },
    removeSnippet: ({commit}, snippet) => { commit('removeSnippet',  snippet) },
    updateSnippet: ({commit}, snippet) => { commit('updateSnippet',  snippet) },
    cacheSnippets: ({commit}) => { commit('cacheSnippets') },
    listAllSnippets: ({commit}) => { commit('listAllSnippets') },
    clearSnippets: ({commit}) => { commit('clearSnippets') },
    setCachedSnippets: ({commit}) => { commit('setCachedSnippets') },
    toggleManualSelectionExport: ({commit}) => { commit('toggleManualSelectionExport') }
  },
  mutations: {
    setSnippet(state, snippet) {
      state.snippet = snippet;
    },
    addSnippet(state, snippet) {
      if(!state.snippets) {
        state.snippets = [];
      }

      state.snippets.push(snippet);

      localStorage.setItem('snippets', JSON.stringify(state.snippets));
    },
    removeSnippet(state, snippet) {
      for(let i = 0; i < state.snippets.length; i++) {
        if(state.snippets[i].id === snippet.id) {
          state.snippets.splice(i, 1);
          break;
        }
      }

      let snippets = JSON.parse(localStorage.getItem('snippets'));
      let index = snippets.findIndex(x => x.name === snippet.name);
      snippets.splice(index, 1);

      localStorage.setItem('snippets', JSON.stringify(snippets));
    },
    updateSnippet(state, snippet) {
      for(let i = 0; i < state.snippets.length; i++) {
        if(state.snippets[i].id === snippet.id) {
          state.snippets[i] = snippet;
          break;
        }
      }

      let snippets = JSON.parse(localStorage.getItem('snippets'));
      let index = snippets.findIndex(x => x.name === snippet.name);
      snippets[index] = snippets;

      localStorage.setItem('snippets', JSON.stringify(snippets));
    },
    listAllSnippets() {
      return JSON.parse(localStorage.getItem('snippets'));
    },
    clearSnippets() {
      localStorage.removeItem('snippets');
    },
    setCachedSnippets(state) {
      state.snippets = JSON.parse(localStorage.getItem('snippets'))
    },
    toggleManualSelectionExport(state) {
      state.manualSelectionExport = !state.manualSelectionExport;
    }
  }
})
