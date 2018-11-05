<template>
  <div class="snippet-manage">
    <div class="form-group">
        <button type="button" class="btn btn-secondary mr-2" v-on:click="clear()"><i class="fa fa-plus"></i> New</button>
        <button type="button" class="btn btn-secondary mr-2" v-on:click="copy()">Copy</button>
        <button type="button" class="btn btn-secondary mr-2" v-on:click="save()">Save</button>
        <button type="button" class="btn btn-secondary mr-2" v-on:click="alert('test')" data-toggle="modal" data-target="#preview-modal">Preview</button>
    </div>
    <form>
        <div class="form-group mr-2">
            <label>Name</label>
            <input type="text" class="form-control" v-model="snippet.name" placeholder="Snippet Name">
        </div>
        <div class="form-group mr-2">
            <label>Prefix (Defines Intellisense autocompletion)</label>
            <input type="text" class="form-control" v-model="snippet.prefix" placeholder="Snippet Prefix" />
        </div>
        <div class="row mb-3">
            <div class="col">
              <button type="button" class="btn btn-secondary mr-2" v-on:click="copy()">Snippet Generator</button>
              <button type="button" class="btn btn-secondary mr-2" v-on:click="copy()">Manual Format</button>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col">
                <label>Enter your code contents here</label>
                <textarea class="form-control" rows="15" v-model="snippet.content"></textarea>
                <div class="editor">
                  <div class="line-numbers">
                      <div class="line-number">1</div>
                  </div>
                  <div id="editor-backdrop" class="editor-backdrop">

                  </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label>Formatted Preview</label>
                <pre v-highlightjs="templateJson"><code class="json"></code></pre>
            </div>
        </div>
    </form>
    <div class="modal" id="preview-modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <button class="btn btn-secondary mr-2" v-on:click="copy(snippet)" title="Copy to clipboard"><i class="fa fa-copy"></i></button>
            <button class="btn btn-danger mr-2" v-on:click="$snippet.export(snippet)" title="Download snippet template"><i class="fa fa-download"></i></button>
            <pre v-highlightjs style="agate">
              <code class="json">
"${name}": {
    "prefix": "${prefix}",
    "description": "${description}",
    "body": [${bodyComponents}]
}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Snippet from "@/models/snippet.js";

export default {
  name: "ManageSnippet",
  props: {
    snippet: { Type: Snippet, default: new Snippet() }
  },
  data: function() {
    return {
      templateJson: "",
      string: ""
    };
  },
  methods: {
    save: function() {
      if (!this.snippet.id) {
        this.$store.dispatch("addSnippet", this.snippet);
        this.$emit("snippet-added");
      } else {
        this.$store.dispatch("updateSnippet", this.snippet);
      }

      this.templateJson = this.$snippet.generate(
        this.snippet.name,
        this.snippet.shortcut,
        "Snippet description",
        "JavaScript",
        this.snippet.content
      );

      this.$popup.show(
        `${this.snippet.name} snippet added successfully.`,
        5000
      );
    },
    copy() {
      var dummy = document.createElement("input");
      document.body.appendChild(dummy);
      dummy.setAttribute("id", "dummy_id");
      document.getElementById("dummy_id").value = this.snippet.content;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    },
    clear() {
      this.snippet = new Snippet();
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
