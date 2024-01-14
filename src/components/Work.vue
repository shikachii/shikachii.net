<template>
	<div class="work">
		<div class="w-title">{{ title }}</div>
		<div class="w-description">
			{{ description }}
		</div>
		<img v-if="imgUrl!==''"
			:src="loadImg()" class="w-screenshot" alt="screenshot"/>
		<div class="w-link">
			<a :href="url">ソースコード</a>/<a :href="release">リリース</a>
		</div>
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
	release?: string
	
	@Prop()
	imgUrl?: string
	
	@Prop()
	description?: string

	public loadImg() {
		return require(`@/assets/${this.imgUrl}`)
	}
}
</script>

<style scoped>
.w-title {
	font-size: 24px;
	margin-bottom: 8px;
}

.w-title::before {
	content: '';
	display: inline-block;
	background: #333;
	width: 10px;
	height: 10px;
	margin-right: 8px;
	margin-top: -4px;
	vertical-align: middle;
	border-radius: 50%;
}

.w-title::after {
	content: '';
	display: inline-block;
	background: #333;
	width: 10px;
	height: 10px;
	margin-left: 8px;
	margin-top: -4px;
	vertical-align: middle;
	border-radius: 50%;
}

.w-description {
	font-size: 18px;
	margin-bottom: 8px;
}

.w-link {
	font-size: 15px;
	margin-bottom: 4px;
}

.w-screenshot {
	max-width: 400px;
	max-height: 400px;
	/* 画面が小さくなったときに親ノードのサイズ100%に合わせる */
	width: 100%;
	height: 100%;
	margin-bottom: 4px;
	border: 1px solid #333;
}
</style>
