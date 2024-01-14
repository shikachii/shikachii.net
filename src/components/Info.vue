<template>
  <div id="info" class="content">
    <div class="title">Info</div>
    <TopIcon :imgPath="topIcon" />
    <Title :class="$style.title">名前</Title>
    <div :class="$style.name">shikachii, しかち, etc...</div>
    <template v-for="(info, i) in information">
      <div :key="i">
        <Title :class="$style.title">{{ info.title }}</Title>
        <template v-for="(content, i) in info.content">
          <Tag :class="$style.tag" :key="i">{{ content }}</Tag>
        </template>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TopIcon from '@/components/TopIcon.vue'
import Title from '@/components/Title.vue';
import Tag from '@/components/Tag.vue';

export default Vue.extend({
  components: {
    TopIcon,
    Title,
    Tag,
  },
  data: () => ({
    information: [
      {
        title: '好きなもの',
        content: [
          'ラーメン', 'Twitter', 'お酒', '麻雀', 'ガジェット', 'ThinkPad'
        ],
      },
      {
        title: '趣味',
        content: [
          'サイクリング',
          'beatmaniaIIDX',
          'Re:ステージ!プリズムステップ',
          'スマートホーム',
        ],
      },
      {
        title: '興味のある分野',
        content: [
          'FrontEnd',
          'Competitive Programming',
          'Deep Learning',
          'Mobile Application',
          'CTF',
        ],
      },
      {
        title: '言語・フレームワーク',
        content: [
          'TypeScript',
          'JavaScript',
          'Vue.js',
          'Firebase',
          'Docker',
          'Ruby',
          'Python',
          'TensorFlow',
          'C',
          'C++',
        ],
      },
    ],
    topIcon: 'twitter_icon.png',
  }),
});
</script>

<style module>
.title {
  margin: 24px 0;
}

.name {
  font-size: 18px;
}

.tag {
  margin-right: 10px;
  margin-bottom: 5px;
}

.description {
  line-height: 1.5;
}
</style>
