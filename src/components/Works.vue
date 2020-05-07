<template>
	<div id="works" class="content">
		<div class="title">Works</div>
		<div class="description">
			<ul>
				<li v-for="(work, index) in works" :key=index>
					<Work
						:title="work.title"
						:url="work.url"
						:release="work.release"
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
			release: 'https://github.com/shikachii/QR-generator/releases/tag/v0.1.0',
			imgUrl: 'QR-generator.png',
			description: 'WebページのURLをQRコードとして表示するChrome拡張'
		},
		{
			title: 'shikachii.net',
			url: 'https://github.com/shikachii/shikachii.net',
			release: 'https://shikachii.net',
			imgUrl: '',
			description: 'このWebサイト'
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
	margin-bottom: 30px;
}
</style>
