<template>
  <div class="snippets-list">
    <div class="panel-card">
      <div class="header">
        <h5 style="margin-bottom: 0;">My Snippets</h5>
      </div>
      <div class="content">
        <table class="table table-dark">
          <thead class="thead-dark">
            <tr>
              <th class="w-30">Name</th>
              <th class="w-25">Language</th>
              <th class="w-20"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="snippet of snippets" :key="snippet.id">
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
                      <a class="dropdown-item" href="#" @click="$snippets.export([snippet])"><i class="fa fa-download"></i> Download</a>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr v-if="snippets.length === 0">
              <td colspan="3" style="text-align: center; padding: 50px;">
                <span class="fa-stack fa-4x">
                  <i class="fa fa-circle-o fa-stack-2x"></i>
                  <i class="fa fa-info fa-stack-1x"></i>
                </span>
                <h3>Hi there!</h3>
                <p>It looks like you have not added any snippets yet. Click the add snippet button to get started.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Snippets',
  computed: {
    snippets() {
      return this.$store.state.snippets || []
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
.snippets-list {
  padding: 25px;
}
</style>
