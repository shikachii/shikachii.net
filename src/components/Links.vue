<template>
	<div id="links" class="content">
		<div class="title">Links</div>
		<div class="description">
			<ul>
				<li v-for="(link, index) in links" :key=index>
					<LinkCard
						:path="link.path"
						:title="link.title"
						:id="link.id"
						:color="link.color"
						:fav="link.fav"
					/>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Link from '@/components/Link.vue'
import LinkCard from '@/components/LinkCard.vue'

@Component({
	components: {
		Link,
		LinkCard
	},
})
export default class Links extends Vue {
	links: object[] = [
		{
			title: 'Twitter',
			path: 'https://twitter.com/shikachii',
			id: '@shikachii',
			fav: 'fab twitter',
		},
		{
			title: 'GitHub',
			path: 'https://github.com/shikachii',
			id: '@shikachii',
			fav: 'fab github',
		},
		{
			title: 'AtCoder',
			path: 'https://atcoder.jp/users/shikachii',
			id: 'shikachii',
			color: 'green',
			fav: 'fas laptop-code',
		},
		{
			title: 'ブログ',
			path: 'https://shikachii.hatenablog.com',
			id: '駅から徒歩27分',
			fav: 'fas blog',
		},
		{
			title: 'Keybase',
			path: 'https://keybase.io/shikachii',
			id: 'shikachii',
			fav: 'fab keybase',
		},
		{
			title: 'instagram',
			path: 'https://instagram.com/shikachii095',
			id: 'shikachii095',
			fav: 'fab instagram',
		},
		{
			title: 'IIDX☆12ハード参考表',
			path: 'https://sp12.iidx.app/sheets/0719-9172/hard',
			id: '0719-9172',
			fav: 'fas compact-disc',
		},
	]
}
</script>

<style scoped>
ul {
	padding: initial;
	list-style-type: none;
}

.description li {
	margin-bottom: 20px;
}
</style>
