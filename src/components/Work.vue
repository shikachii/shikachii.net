<template>
	<div class="work">
		<div class="w-title"><a :href="url">{{ title }}</a></div>
		<div class="w-description">{{ description }}</div>
		<img v-if="imgUrl!==''"
			:src="imgUrl" class="w-screenshot" alt="screenshot"/>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Work extends Vue {
	@Prop({ default: ''})
	title!: string

	@Prop()
	url?: string
	
	@Prop()
	imgUrl?: string
	
	@Prop()
	description?: string
}
</script>

<style scoped>
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
	margin-bottom: 5px;
}
</style>
