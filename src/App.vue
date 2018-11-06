<template>
  <div id="app">
    <top-menu></top-menu>
    <router-view/>
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
    this.$sureToast.show('test')
    this.$store.dispatch("cacheSnippets");
  }
};
</script>

<style>
#app {
  display: flex;
  height: 100%;
  flex-direction: column;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  color: #f7f7f7;
  background-color: #232324;
}

.snippet-container {
  background-color: #1e1e1e;
  padding: 15px;
  border: px dashed silver;
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

#sure-snippets-popup {
  animation: slide-in 0.5s ease;
}

@keyframes slide-in {
    0% {
        opacity: 0;
        transform: translateY()(20px);
    }
    100% {
        opacity: 1;
        transform: translateY()(0);
    }
}
</style>
