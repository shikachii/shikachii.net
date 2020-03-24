<template>
	<div id="hamburger" @click="click()">
		<div v-if="isActive" class="hamburger active">
			<div></div>
			<div></div>
		</div>
		<div v-else class="hamburger">
			<div></div>
			<div></div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
@Component
export default class Hamburger extends Vue {
	@Prop()
	public isActive: boolean = false

	@Emit()
	public click() {}
}
</script>

<style scoped>
.hamburger {
	position: relative;
	right: 0px;
	top: 0px;	
	width: 24px;
	height: 36px;
}

.hamburger div {
	position: absolute;
	left: 0;
	width: 100%;
	height: 2px;
	background: #eee;
}

.hamburger.active div {
	background: #333;
	transition: color 200ms;
}

.hamburger div:nth-of-type(1) {
	top: 12px;
	transform: rotate(0deg);
	transition: transform 300ms;
}

.hamburger div:nth-of-type(2) {
	bottom: 12px;
	transform: rotate(0deg);
	transition: transform 300ms;
}

.hamburger.active div:nth-of-type(1) {
	-webkit-transform: translateY(5px) rotate(-45deg);
	transform: translateY(5px) rotate(-45deg);
	transition: transform 300ms;
}

.hamburger.active div:nth-of-type(2) {
	-webkit-transform: translateY(-5px) rotate(45deg);
	transform: translateY(-5px) rotate(45deg);
	transition: transform 300ms;
}
</style>
