<template>
  <div :class="$style.root">
    <div :class="$style.header">
      <div :class="$style.name">{{ career.name }}</div>
      <div :class="$style.date">{{ startStr }} 〜 {{ endStr }} </div>
    </div>
    <template v-for="(tag, i) in career.tags">
      <Tag :class="$style.tag" :key="i">{{ tag }}</Tag>
    </template>
    <div :class="$style.description">{{ career.description }}</div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import Tag from '@/components/Tag.vue';

type Career = {
  name: string;
  tags?: string[];
  description: string;
  start: Date;
  end: Date | null;
}

export default Vue.extend({
  components: {
    Tag,
  },
  props: {
    career: { type: Object as PropType<Career> },
  },
  methods: {
    dateToStr(date: Date | null): string {
      if (date !== null) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}年${month}月${day}日`;
      } else {
        return '現在';
      }
    },
  },
  computed: {
    startStr(): string {
      return this.dateToStr(this.career.start);
    },
    endStr(): string {
      return this.dateToStr(this.career.end);
    },
  },
});
</script>

<style module>
.root {
  width: 600px;

  box-sizing: border-box;
  font-size: 16px;
  color: #333;

  background: #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  border-radius: 5px;

  padding: 30px 40px;
  margin-bottom: 30px;
}

.header {
  border-bottom: 1px solid #3333;

  padding-bottom: 5px;
  margin-bottom: 5px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}

.name {
  font-size: 22px;
  font-weight: normal;
}

.date {
  font-size: 14px;
}

.tag {
  margin: 5px 5px 5px 0px;
}

.description {
  margin-top: 5px;
}

/* スマホ対応 */
@media screen and (max-width: 600px) {
  .root {
    width: 350px;
    border-bottom: 1px solid #3333;
    padding: 25px 35px;
  }

  .header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
