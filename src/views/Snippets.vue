<template>
  <div class="snippets h-100">
      <div class="snippets-list-container d-flex h-100">
        <div class="w-50">
          <div class="mr-3">
            <button class="btn btn-danger mb-3 my-3 float-right" @click="$store.dispatch('clearSnippets')">Clear Snippets</button>
          </div>
          <snippets-list></snippets-list>
        </div>
        <div class="snippet-container w-50">
            <snippet-manage ></snippet-manage>
        </div>
      </div>
  </div>
</template>

<script>
import SnippetsList from "@/components/snippets-list.vue";
import SnippetManage from "@/components/snippet-manage.vue";

export default {
  name: "snippets",
  components: {
    SnippetsList,
    SnippetManage

  },
  data: function() {
    return {
      isAddMode: false
    };
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

