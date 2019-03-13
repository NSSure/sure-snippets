<template>
  <!-- <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <button type="button" class="btn btn-danger btn-circle dismiss" @click="$emit('close')"><i class="fa fa-close"></i></button>
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition> -->
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"></slot>
          </div>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button type="button" class="modal-default-button btn btn-danger" @click="$emit('close')">Cancel</button>
              <button type="button" class="modal-default-button btn" @click="$emit('confirm')">OK</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal"
};
</script>

<style scoped>
/* THESE ARE THE STYLES FOR RIGHT ALIGNED MODALS */
/* .btn-circle {
  width: 30px;
  height: 30px;
  padding: 6px 0px;
  border-radius: 15px;
  text-align: center;
  font-size: 12px;
  line-height: 1.42857;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
  display: flex;
  justify-content: flex-end;
}

.modal-wrapper {
  height: 100%;
  display: flex;
  flex-direction: row;
}

.modal-wrapper > .dismiss {
  margin: 15px;
}

.modal-container {
  width: 800px;
  background-color: #333;
  border-radius: 2px;
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  height: 100%;
  overflow-y: scroll;
}

.modal-header {
  border: none;
  display: flex;
  flex-direction: row;
  font-size: 24px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
}

h3 {
  margin: 0 !important;
  padding: 0 !important;
}

.modal-body {
  padding: 20px;
  height: 100%;
}

.modal-footer {
    border: none;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
} */

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #323232;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  border: none;
}

.modal-footer {
  border: none;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

