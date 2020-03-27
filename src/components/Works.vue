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
			imgUrl: 'QR-generator.png',
			description: 'WebページのURLをQRコードとして表示するChrome拡張'
		},
		{
			title: 'shikachii.net',
			url: 'https://shikachii.net',
			imgUrl: 'shikachii_net.png',
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
	margin-bottom: 20px;
}
</style>
