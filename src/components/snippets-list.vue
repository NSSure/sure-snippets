<template>
  <div class="snippets-list">
    <table class="table table-hover">
      <thead>
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
              <button class="btn btn-danger mr-2" v-on:click="$snippet.export(snippet)" title="Download snippet template"><i class="fa fa-download"></i></button>
              <button class="btn btn-secondary mr-2" v-on:click="$store.dispatch('setSnippet', snippet)" title="Edit snippet"><i class="fa fa-pencil-square-o"></i></button>
              <button class="btn btn-secondary" v-on:click="copy(snippet)" title="Copy to clipboard"><i class="fa fa-copy"></i></button>
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
    }
  },
  methods: {
    copy(snippet) {
      this.templateJson = this.$snippet.generate(snippet);

      let dummy = document.createElement("input");
      document.body.appendChild(dummy);
      dummy.setAttribute("id", "dummy_id");
      document.getElementById("dummy_id").value = this.templateJson;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    }
  }
}
</script>

<style scoped>
  .snippets-list {
    background-color: #252526;
  }

  td {
    vertical-align: middle;
  }

  .table td, .table th {
    border: none;
  }

  .table td {
    border-bottom: 1px solid #383838;
  }

  thead {
    background-color: #383838;
  }
</style>
