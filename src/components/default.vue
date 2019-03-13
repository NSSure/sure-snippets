<template>
  <div class="snippets h-100 w-100">
    <modal v-if="showModal" @close="showModal = false" @confirm="$store.dispatch('clearSnippets'); showModal = false;">
        <span slot="header">Clear Snippets?</span>
        <p slot="body">Are you sure you want to clear your snippets? This action can't be undone. Make sure you export any snipets you want to save.</p>
    </modal>
    <modal v-if="showExportModal" @close="showExportModal = false" @confirm="showExportModal = false;">
      <span slot="header">Export Snippets</span>
      <export slot="body"></export>
    </modal>
    <snippets-list></snippets-list>
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
      showModal: false,
      showManageModal: false,
      showExportModal: false
    };
  },
  watch: {
    "$store.state.snippet"() {
      if (this.$store.state.snippet) {
        this.showManageModal = true;
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

  .snippet-container {
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

