<template>
  <div class="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Variables
    </button>
    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <a @click="$emit('variable-selected', 'TM_SELECTED_TEXT')" class="dropdown-item" href="#">TM_SELECTED_TEXT<p>The currently selected text or the empty string</p></a>
      <a @click="$emit('variable-selected', 'TM_CURRENT_LINE')" class="dropdown-item" href="#">TM_CURRENT_LINE<p>The contents of the current line</p></a>
      <a @click="$emit('variable-selected', 'TM_CURRENT_WORD')" class="dropdown-item" href="#">TM_CURRENT_WORD<p>The contents of the word under cursor or the empty string</p></a>
      <a @click="$emit('variable-selected', 'TM_LINE_INDEX')" class="dropdown-item" href="#">TM_LINE_INDEX<p>The zero-index based line number</p></a>
      <a @click="$emit('variable-selected', 'TM_LINE_NUMBER')" class="dropdown-item" href="#">TM_LINE_NUMBER<p>The one-index based line number</p></a>
      <a @click="$emit('variable-selected', 'TM_FILENAME')" class="dropdown-item" href="#">TM_FILENAME<p>The filename of the current document</p></a>
      <a @click="$emit('variable-selected', 'TM_FILENAME_BASE')" class="dropdown-item" href="#">TM_FILENAME_BASE<p>The filename of the current document without its extensions</p></a>
      <a @click="$emit('variable-selected', 'TM_DIRECTORY')" class="dropdown-item" href="#">TM_DIRECTORY<p>The directory of the current document</p></a>
      <a @click="$emit('variable-selected', 'TM_FILEPATH')" class="dropdown-item" href="#">TM_FILEPATH<p>The full file path of the current document</p></a>
      <a @click="$emit('variable-selected', 'CLIPBOARD')" class="dropdown-item" href="#">CLIPBOARD<p>The contents of your clipboard</p></a>
      <div class="dropdown-divider"></div>
      <a @click="$emit('variable-selected', 'CURRENT_YEAR')" class="dropdown-item" href="#">CURRENT_YEAR <p>The current year</p></a>
      <a @click="$emit('variable-selected', 'CURRENT_YEAR_SHORT')" class="dropdown-item" href="#">CURRENT_YEAR_SHORT<p>The current year's last two digits</p></a>
      <a @click="$emit('variable-selected', 'CURRENT_MONTH')" class="dropdown-item" href="#">CURRENT_MONTH<p>The month as two digits (example '02')e</p></a>
      <a @click="$emit('variable-selected', 'CURRENT_MONTH_NAME')" class="dropdown-item" href="#">CURRENT_MONTH_NAME<p>The full name of the month (example 'July')</p></a>
      <a @click="$emit('variable-selected', 'CURRENT_MONTH_NAME_SHORT')" class="dropdown-item" href="#">CURRENT_MONTH_NAME_SHORT<p>The short name of the month (example 'Jul')</p></a>
      <a @click="$emit('variable-selected', 'CURRENT_DATE')" class="dropdown-item" href="#">CURRENT_DATE<p>The day of the month</p></a>
      <a @click="$emit('variable-selected', 'CURRENT_DAY_NAME')" class="dropdown-item" href="#">CURRENT_DAY_NAME<p>The name of day (example 'Monday')</p></a>
      <a @click="$emit('variable-selected', 'CURRENT_DAY_NAME_SHORT')" class="dropdown-item" href="#">CURRENT_DAY_NAME_SHORT<p>The short name of the day (example 'Mon')</p></a>
      <a @click="$emit('variable-selected', 'CURRENT_HOUR')" class="dropdown-item" href="#">CURRENT_HOUR<p>The current hour in 24-hour clock format</p></a>
      <a @click="$emit('variable-selected', 'CURRENT_MINUTE')" class="dropdown-item" href="#">CURRENT_MINUTE<p>The current minute</p></a>
      <a @click="$emit('variable-selected', 'CURRENT_SECOND')" class="dropdown-item" href="#">CURRENT_SECOND<p>The current second</p></a>
      <div class="dropdown-divider"></div>
      <a @click="$emit('variable-selected', 'BLOCK_COMMENT_START')" class="dropdown-item" href="#">BLOCK_COMMENT_START<p></p></a>
      <a @click="$emit('variable-selected', 'BLOCK_COMMENT_END')" class="dropdown-item" href="#">BLOCK_COMMENT_END<p></p></a>
      <a @click="$emit('variable-selected', 'LINE_COMMENT')" class="dropdown-item" href="#">LINE_COMMENT<p></p></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'variables-dropdown'
}
</script>

<style scoped>
.dropdown-menu.show {
  height: 300px;
  overflow-y: scroll;
}
</style>
