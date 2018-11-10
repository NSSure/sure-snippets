<template>
  <div id="parent" class="export">
    <div id="editor"></div> 
  </div>
</template>

<script>
import ace from 'ace-builds';

export default {
  name: "ManageSnippet",
  data: function() {
    return {
      exportEditor: null
    };
  },
  mounted() {
    this.exportEditor = this.buildEditor("editor", "ace/mode/javascript", "var hello = 'world'" + "\n");

    let content = '';

    this.$store.state.snippets.forEach((snippet, index) => {
      if (index === 0) {
        content += `\t${this.$snippet.generate(snippet)}`;
      }
      else {
        content += `,\n\r${this.$snippet.generate(snippet)}`;
      }
    });

    content = `{\n${content}\n}`;

    this.exportEditor.setValue(content);
  },
  methods: {
    buildEditor (elementId, mode, defaultValue) {
      // nav - 60, line - 15
      let lines = (window.innerHeight - 60) / 15;

      let editor = ace.edit(null, {
        value: defaultValue,
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
    }
  }
};
</script>

<style scoped>

</style>

