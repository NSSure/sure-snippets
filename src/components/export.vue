<template>
  <div class="export">
    <div class="panel-card">
      <div class="header form-inline">
        <button type="button" class="btn btn-danger mr-2" @click="$snippets.export($store.state.snippets)"><i class="fa fa-download"></i> Download</button>
        <button type="button" class="btn btn-secondary mr-3" @click="$snippets.copy($store.state.snippets)"><i class="fa fa-copy"></i> Copy</button>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="enableManualSelection">
          <label class="form-check-label" for="defaultCheck1">
            Manual selection export
          </label>
        </div>
      </div>
      <div class="content">
        <div id="editor"></div> 
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
  computed: {
    enableManualSelection: {
      get() {
        return this.$store.state.enableManualSelection;
      },
      set() {
        this.$store.commit('toggleManualSelectionExport');
      }
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
</style>

