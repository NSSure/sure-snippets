const SnippetGenerator = {
    install(Vue) {
        Vue.prototype.$snippets = {
            generate(snippet) {
                let bodyComponents = [];

                snippet.content.split("\n").forEach(component => {
                    bodyComponents.push(`${component}`);
                });

                return {
                    prefix: snippet.prefix,
                    body: bodyComponents,
                    description: snippet.description
                };
            },

            toStringify(jsonObject) {
                return JSON.stringify(jsonObject, null, "\t");
            },

            consolidate(snippets) {
                let exportObject = {};
                console.log(snippets);
                snippets.forEach(snippet => {
                    exportObject[snippet.name] = this.generate(snippet);
                });

                return exportObject;
            },

            copy(snippets) {
                let exportObject = this.consolidate(snippets);
                let text = this.toStringify(exportObject);
                let dummy = document.createElement("input");
                document.body.appendChild(dummy);
                dummy.setAttribute("id", "dummy_id");
                document.getElementById("dummy_id").value = text;
                dummy.select();
                document.execCommand("copy");
                document.body.removeChild(dummy);
            },
            
            export (snippets) {
                let exportObject = this.consolidate(snippets);
                this.download(exportObject);
            },

            download(object) {
                const blob = new Blob([JSON.stringify(object)], {type: 'text/plain'})
                const e = document.createEvent('MouseEvents'),
                a = document.createElement('a');
                a.download = 'snippets.json';
                a.href = window.URL.createObjectURL(blob);
                a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
                e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                a.dispatchEvent(e);
            }
        }
    }
}

export default SnippetGenerator;