export default {
    addSnippet: ({commit}, snippet) => { commit('addSnippet',  snippet) },
    removeSnippet: ({commit}, snippet) => { commit('removeSnippet',  snippet) },
    updateSnippet: ({commit}, snippet) => { commit('updateSnippet',  snippet) },
    cacheSnippets: ({commit}) => { commit('cacheSnippets') },
    listAllSnippets: ({commit}) => { commit('listAllSnippets') },
    clearSnippets: ({commit}) => { commit('clearSnippets') },
}