<template>
  <div :class="$style.root">
    <div :class="$style.tag">
      #{{ name }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  props: {
    name: { type: String as PropType<string> },
  },
});
</script>

<style module>
.root {
}

.tag {
  border-radius: 30px;
  padding: 5px 10px;

  font-weight: normal;

  color: #eee;
  background: #888;
}
</style>
