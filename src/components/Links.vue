<template>
	<div id="links" class="content">
		<div class="title">Links</div>
		<div class="description">
			<ul>
				<li v-for="(link, index) in links" :key=index>
					<Link :path="link.path" :title="link.title" />
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
			path: 'https://twitter.com/shikachii'
		},
		{
			title: 'GitHub',
			path: 'https://github.com/shikachii'
		},
		{
			title: 'AtCoder',
			path: 'https://atcoder.jp/users/shikachii'
		},
		{
			title: 'Keybase',
			path: 'https://keybase.io/shikachii'
		},
		{
			title: 'Blog',
			path: 'https://shikachii.hatenablog.com'
		},
		{
			title: 'Instagram',
			path: 'https://instagram.com/shikachii095'
		},
		{
			title: 'IIDX☆12ハード参考表',
			path: 'https://sp12.iidx.app/sheets/0719-9172/hard'
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
	margin-bottom: 8px;
}
</style>
