<template>
  <div class="snippet-manage">
    <div class="form-group">
        <button type="button" class="btn btn-secondary mr-2" v-on:click="clear()"><i class="fa fa-plus"></i> New</button>
        <button type="button" class="btn btn-secondary mr-2" v-on:click="save()">Save</button>
        <button type="button" class="btn btn-secondary mr-2" v-on:click="$snippets.copy([snippet])" v-bind:disabled="!isEditMode" title="Copy the json output generate for this specific snippet">Copy JSON</button>
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
            <div class="form-group mr-2">
              <label>Language Scope</label><br>
              <select v-model="snippet.scope">
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
            <label>Enter your code contents here</label>&nbsp;&nbsp;
            <select id="mode" @change="editor.session.setMode(mode)" v-model="mode"><option value="ace/mode/abap">ABAP</option><option value="ace/mode/abc">ABC</option><option value="ace/mode/actionscript">ActionScript</option><option value="ace/mode/ada">ADA</option><option value="ace/mode/apache_conf">Apache Conf</option><option value="ace/mode/asciidoc">AsciiDoc</option><option value="ace/mode/asl">ASL</option><option value="ace/mode/assembly_x86">Assembly x86</option><option value="ace/mode/autohotkey">AutoHotKey</option><option value="ace/mode/batchfile">BatchFile</option><option value="ace/mode/bro">Bro</option><option value="ace/mode/c_cpp">C and C++</option><option value="ace/mode/c9search">C9Search</option><option value="ace/mode/cirru">Cirru</option><option value="ace/mode/clojure">Clojure</option><option value="ace/mode/cobol">Cobol</option><option value="ace/mode/coffee">CoffeeScript</option><option value="ace/mode/coldfusion">ColdFusion</option><option value="ace/mode/csharp">C#</option><option value="ace/mode/csound_document">Csound Document</option><option value="ace/mode/csound_orchestra">Csound</option><option value="ace/mode/csound_score">Csound Score</option><option value="ace/mode/css">CSS</option><option value="ace/mode/curly">Curly</option><option value="ace/mode/d">D</option><option value="ace/mode/dart">Dart</option><option value="ace/mode/diff">Diff</option><option value="ace/mode/dockerfile">Dockerfile</option><option value="ace/mode/dot">Dot</option><option value="ace/mode/drools">Drools</option><option value="ace/mode/edifact">Edifact</option><option value="ace/mode/eiffel">Eiffel</option><option value="ace/mode/ejs">EJS</option><option value="ace/mode/elixir">Elixir</option><option value="ace/mode/elm">Elm</option><option value="ace/mode/erlang">Erlang</option><option value="ace/mode/forth">Forth</option><option value="ace/mode/fortran">Fortran</option><option value="ace/mode/fsharp">FSharp</option><option value="ace/mode/ftl">FreeMarker</option><option value="ace/mode/gcode">Gcode</option><option value="ace/mode/gherkin">Gherkin</option><option value="ace/mode/gitignore">Gitignore</option><option value="ace/mode/glsl">Glsl</option><option value="ace/mode/gobstones">Gobstones</option><option value="ace/mode/golang">Go</option><option value="ace/mode/graphqlschema">GraphQLSchema</option><option value="ace/mode/groovy">Groovy</option><option value="ace/mode/haml">HAML</option><option value="ace/mode/handlebars">Handlebars</option><option value="ace/mode/haskell">Haskell</option><option value="ace/mode/haskell_cabal">Haskell Cabal</option><option value="ace/mode/haxe">haXe</option><option value="ace/mode/hjson">Hjson</option><option value="ace/mode/html">HTML</option><option value="ace/mode/html_elixir">HTML (Elixir)</option><option value="ace/mode/html_ruby">HTML (Ruby)</option><option value="ace/mode/ini">INI</option><option value="ace/mode/io">Io</option><option value="ace/mode/jack">Jack</option><option value="ace/mode/jade">Jade</option><option value="ace/mode/java">Java</option><option value="ace/mode/javascript">JavaScript</option><option value="ace/mode/json">JSON</option><option value="ace/mode/jsoniq">JSONiq</option><option value="ace/mode/jsp">JSP</option><option value="ace/mode/jssm">JSSM</option><option value="ace/mode/jsx">JSX</option><option value="ace/mode/julia">Julia</option><option value="ace/mode/kotlin">Kotlin</option><option value="ace/mode/latex">LaTeX</option><option value="ace/mode/less">LESS</option><option value="ace/mode/liquid">Liquid</option><option value="ace/mode/lisp">Lisp</option><option value="ace/mode/livescript">LiveScript</option><option value="ace/mode/logiql">LogiQL</option><option value="ace/mode/lsl">LSL</option><option value="ace/mode/lua">Lua</option><option value="ace/mode/luapage">LuaPage</option><option value="ace/mode/lucene">Lucene</option><option value="ace/mode/makefile">Makefile</option><option value="ace/mode/markdown">Markdown</option><option value="ace/mode/mask">Mask</option><option value="ace/mode/matlab">MATLAB</option><option value="ace/mode/maze">Maze</option><option value="ace/mode/mel">MEL</option><option value="ace/mode/mixal">MIXAL</option><option value="ace/mode/mushcode">MUSHCode</option><option value="ace/mode/mysql">MySQL</option><option value="ace/mode/nix">Nix</option><option value="ace/mode/nsis">NSIS</option><option value="ace/mode/objectivec">Objective-C</option><option value="ace/mode/ocaml">OCaml</option><option value="ace/mode/pascal">Pascal</option><option value="ace/mode/perl">Perl</option><option value="ace/mode/pgsql">pgSQL</option><option value="ace/mode/php_laravel_blade">PHP (Blade Template)</option><option value="ace/mode/php">PHP</option><option value="ace/mode/puppet">Puppet</option><option value="ace/mode/pig">Pig</option><option value="ace/mode/powershell">Powershell</option><option value="ace/mode/praat">Praat</option><option value="ace/mode/prolog">Prolog</option><option value="ace/mode/properties">Properties</option><option value="ace/mode/protobuf">Protobuf</option><option value="ace/mode/python">Python</option><option value="ace/mode/r">R</option><option value="ace/mode/razor">Razor</option><option value="ace/mode/rdoc">RDoc</option><option value="ace/mode/red">Red</option><option value="ace/mode/rhtml">RHTML</option><option value="ace/mode/rst">RST</option><option value="ace/mode/ruby">Ruby</option><option value="ace/mode/rust">Rust</option><option value="ace/mode/sass">SASS</option><option value="ace/mode/scad">SCAD</option><option value="ace/mode/scala">Scala</option><option value="ace/mode/scheme">Scheme</option><option value="ace/mode/scss">SCSS</option><option value="ace/mode/sh">SH</option><option value="ace/mode/sjs">SJS</option><option value="ace/mode/slim">Slim</option><option value="ace/mode/smarty">Smarty</option><option value="ace/mode/snippets">snippets</option><option value="ace/mode/soy_template">Soy Template</option><option value="ace/mode/space">Space</option><option value="ace/mode/sql">SQL</option><option value="ace/mode/sqlserver">SQLServer</option><option value="ace/mode/stylus">Stylus</option><option value="ace/mode/svg">SVG</option><option value="ace/mode/swift">Swift</option><option value="ace/mode/tcl">Tcl</option><option value="ace/mode/terraform">Terraform</option><option value="ace/mode/tex">Tex</option><option value="ace/mode/text">Text</option><option value="ace/mode/textile">Textile</option><option value="ace/mode/toml">Toml</option><option value="ace/mode/tsx">TSX</option><option value="ace/mode/twig">Twig</option><option value="ace/mode/typescript">Typescript</option><option value="ace/mode/vala">Vala</option><option value="ace/mode/vbscript">VBScript</option><option value="ace/mode/velocity">Velocity</option><option value="ace/mode/verilog">Verilog</option><option value="ace/mode/vhdl">VHDL</option><option value="ace/mode/wollok">Wollok</option><option value="ace/mode/xml">XML</option><option value="ace/mode/xquery">XQuery</option><option value="ace/mode/yaml">YAML</option><option value="ace/mode/django">Django</option></select>
          </div>
          <div class="content">
            <div id="snippet-editor"></div> 
          </div>
        </div>
        <br>
        <div class="panel-card">
          <div class="header">
            <label>Formatted JSON Ouput</label>
          </div>
          <div class="content">
            <div id="json-editor"></div> 
          </div>
        </div>
    </form>
  </div>
