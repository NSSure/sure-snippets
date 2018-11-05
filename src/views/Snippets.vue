<template>
  <div class="snippets h-100">
      <div class="snippets-list-container d-flex h-100">
        <div class="w-50">
          <div class="mr-3">
            <button class="btn btn-danger mb-3 my-3 float-right" v-on:click="$store.dispatch('clearSnippets')">Clear Snippets</button>
          </div>
          <snippets-list v-on:view-snippet="viewSnippet"></snippets-list>
        </div>
        <div class="snippet-container w-50">
            <snippet-manage :snippet="snippet"></snippet-manage>
        </div>
      </div>
  </div>
</template>

<script>
import SnippetsList from "@/components/snippets-list.vue";
import SnippetManage from "@/components/snippet-manage.vue";

import Snippet from "@/models/snippet.js";

export default {
  name: "snippets",
  components: {
    SnippetsList,
    SnippetManage
  },
  data: function() {
    return {
      isAddMode: false,
      snippet: new Snippet()
    };
  },
  methods: {
    addSnippet() {
      this.$store.actions.addSnippet();
    },
    viewSnippet(snippet) {
      this.snippet = snippet;
    }
  }
};
</script>

<style scoped>
  .snippets {
    display: flex;
    flex-direction: column;
  }

  .snippets-list-container {
    background-color: #252526;
    height: 100%;
  }

  .snippet-container {
    background-color: #1E1E1E;
    overflow-y: scroll;
  }
</style>

