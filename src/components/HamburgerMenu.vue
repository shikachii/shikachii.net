<template>
	<div id="HamburgerMenu">
		<div>三</div>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/Links">Links</a></li>
		</ul>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class HamburgerMenu extends Vue {}
</script>

<style scoped>
</style>
