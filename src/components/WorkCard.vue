<template>
	<div class="workCard">
		<a :href="release">
		<img :src="loadImg()" class="workCardThumbnail" alt="thumbnail" />
		<div class="workCardFrame">
			<div class="workCardFrameTitle">{{ title }}</div>
			<div class="workCardFrameSource">
				<a :href="url">ソースコード</a>
			</div>
			<div class="workCardFrameDescription">{{ description }}</div>
		</div>
		</a>
	</div>
</template>

<style scoped>
.workCard {
	max-width: 500px;
	width: 100%;
	opacity: 1;
	transition: opacity 200ms;

	background: #eee;
	border-radius: 5px;
	box-shadow: 0px 4px 4px rgba(0,0,0,0.25);

	margin: 0 auto;
}

.workCard:hover {
	opacity: 0.8;
	transition: opacity 200ms;
}

.workCardThumbnail {
	position: relative;
	left: 0px;
	right: 0px;
	top: 0px;
	bottom: 113px;

	max-width: 100%;
	height: auto;
	
	border-radius: 5px 5px 0px 0px;
	box-shadow: 0px 2px 4px rgba(0,0,0,0.25);

	z-index: 3;
}

.workCardFrame {
	position: relative;
	top: 0px;
	left: 0px;
	right: 0px;

	background: #eee;

	border-radius: 0px 0px 5px 5px;
}

.workCardFrameTitle {
	position: relative;
	left: 0px;
	top: 0px;

	font-size: 22px;
	line-height: 26px;
	text-align: left;
	padding: 15px 0px 5px 30px;
	
	color: #333;
}

.workCardFrameSource {
	position: absolute;
	left: 180px;
	top: 24px;

	font-size: 12px;
	line-height: 14px;
	text-align: left;

	color: #333;
}

.workCardFrameDescription {
	position: relative;
	left: 0px;
	right: 0px;
	top: 0px;

	font-size: 14px;
	line-height: 16px;
	text-align: left;
	padding: 5px 30px 20px 30px;

	color: #333;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class WorkCard extends Vue {
	@Prop()
	title!: string
	@Prop()
	url?: string
	@Prop()
	release?: string
	@Prop()
	imgUrl?: string
	@Prop()
	description?: string

	public loadImg() {
		if(this.imgUrl !== '') {
			return require(`@/assets/${this.imgUrl}`)
		} else {
			return require(`@/assets/noimage.png`)
		}
	}
}
</script>
