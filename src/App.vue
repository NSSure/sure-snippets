<template>
  <div id="app">
    <top-menu class="menu"></top-menu>
    <router-view class="router-view" />
  </div>
</template>

<script>
import TopMenu from "@/components/menu.vue";

export default {
  name: "app",
  components: {
    TopMenu
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
#app {
  display: flex;
  height: 100%;
}

#app > .menu {
  width: 15%;
}

#app > .router-view {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  color: #f7f7f7;
  background-color: #232324;
}

.snippet-container {
  background-color: #1e1e1e;
  padding: 15px;
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

.snippets-list {
  background-color: #252526;
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
  background-color: #323232;
  padding: 15px;
}

.panel-card > .content {
  background-color: #2a2a2a;
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
