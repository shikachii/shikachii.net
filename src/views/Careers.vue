<template>
  <div :class="$style.root">
    <div :class="$style.title">Internship</div>
    <template v-for="(career, i) in careers">
      <div :key="i">
        <Career :career="career" />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Career from '@/components/Career.vue';

export default Vue.extend({
  components: {
    Career,
  },
  data: () => ({
    careers: [
      {
        name: "株式会社日本システム技研",
        tags: ["Python", "Django", "BackEnd"],
        description: "社内日報システムの開発",
        start: new Date(Date.parse("2017-09-04")),
        end: new Date(Date.parse("2017-09-15")),
      },
      {
        name: "イーストフィールズ株式会社",
        tags: ["JavaScript", "Vue.js", "TypeScript", "Firebase", "Algolia", "FrontEnd"],
        description: "フリーコンサルへの案件紹介サービスのフロントエンド開発",
        start: new Date(Date.parse("2020-06-15")),
        end: null,
      },
      {
        name: "株式会社いい生活",
        tags: ["JavaScript", "Vue.js", "TypeScript", "FrontEnd"],
        description: "サマーインターン2020, 社内向けAPIを用いたチーム開発",
        start: new Date(Date.parse("2020-08-31")),
        end: new Date(Date.parse("2020-09-04")),
      },
      {
        name: "合同会社DMM.com",
        tags: ["DevOps", "FrontEnd", "Kotlin", "React.js", "Django", "TypeScript"],
        description: "DMM GUILD 2020, 50を超えるDMMのサービスから提示された技術的な課題(クエスト)を選択し解決、複数事業issue賞を受賞",
        start: new Date(Date.parse("2020-09-07")),
        end: new Date(Date.parse("2020-09-18")),
      },
    ],
  }),
});
</script>

<style module>
.root {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 30px;
}


.title {
  font-size: 36px;
  margin-bottom: 30px;
}

.title::before {
  content: "";
  display: inline-block;
  background: #333;
  width: 50px;
  height: 2px;
  margin-right: 8px;
  vertical-align: middle;
  margin-top: -4px;
}

.title::after {
  content: "";
  display: inline-block;
  background: #333;
  width: 50px;
  height: 2px;
  margin-left: 8px;
  vertical-align: middle;
  margin-top: -4px;
}
</style>
