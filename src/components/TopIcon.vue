<template>
	<img :src="loadImg()" class="icon" alt="icon" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class TopIcon extends Vue {
	@Prop()
	imgPath?: string

	public loadImg() {
		return require(`@/assets/${this.imgPath}`)
	}
}
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
