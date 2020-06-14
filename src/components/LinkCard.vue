<template>
	<a :href="path" class="linkCard">
		<div class="linkCardThumbnail">
			<font-awesome-icon :icon="icon" />
		</div>
		<div class="linkCardDescription">{{ title }}</div>
		<div :id="color" class="linkCardId">{{ id }}</div>
	</a>
</template>

<style scoped>
.linkCard {
	display: block;
	position: relative;
	max-width: 281px;
	height: 73px;
	width: 100%;

	opacity: 1;
	transition: all 200ms;

	background: #f5f5f5;
	box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
	border-radius: 5px;

	margin: 0 auto;
}

.linkCard:hover {
	opacity: 0.8;
	transition: all 200ms;
}

.linkCardThumbnail {
	position: absolute;
	width: 73px;
	height: 73px;
	left: 0px;
	top: 0px;

	display: flex;
	align-items: center;
	justify-content: center;
}

.linkCardThumbnailImage {
	max-width: 45px;
	max-height: 45px;

	/* background: #333; */
	/* border-radius: 50%; */

	display: flex;
	align-items: center;
	justify-content: center;
}

.linkCardDescription {
	position: absolute;
	left: 80px;
	top: 27%;

	font-size: 18px;
	line-height: 21px;
	display: flex;
	align-items: center;

	color: #333;
}

.linkCardId {
	position: absolute;
	left: 80px;
	top: 53%;

	font-size: 12px;
	line-height: 14px;
	display: flex;
	align-items: center;

	color: #333;
}

#brawn {
	color: #804000;
}

#green {
	color: #008000;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LinkCard extends Vue {
	@Prop()
	path?: string
	@Prop()
	title?: string
	@Prop()
	id?: string
	@Prop({ default: 'none' })
	color?: string
	@Prop({ default: '' })
	fav!: string | undefined

	// prefixと分離
	icon: string[] = (this.fav !== undefined) ? this.fav.split(' ') : []
}
</script>
