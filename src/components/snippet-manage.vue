<template>
  <div class="snippet-manage component" v-if="snippet">
    <div class="form-ribbon form-row">
      <button type="button" class="btn btn-info mr-2" v-on:click="clear()"><i class="fa fa-plus"></i> New</button>
      <button type="button" class="btn btn-info mr-2" v-on:click="save()">Save</button>
      <button type="button" class="btn btn-info mr-2" v-on:click="$snippets.copy([snippet])" v-bind:disabled="!snippet.id" title="Copy the json output generate for this specific snippet">Copy JSON</button>
      <div class="form-group" style="margin-bottom: 0; align-self: center;">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" v-model="snippet.isGlobal">
          <label class="form-check-label" for="is-global">
            Global
          </label>
        </div>
      </div>
    </div>
    <form class="snippet-form">
        <div class="form-row">
          <div class="form-group col mr-2">
            <label>Name</label>
            <input type="text" class="form-control" v-model="snippet.name" placeholder="Snippet Name">
          </div>
          <div class="form-group col mr-2">
            <label>Prefix (Intellisense)</label>
            <input type="text" class="form-control" v-model="snippet.prefix" placeholder="Snippet Prefix" />
          </div>
          <div class="form-group col mr-2">
            <label>Description</label>
            <input type="text" class="form-control" v-model="snippet.description" placeholder="Snippet Description" />
          </div>
          <div class="form-group col">
            <label>Language Scope</label><br>
            <select class="form-control" v-model="snippet.scope" @change="snippetEditor.session.setMode(`ace/mode/${snippet.scope}`)" :disabled="snippet.isGlobal">
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
        <br>
        <div class="d-flex editors-row">
          <div class="d-flex" style="flex: .63;">
            <div class="panel-card">
              <div class="header">
                <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                  <button type="button" class="btn btn-secondary" @click="snippetEditor.container.webkitRequestFullscreen()">Fullscreen</button>
                  <tabstop-dropdown @token-selected="snippetEditor.session.insert(snippetEditor.getCursorPosition(), $event)"></tabstop-dropdown>
                  <variables-dropdown @token-selected="snippetEditor.session.insert(snippetEditor.getCursorPosition(), $event)"></variables-dropdown>
                </div>
              </div>
              <div id="snippet-editor-container" class="content">
                <div id="snippet-editor"></div> 
              </div>
            </div>
          </div>
          <div class="d-flex" style="flex: .35;">
            <div class="panel-card">
              <div class="header">
                <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                  <button type="button" class="btn btn-secondary" @click="jsonEditor.container.webkitRequestFullscreen()">Fullscreen</button>
                </div>
              </div>
              <div id="json-editor-container" class="content">
                <div id="json-editor"></div> 
              </div>
            </div>
          </div>
        </div>
    </form>
  </div>
</template>

<script>
import TabstopDropdown from './tabstop-dropdown';
import VariablesDropdown from './variables-dropdown';
import Snippet from "@/models/snippet.js";
import ace from "ace-builds";

export default {
  name: "snippet-manage",
  components: {
    TabstopDropdown,
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
    this.jsonEditor = this.buildEditor('json-editor', 'json-editor-container', 'ace/mode/json');

    if (this.$store.state.snippet) {
      this.snippet = this.$store.state.snippet;
      this.snippetEditor = this.buildEditor('snippet-editor', 'snippet-editor-container', `ace/mode/${this.snippet.scope}`);
      this.snippetEditor.setValue(this.snippet.content);
    }
    else {
      this.snippetEditor = this.buildEditor('snippet-editor', 'snippet-editor-container', 'ace/mode/javascript');
    }
  },
  methods: {
    buildEditor(elementId, containerElementId, mode) {
      let containingElement = document.getElementById(containerElementId);
      let lines = (containingElement.clientHeight) / 15;

      console.log(`Container Element Height: ${containingElement.clientHeight}`);
      console.log(`Lines: ${lines}`);

      let editor = ace.edit(null, {
        maxLines: lines,
        minLines: lines,
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
.form-ribbon {
  margin-bottom: 15px;
}

.panel-card .content {
  padding: 0;
}

.snippet-manage {
  background-color: #3A4149;
  margin: 50px;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 25px;
}

.snippet-manage > .snippet-form {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.snippet-manage > .snippet-form > .form-row .form-group {
  margin-bottom: 0;
}

.snippet-manage > .snippet-form > .editors-row {
  flex: 1;
  width: 100%;
  justify-content: space-between;
}

.snippet-manage > .snippet-form > .editors-row .panel-card {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.snippet-manage > .snippet-form > .editors-row .panel-card > .content {
  flex: 1;
}

pre,
code {
  background-color: transparent;
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
