<template>
  <div :class="$style.root">
    <div :class="$style.tag">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
});
</script>

<style module>
.root {
  display: inline-block;
}

.tag {
  border-radius: 30px;
  padding: 5px 10px;

  font-weight: normal;

  color: #fff;
  background: #888;
}

.tag::before {
  content: '#';
}
</style>
