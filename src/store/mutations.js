import db from '../db';

export default {
    addSnippet(state, snippet) {
        if(!state.snippets) {
            state.snippets = [];
        }

        state.snippets.push(snippet);

        db.snippets.add(snippet).catch((error) => {
            console.error(error);
        });
    },
    removeSnippet(state, snippet) {
        for(let i = 0; i < state.snippets.length; i++) {
            if(state.snippets[i].id === snippet.id) {
                state.snippets.splice(i, 1);
                break;
            }
        }

        db.snippets.delete(snippet.id).catch((error) => {
            console.error(error);
        });
    },
    updateSnippet(state, snippet) {
        for(let i = 0; i < state.snippets.length; i++) {
            if(state.snippets[i].id === snippet.id) {
                state.snippets[i] = snippet;
                break;
            }
        }

        db.snippets.put(snippet).catch((error) => {
            console.error(error);
        });
    },
    cacheSnippets(state) {
        db.snippets.toArray().then((snippets) => {
            state.snippets = snippets;
        })
        .catch((error) => {
            console.error(error);
        });
    },
    listAllSnippets(state) {
        return db.snippets.toArray().then((data) => {
            state.snippets = data;
            return data;
        });
    },
    clearSnippets(state) {
        db.snippets.clear();
        state.snippets = [];
    }
}