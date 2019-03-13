<template>
  <div class="app">
    <top-menu class="menu"></top-menu>
    <div class="app-content">
      <div style="box-shadow: 0px 3px 15px rgba(0,0,0,0.2); border-bottom: 1px solid #282828; background-color: #3A4149 !important; padding: 15px;">
        <router-link tag="button" :to="{ name: 'snippetManage' }" class="btn mr-sm-2"><i class="fa fa-plus"></i> New Snippet</router-link>
        <router-link tag="button" :to="{ name: 'export' }" class="btn mr-sm-2"><i class="fa fa-cogs"></i> Bulk Export</router-link>
        <button type="button" class="btn mr-sm-2" @click="showClearModal = true"><i class="fa fa-ban"></i> Clear Snippets</button>
      </div>
      <router-view class="router-view" />
    </div>
    <modal v-if="showClearModal" @close="showClearModal = false" @confirm="$store.dispatch('clearSnippets'); showClearModal = false; $router.push({ name: 'snippets' })">
        <span slot="header">Clear Snippets?</span>
        <p slot="body">Are you sure you want to clear your snippets? This action can't be undone. Make sure you export any snipets you want to save.</p>
    </modal>
  </div>
</template>

<script>
import TopMenu from "@/components/menu.vue";
import Modal from '@/components/modal.vue';
import Export from '@/components/export.vue';

export default {
  name: "app",
  components: {
    TopMenu,
    Modal,
    Export
  },
  data () {
    return {
      showExportModal: false,
      showClearModal: false
    }
  },
  created: function() {
    this.$sureToast.show(
      "Welcome to Sure Snippets. Get started creating efficent snippets!",
      { theme: "info" }
    );
    this.$store.dispatch("setCachedSnippets");
  }
};
</script>

<style>
.app {
  display: flex;
  height: 100%;
}

.app > .menu {
  width: 15%;
}

.app > .app-content {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.app > .router-view {
  height: 100%;
  width: 100%;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  color: #f7f7f7;
  background-color: #31363A;
}

.cursor-pointer {
  cursor: pointer;
}

.component {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  padding: 50px;
}

.snippet-container input[type="text"] {
  background-color: #383838;
  border: 1px solid #252526;
  border: none;
  color: #a7a7a7;
}

.snippet-container textarea {
  background-color: #383838;
  border: none;
  resize: none;
  color: #a7a7a7;
}

.snippet-container textarea:focus {
  background-color: #383838;
  border: 1px solid #252526;
  border: none;
  color: #a7a7a7;
}

td {
  vertical-align: middle;
}

.table td,
.table th {
  border: none;
}

.table thead th {
  border-bottom: none;
}

.table td {
  border-bottom: 1px solid #383838;
}

thead {
  background-color: #383838;
}

table tbody tr td {
  vertical-align: middle !important;
}

a {
  color: #fdb81f;
}

.panel-card {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.panel-card > .header {
  background-color: #2F343A;
  padding: 15px;
}

.panel-card > .content {
  background-color: #3A4149;
  padding: 15px;
}

#sure-snippets-popup {
  animation: slide-in 0.5s ease;
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateY() (20px);
  }
  100% {
    opacity: 1;
    transform: translateY() (0);
  }
}
</style>
