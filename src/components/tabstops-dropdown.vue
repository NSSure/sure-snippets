<template>
  <div class="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Tabstops
    </button>
    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <a class="dropdown-item" href="#" @click="$emit('tabstop-selected', '$0')">New Tabstop</a>
      <a class="dropdown-item" href="#" @click="$emit('tabstop-selected', '$0')">Final Tabstop</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">$1</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabstops-dropdown',
  data() {
      return {
          tabstops: []
      }
  }
}
</script>

<style scoped>
.dropdown-menu.show {
  height: 300px;
  overflow-y: scroll;
}
</style>
