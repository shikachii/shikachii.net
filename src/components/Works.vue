<template>
	<div id="works" class="content">
		<div class="title">Works</div>
		<div class="description">
			<ul>
				<li>
					<div class="w-title"><a href="https://github.com/shikachii/QR-generator">QR-generator</a></div>
					<div class="w-description">WebページのURLをQRコードとして表示するChrome拡張</div>
					<img src="https://pbs.twimg.com/media/ESWUuRLUcAAC8Yf?format=png" class="w-screenshot" alt="screenshot"/>
				</li>
				<li>
					<div class="w-title"><a href="https://shikachii.net">shikachii.net</a></div>
					<div class="w-description">このサイトです</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Works extends Vue { }
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
}
</style>
