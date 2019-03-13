<template>
  <div class="export component">
    <div class="panel-card">
      <div class="header form-inline">
        <button type="button" class="btn btn-danger mr-2" @click="$snippets.export($store.state.snippets)"><i class="fa fa-download"></i> Download</button>
        <button type="button" class="btn btn-secondary mr-3" @click="copy()"><i class="fa fa-copy"></i> Copy</button>
      </div>
      <div id="json-export-container" class="content">
        <div id="json-editor"></div> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "export",
  data: function() {
    return {
      exportEditor: null
    };
  },
  mounted() {
    this.exportEditor = this.$snippets.buildEditor('json-editor', 'json-export-container', 'ace/mode/json');
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
    copy() {
      this.$snippets.copy(this.$store.state.snippets);
      this.$sureToast.show("Snippet JSON copy successfully", { theme: "success" })
    }
  }
};
</script>

<style scoped>
.panel-card {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.panel-card > .content {
  flex: 1;
  padding: 0;
}

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

