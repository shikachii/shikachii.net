<template>
	<div id="works" class="content">
		<div class="title">Works</div>
		<div class="description">
			<ul>
				<li v-for="(work, index) in works" :key=index>
					<Work
						:title="work.title"
						:url="work.url"
						:imgUrl="work.imgUrl"
						:description="work.description"
					/>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Work from '@/components/Work.vue'

@Component({
	components: {
		Work,
	},
})
export default class Works extends Vue {
	title:string = 'QR-generator'
	works: object[] = [
		{ 
			title: 'QR-generator',
			url: 'https://github.com/shikachii/QR-generator',
			imgUrl: 'https://pbs.twimg.com/media/ESWUuRLUcAAC8Yf?format=png',
			description: 'WebページのURLをQRコードとして表示するChrome拡張'
		},
		{
			title: 'shikachii.net',
			url: 'https://shikachii.net',
			imgUrl: '',
			description: 'このサイトです'
		},
	]	
}
</script>

<style scoped>
.description ul {
	padding: initial;
	list-style-type: none;
}

.description li {
	margin-bottom: 20px;
}

.w-title {
	font-size: 24px;
	margin-bottom: 5px;
}

.w-description {
	font-size: 18px;
	margin-bottom: 5px;
}

.w-screenshot {
	max-width: 400px;
	max-height: 400px;
	width: 100%;
	height: 100%;
	margin-bottom: 5px;
}
</style>