</template>

<script>
import Snippet from "@/models/snippet.js";
import ace from "ace-builds";
import { identifiers } from "../../language-identifiers";

let lines = identifiers.split("\n");

let select = `<select>\n`;

lines.forEach(line => {
  let pair = line.split("\t");
  let option = `<option value="${pair[1]}">${pair[0]}</option>\n`;
  select += option;
});

select = select + "</select>";

console.log(select);

export default {
  name: "ManageSnippet",
  props: {
    isEditMode: false
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
    this.snippetEditor = this.buildEditor("snippet-editor", "ace/mode/javascript");
    this.jsonEditor = this.buildEditor("json-editor", "ace/mode/json");

    if (this.$store.state.snippet) {
      this.snippet = this.$store.state.snippet;
      console.log(this.snippet);
      this.snippetEditor.setValue(
        // this.$snippets.toStringify(this.snippet.content)
        this.snippet.content
      );
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
      this.snippet.language = this.mode.split("/")[2].toUpperCase();

      if (!this.snippet.id) {
        this.$store.dispatch("addSnippet", this.snippet);
        this.$emit("snippet-added");
      } else {
        this.$store.dispatch("updateSnippet", this.snippet);
      }

      let snippetDefinition = this.$snippets.generate(this.snippet);
      this.snippet.body = snippetDefinition.body;

      this.jsonEditor.setValue(
        this.$snippets.toStringify(snippetDefinition),
        -1
      );
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
