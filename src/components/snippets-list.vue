<template>
  <div class="snippets-list component">
    <h3>My Snippets</h3>
    <br>
    <table class="table table-dark">
      <thead class="thead-dark">
        <tr>
          <th class="w-10">Name</th>
          <th class="w-10">Prefix</th>
          <th class="w-25">Language</th>
          <th class="w-20"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="snippet of snippets" :key="snippet.id">
          <td>{{snippet.name}}</td>
          <td>{{snippet.prefix}}</td>
          <td>{{snippet.language}}</td>
          <td>
            <div class="float-right">
              <div class="dropdown">
                <a class="dropdown-toggle" style="cursor: pointer;" id="dropdownMenuButton" data-toggle="dropdown">
                  <i class="fa fa-ellipsis-h fa-2x"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
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
            <div style="margin-top: 25px;">
              <h3>Hi there!</h3>
              <p>It looks like you have not added any snippets yet. Click the add snippet button to get started.</p>
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
      return this.$store.state.snippets || []
    }
  }
}
</script>

<style scoped>
.dropdown-toggle:after { content: none }
</style>
