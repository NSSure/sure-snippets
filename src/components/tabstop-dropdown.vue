<template>
  <div class="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Tabstop
    </button>
    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <a class="dropdown-item cursor-pointer" @click="addTabstop()">New tabstop</a>
      <a class="dropdown-item cursor-pointer" @click="$emit(tokenSelected, '$0')">Final tabstop</a>
      <a class="dropdown-item cursor-pointer" @click="showPlaceholderModal = true">Placeholder</a>
      <a class="dropdown-item cursor-pointer" @click="showChoiceModal = true">Choices</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item cursor-pointer" @click="$emit(tokenSelected, `$${tabstop}`)" v-for="(tabstop, index) of tabstops" :key="index">{{tabstop}}</a>
    </div>
    <modal v-if="showPlaceholderModal" @close="showPlaceholderModal = false" @confirm="$emit(tokenSelected, '${' + placeholderTabstop + ':' + placeholderValue + '}')">
      <span slot="header">Insert Placeholder</span>
      <div slot="body">
        <div class="form-group">
          <label>Tabstop</label>
          <select class="form-control" v-model="placeholderTabstop">
              <option v-for="tabstop of tabstops" :key="tabstop">{{tabstop}}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="placeholderValue">Placeholder Value</label>
          <input type="text" class="form-control" v-model="placeholderValue" placeholder="Some default value" />
        </div>
      </div>
    </modal>
    <modal v-if="showChoiceModal" @close="showChoiceModal = false" @confirm="showChoiceModal = false;">
      <span slot="header">Insert Choice</span>
      <choice slot="body" :tabstops="tabstops"></choice>
    </modal>
  </div>
</template>

<script>
import Modal from './modal';

export default {
  name: 'tabstop-dropdown',
  components: {
    Modal
  },
  data() {
    return {
      showPlaceholderModal: false,
      showChoiceModal: false,
      tokenSelected: 'token-selected',
      tabstops: [],
      placeholderTabstop: '',
      placeholderValue: ''
    }
  },
  methods: {
    addTabstop() {
      let tabstop = `${this.tabstops.length + 1}`;
      this.tabstops.push(tabstop);
      this.$emit(this.tokenSelected, `$${tabstop}`);
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
