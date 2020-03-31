<template>
	<div id="links" class="content">
		<div class="title">Links</div>
		<div class="description">
			<ul>
				<li v-for="(link, index) in links" :key=index>
					<Link
						:path="link.path"
						:title="link.title"
						:id="link.id"
						:color="link.color"
					/>
				</li>
			</ul>
			<!--
			<ul>
				<li><a href="https://twitter.com/shikachii">Twitter(@shikachii)</a></li>
				<li><a href="https://github.com/shikachii">GitHub(@shikachii)</a></li>
				<li><a href="https://atcoder.jp/users/shikachii">AtCoder(<span class="green">shikachii</span>)</a></li>
				<li><a href="https://keybase.io/shikachii">Keybase(@shikachii)</a></li>
				<li><a href="https://shikachii.hatenablog.com">Hatena Blog(id:shikachii)</a></li>
				<li><a href="https://instagram.com/shikachii095">Instagram(@shikachii095)</a></li>
				<li><a href="https://sp12.iidx.app/sheets/0719-9172/hard">IIDX☆12ハード参考表(0719-9172)</a></li>
			</ul>
			-->
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Link from '@/components/Link.vue'

@Component({
	components: {
		Link,
	},
})
export default class Links extends Vue {
	links: object[] = [
		{
			title: 'Twitter',
			path: 'https://twitter.com/shikachii',
			id: '@shikachii',
		},
		{
			title: 'GitHub',
			path: 'https://github.com/shikachii',
			id: '@shikachii',
		},
		{
			title: 'AtCoder',
			path: 'https://atcoder.jp/users/shikachii',
			id: 'shikachii',
			color: 'green',
		},
		{
			title: 'Blog',
			path: 'https://shikachii.hatenablog.com',
			id: '記憶',
		},
		{
			title: 'Keybase',
			path: 'https://keybase.io/shikachii',
			id: 'shikachii',
		},
		{
			title: 'Instagram',
			path: 'https://instagram.com/shikachii095',
			id: 'shikachii095',
		},
		{
			title: 'IIDX☆12ハード参考表',
			path: 'https://sp12.iidx.app/sheets/0719-9172/hard',
			id: '0719-9172',
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
