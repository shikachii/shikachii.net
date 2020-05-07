<template>
	<div id="info" class="content">
		<div class="title">Info</div>
		<TopIcon :imgPath="topIcon" />
		<div class="description">
			しかちといいます。<br>
			ラーメンが好きで食べたり作ったりしています。<br>
			C++, Python, JavaScriptあたりを好んで書いています。<br>
			Re:ステージ！やBeatmaniaIIDXなど音楽ゲームが好きです。<br>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TopIcon from '@/components/TopIcon.vue'

@Component({
	components: {
		TopIcon
	}
})
export default class Info extends Vue {
	topIcon:string = 'twitter_icon.png'
}
</script>

<style scoped>
.description {
	line-height: 1.5;
}
</style>
