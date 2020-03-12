<template>
	<div id="info" class="content">
		<div class="title">- Info -</div>
		<div class="icon">
			○
		</div>
		<div class="description">
			しかちです。
			ラーメンとかお酒とか好きです。<br>
			プログラミングやIIDXをやっています。
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Info extends Vue { }
</script>

<style scoped>
#info {
}

.icon {
	margin-top: 20px;
	font-size: 100px;
}
</style>
