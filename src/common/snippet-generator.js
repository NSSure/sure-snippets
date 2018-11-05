const SnippetGenerator = {
    install(Vue) {
        Vue.prototype.$snippet = {
            generate: function(name, shortcut, description, language, body) {
                let bodyComponents = [];

                body.split("\n").forEach(component => {
                    bodyComponents.push(`"${component}"`);
                });

                let template =
`{
    "${name}": {
        "prefix": "${shortcut}",
        "description": "${description}",
        "scope": "${language}",
        "body": [${bodyComponents}]
    }
}
                `;

                return template;
            },
            export: function(snippet) {
                var templateJson = this.generate(snippet.name, snippet.shortcut, 'Snippet description', 'JavaScript', snippet.content);

                const blob = new Blob([templateJson], {type: 'text/plain'})
                const e = document.createEvent('MouseEvents'),
                a = document.createElement('a');
                a.download = `${snippet.name}.json`;
                a.href = window.URL.createObjectURL(blob);
                a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
                e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                a.dispatchEvent(e);
            }            
        }
    }
}

export default SnippetGenerator;