<template>
  <div :class="$style.root">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
});
</script>

<style module>
.root {
  font-size: 24px;
}

.root::before {
  content: '';
  display: inline-block;
  background: #333;
  width: 30px;
  height: 2px;
  margin-right: 8px;
  margin-top: -4px;
  vertical-align: middle;
}

.root::after {
  content: '';
  display: inline-block;
  background: #333;
  width: 30px;
  height: 2px;
  margin-left: 8px;
  margin-top: -4px;
  vertical-align: middle;
}
</style>
