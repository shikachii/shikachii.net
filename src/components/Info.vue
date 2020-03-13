<template>
	<div id="info" class="content">
		<div class="title">Info</div>
		<img src="https://pbs.twimg.com/profile_images/1068206176813240320/e-XuzUj9.jpg" class="icon" alt="icon" />
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
.icon {
	margin-top: 20px;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	box-shadow: 3px 3px 13px 1px #888;
}
</style>
