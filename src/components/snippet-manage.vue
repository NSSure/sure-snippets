<template>
  <div class="snippet-manage" v-if="snippet">
    <div class="form-group">
        <button type="button" class="btn btn-secondary mr-2" v-on:click="clear()"><i class="fa fa-plus"></i> New</button>
        <button type="button" class="btn btn-secondary mr-2" v-on:click="save()">Save</button>
        <button type="button" class="btn btn-secondary mr-2" v-on:click="$snippets.copy([snippet])" v-bind:disabled="!snippet.id" title="Copy the json output generate for this specific snippet">Copy JSON</button>
    </div>
    <form>
        <div class="panel-card">
          <div class="content">
            <div class="form-group mr-2">
              <label>Name</label>
              <input type="text" class="form-control" v-model="snippet.name" placeholder="Snippet Name">
            </div>
            <div class="form-group mr-2">
              <label>Prefix (Defines Intellisense autocompletion)</label>
              <input type="text" class="form-control" v-model="snippet.prefix" placeholder="Snippet Prefix" />
            </div>
            <div class="form-group mr-2">
              <label>Description</label>
              <input type="text" class="form-control" v-model="snippet.description" placeholder="Snippet Description" />
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" v-model="snippet.isGlobal">
              <label class="form-check-label" for="is-global">
                Global
              </label>
            </div>
            <div class="form-group mr-2" v-if="!snippet.isGlobal">
              <label>Language Scope</label><br>
              <select v-model="snippet.scope" @change="snippetEditor.session.setMode(`ace/mode/${snippet.scope}`)">
                <option value="abap">ABAP</option>
                <option value="bat">Windows Bat</option>
                <option value="bibtex">BibTeX</option>
                <option value="clojure">Clojure</option>
                <option value="coffeescript">Coffeescript</option>
                <option value="c">C</option>
                <option value="cpp">C++</option>
                <option value="csharp">C#</option>
                <option value="css">CSS</option>
                <option value="diff">Diff</option>
                <option value="dockerfile">Dockerfile</option>
                <option value="fsharp">F#</option>
                <option value="git-commit and git-rebase">Git</option>
                <option value="go">Go</option>
                <option value="groovy">Groovy</option>
                <option value="handlebars">Handlebars</option>
                <option value="html">HTML</option>
                <option value="ini">Ini</option>
                <option value="java">Java</option>
                <option value="javascript">JavaScript</option>
                <option value="javascriptreact">JavaScript React</option>
                <option value="json">JSON</option>
                <option value="jsonc">JSON with Comments</option>
                <option value="latex">LaTeX</option>
                <option value="less">Less</option>
                <option value="lua">Lua</option>
                <option value="makefile">Makefile</option>
                <option value="markdown">Markdown</option>
                <option value="objective-c">Objective-C</option>
                <option value="objective-cpp">Objective-C++</option>
                <option value="perl and perl6">Perl</option>
                <option value="php">PHP</option>
                <option value="powershell">Powershell</option>
                <option value="jade">Pug</option>
                <option value="python">Python</option>
                <option value="r">R</option>
                <option value="razor">Razor (cshtml)</option>
                <option value="ruby">Ruby</option>
                <option value="rust">Rust</option>
                <option value="scss (syntax using curly brackets), sass (indented syntax)">SCSS</option>
                <option value="shaderlab">ShaderLab</option>
                <option value="shellscript">Shell Script (Bash)</option>
                <option value="sql">SQL</option>
                <option value="swift">Swift</option>
                <option value="typescript">TypeScript</option>
                <option value="typescriptreact">TypeScript React</option>
                <option value="tex">TeX</option>
                <option value="vb">Visual Basic</option>
                <option value="xml">XML</option>
                <option value="xsl">XSL</option>
                <option value="yaml">YAML</option>
              </select>
            </div>
          </div>
        </div>
        <br>
        <div class="panel-card">
          <div class="header">
            <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
              <button type="button" class="btn btn-secondary" @click="snippetEditor.container.webkitRequestFullscreen()">Fullscreen</button>
              <tabstops-dropdown @tabstop-selected="snippetEditor.session.insert(snippetEditor.getCursorPosition(),`${ $event}`)"></tabstops-dropdown>
              <button type="button" class="btn btn-secondary">Placeholders</button>
              <button type="button" class="btn btn-secondary">Choice</button>
              <variables-dropdown @variable-selected="snippetEditor.session.insert(snippetEditor.getCursorPosition(),`$${ $event}`)"></variables-dropdown>
            </div>
          </div>
          <div class="content">
            <div id="snippet-editor"></div> 
          </div>
        </div>
        <br>
        <div class="panel-card">
          <div class="header">
            <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
              <button type="button" class="btn btn-secondary" @click="jsonEditor.container.webkitRequestFullscreen()">Fullscreen</button>
            </div>
          </div>
          <div class="content">
            <div id="json-editor"></div> 
          </div>
        </div>
    </form>
  </div>
