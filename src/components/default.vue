<template>
  <div class="snippets h-100 w-100">
    <div class="snippets-list-container">
      <modal v-if="showModal" @close="showModal = false" @confirm="$store.dispatch('clearSnippets'); showModal = false;">
        <span slot="header">Clear Snippets?</span>
        <p slot="body">Are you sure you want to clear your snippets? This action can't be undone. Make sure you export any snipets you want to save.</p>
      </modal>
      <modal v-if="showManageModal" @close="showManageModal = false; isSnippetEditMode = false; $store.dispatch('setSnippet', null)" @confirm="showManageModal = false;">
        <span slot="header">Manage Snippet</span>
        <p slot="body">
          <snippet-manage :is-edit-mode="isSnippetEditMode"></snippet-manage>
        </p>
      </modal>
      <modal v-if="showExportModal" @close="showExportModal = false" @confirm="showExportModal = false;">
        <span slot="header">Export Snippets</span>
        <p slot="body">
          <export></export>
        </p>
      </modal>
      <div class="action-ribbon">
        <button class="btn btn-info" @click="showManageModal = true"><i class="fa fa-plus"></i> New Snippet</button>
        <button class="btn btn-info" @click="showExportModal = true"><i class="fa fa-cogs"></i> Bulk Export</button>
        <button class="btn btn-danger" @click="showModal = true"><i class="fa fa-ban"></i> Clear Snippets</button>
      </div>
      <snippets-list></snippets-list>
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
      isSnippetEditMode: false,
      showModal: false,
      showManageModal: false,
      showExportModal: false
    };
  },
  watch: {
    "$store.state.snippet"() {
      if (this.$store.state.snippet) {
        this.isSnippetEditMode = true;
        this.showManageModal = true;
      } else {
        this.isSnippetEditMode = false;
      }
    }
  },
};
</script>

<style scoped>
  .action-ribbon {
    padding: 15px;    
  }

  .action-ribbon button {
    margin-left: 5px;
    margin-right: 5px;
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

