<template>
  <div class="export">
    <ul class="nav nav-tabs nav-fill">
      <li class="nav-item">
        <a class="nav-link active" id="snippet-tab" data-toggle="tab" href="#export" role="tab">Export JSON</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="snippet-tab" data-toggle="tab" href="#snippet" role="tab">Export Payload</a>
      </li>
    </ul>
    <!-- Tab panes -->
    <div class="tab-content">
      <div class="tab-pane active" id="export" role="tabpanel">
        <div class="panel-card">
          <div class="header form-inline">
            <button type="button" class="btn btn-danger mr-2" @click="$snippets.export($store.state.snippets)"><i class="fa fa-download"></i> Download</button>
            <button type="button" class="btn btn-secondary mr-3" @click="$snippets.copy($store.state.snippets)"><i class="fa fa-copy"></i> Copy</button>
          </div>
          <div class="content">
            <div id="editor"></div> 
          </div>
        </div>
      </div>
      <div class="tab-pane" id="snippet" role="tabpanel">
        <table class="table table-dark">
          <thead class="thead-dark">
            <tr>
              <th width="5%"></th>
              <th>Snippet</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(snippet, index) of $store.state.snippets" :key="snippet.id">
              <td>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" :id="'include-in-export-' + index" v-model="snippet.includeInExport" @change="updateSnippetExport(snippet)">
                  <label class="form-check-label" :for="'include-in-export-' + index"></label>
                </div>
              </td>
              <td>{{snippet.language}} - {{snippet.name}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ace from "ace-builds";

export default {
  name: "export",
  data: function() {
    return {
      exportEditor: null
    };
  },
  watch: {
    '$store.state.snippets': {
      handler() {
        console.log('test')
        this.setEditorValue();        
      },
      deep: true
    }
  },
  mounted() {
    this.exportEditor = this.buildEditor("editor", "ace/mode/json");
    this.setEditorValue();
  },
  methods: {
    setEditorValue() {
      if (this.$store.state.snippets) {
        let snippets = this.$store.state.snippets.filter(x => x.includeInExport);
        let exportObject = this.$snippets.consolidate(snippets);
        this.exportEditor.setValue(this.$snippets.toStringify(exportObject));
      }
    },
    buildEditor(elementId, mode) {
      // 215 is the height of the height, padding, and margin of the elements around the editor so we can calc the full screen height.
      let lines = (window.innerHeight - 215) / 15;

      let editor = ace.edit(null, {
        maxLines: lines,
        minLines: lines,
        mode: mode,
        theme: "ace/theme/chaos",
        showPrintMargin: false,
        highlightActiveLine: false
      });

      let element = document.getElementById(elementId);
      element.appendChild(editor.container);

      return editor;
    }
  }
};
</script>

<style scoped>
.editor-ribbon {
  padding: 15px;
  background-color: #252526;
}

  .tab-pane {
    padding-top: 15px;
  }
  .nav-tabs {
    border: none;
    background-color: #282828;
    padding: 15px;
  }
  .nav-link {
    color: #f7f7f7;
  }
  .nav-link:hover {
    color: #f7f7f7;
    background-color: #111;
    border: 1px solid transparent;
    border-radius: 25px;
  }
  .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    background-color: #333;
    color: #FDB81F;
    border: none;
    border-radius: 25px;
  }
</style>

