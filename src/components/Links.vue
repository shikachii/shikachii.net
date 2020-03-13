<template>
	<div id="links" class="content">
		<div class="title">- Links -</div>
		<div class="description">
			<ul>
				<li><a href="https://twitter.com/shikachii">Twitter(@shikachii)</a></li>
				<!--<li><span class="qr-code">■</span></li>-->
				<li><a href="https://github.com/shikachii">GitHub(@shikachii)</a></li>
				<li><a href="https://atcoder.jp/users/shikachii">AtCoder(<span class="green">shikachii</span>)</a></li>
				<li><a href="https://keybase.io/shikachii">Keybase(@shikachii)</a></li>
				<li><a href="https://shikachii.hatenablog.com">Hatena Blog(id:shikachii)</a></li>
				<li><a href="https://instagram.com/shikachii095">Instagram(@shikachii095)</a></li>
				<li><a href="https://sp12.iidx.app/sheets/0719-9172/hard">IIDX☆12ハード参考表(0719-9172)</a></li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Links extends Vue { }
</script>

<style scoped>
ul {
	padding: initial;
	list-style-type: none;
}

.description li a {
	font-size: 18px;
}

.description li {
	margin-bottom: 5px;
}

.qr-code {
	display: none;
	font-size: 200px;
}

/* ankerタグ内部のgreenクラスも同時に色が変わる */
a:hover > .green {
	color: #55D555;
	transition: color 200ms;
}

.green {
	color: #008000;
	transition: color 200ms;
}

</style>
