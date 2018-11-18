<template>
  <div class="snippets-list">
    <table class="table table-hover">
      <thead>
        <tr>
          <th class="w-30">Name</th>
          <th class="w-25">Language</th>
          <th class="w-20"></th>
          <th v-if="manualSelectionExport"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(snippet, index) of snippets" :key="snippet.id">
          <td>{{snippet.name}}</td>
          <td>{{snippet.language}}</td>
          <td>
            <div class="float-right">
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-cog fa-lg"></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#" @click="$store.dispatch('setSnippet', snippet)"><i class="fa fa-pencil-square-o"></i> Edit</a>
                  <a class="dropdown-item" href="#" @click="$snippets.copy([snippet])"><i class="fa fa-copy"></i> Copy</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#" @click="$snippets.download([snippet])"><i class="fa fa-download"></i> Download</a>
                </div>
              </div>
            </div>
          </td>
          <td v-if="manualSelectionExport">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" :id="'include-in-export-' + index" v-model="snippet.includeInExport" @change="updateSnippetExport(snippet)">
              <label class="form-check-label" :for="'include-in-export-' + index"></label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Snippets',
  computed: {
    snippets() {
      return this.$store.state.snippets
    },
    manualSelectionExport() {
      return this.$store.state.manualSelectionExport;
    }
  },
  methods: {
    updateSnippetExport(snippet) {
      console.log(snippet.includeInExport);
    }
  }
}
</script>

<style scoped>

</style>