</template>

<script>
import TabstopsDropdown from './tabstops-dropdown';
import VariablesDropdown from './variables-dropdown';
import Snippet from "@/models/snippet.js";
import ace from "ace-builds";
// import { identifiers } from "../../language-identifiers";

// let lines = identifiers.split("\n");

// let select = `<select>\n`;

// lines.forEach(line => {
//   let pair = line.split("\t");
//   let option = `<option value="${pair[1]}">${pair[0]}</option>\n`;
//   select += option;
// });

// select = select + "</select>";

export default {
  name: "ManageSnippet",
  components: {
    TabstopsDropdown,
    VariablesDropdown
  },
  data: function() {
    return {
      string: "",
      snippetEditor: null,
      jsonEditor: null,
      mode: "ace/mode/javascript",
      snippet: new Snippet()
    };
  },
  mounted() {
    this.jsonEditor = this.buildEditor("json-editor", "ace/mode/json");

    console.log(this.$store.state.snippet);

    if (this.$store.state.snippet) {
      this.snippet = this.$store.state.snippet;
      this.snippetEditor = this.buildEditor("snippet-editor", `ace/mode/${this.snippet.scope}`);
      this.snippetEditor.setValue(this.snippet.content);
    }
    else {
      this.snippetEditor = this.buildEditor("snippet-editor", "ace/mode/javascript");
    }
  },
  methods: {
    buildEditor(elementId, mode, defaultValue) {
      let editor = ace.edit(null, {
        maxLines: 15,
        minLines: 15,
        value: defaultValue,
        mode: mode,
        bug: 1,
        theme: "ace/theme/chaos",
        showPrintMargin: false,
        highlightActiveLine: false
      });

      let element = document.getElementById(elementId);
      element.appendChild(editor.container);

      return editor;
    },
    save() {
      this.snippet.includeInExport = true;
      this.snippet.content = this.snippetEditor.getValue();
      this.snippet.content = this.snippet.content.replace(/"/g, "'");
      this.snippet.language = this.mode.split("/")[2].toLowerCase();
      console.log(this.snippet);

      if (!this.snippet.id) {
        this.$store.dispatch("addSnippet", this.snippet);
        this.$emit("snippet-added");
      } else {
        this.$store.dispatch("updateSnippet", this.snippet);
      }

      let snippetDefinition = this.$snippets.generate(this.snippet);
      this.snippet.body = snippetDefinition.body;
      this.jsonEditor.setValue(this.$snippets.toStringify(snippetDefinition), -1);
      this.$sureToast.show("Snippet added successfully", { theme: "success" });
    },
    clear() {
      this.snippet = new Snippet();
      this.$store.dispatch("setSnippet", null);
      this.snippetEditor.setValue("");
      this.jsonEditor.setValue("");
    }
  }
};
</script>

<style scoped>
pre,
code {
  background-color: transparent;
}

.modal-header {
  background-color: #323232;
}

.modal-body {
  background-color: #323232;
}

.shortcut-div {
  background-color: #383838;
  border: 1px solid #252526;
  border: none;
  color: #a7a7a7;
}

.shortcut-div:focus {
  background-color: #c81e38;
}
</style>
