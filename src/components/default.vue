<template>
  <div class="snippets h-100">
      <div class="snippets-list-container d-flex h-100">
        <div class="col-5">
          <div class="mr-3">
            <modal v-if="showModal" @close="showModal = false" @confirm="$store.dispatch('clearSnippets'); showModal = false;">
              <h3 slot="header">Clear Snippets?</h3>
              <p slot="body">Are you sure you want to clear your snippets? This action can't be undone. Make sure you export any snipets you want to save.</p>
            </modal>
            <button class="btn btn-danger mb-3 my-3 float-right" @click="showModal = true">Clear Snippets</button>
          </div>
          <snippets-list></snippets-list>
        </div>
        <div class="snippet-container col-7">
          <ul class="nav nav-tabs nav-fill">
            <li class="nav-item">
              <a class="nav-link active" id="snippet-tab" data-toggle="tab" href="#snippet" role="tab">Snippet</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="snippet-tab" data-toggle="tab" href="#export" role="tab">Export</a>
            </li>
          </ul>
          <!-- Tab panes -->
          <div class="tab-content">
            <div class="tab-pane active" id="snippet" role="tabpanel">
              <snippet-manage></snippet-manage>
            </div>
            <div class="tab-pane" id="export" role="tabpanel">
              <export />
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import SnippetsList from "@/components/snippets-list.vue";
import SnippetManage from "@/components/snippet-manage.vue";
import Export from "@/components/export.vue";
import Modal from "@/components/modal.vue";

export default {
  name: "snippets",
  components: {
    SnippetsList,
    SnippetManage,
    Export,
    Modal
  },
  data: function() {
    return {
      isAddMode: false,
      showModal: false
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

  .tab-pane {
    padding-top: 15px;
  }

  .nav-tabs {
    border: none;
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

