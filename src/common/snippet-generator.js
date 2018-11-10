const SnippetGenerator = {
    install(Vue) {
        Vue.prototype.$snippet = {
            generate(snippet, tabs) {
                let bodyComponents = [];

                snippet.content.split("\n").forEach(component => {
                    bodyComponents.push(`"${component}"`);
                });

                let indentations = '';

                if (!tabs) {
                    tabs = 1
                }
                else {
                    for (let i = 0; i < tabs; i++) {
                        indentations += '\t';
                    }
                }

                let template =

`${indentations}"${snippet.name}": {
${indentations}\t"prefix": "${snippet.prefix}",
${indentations}\t"description": "${snippet.description}",
${indentations}\t"body": [${bodyComponents}]
${indentations}\t}`;

                return template;
            },
            export (snippet) {
                var templateJson = this.generate(snippet);

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