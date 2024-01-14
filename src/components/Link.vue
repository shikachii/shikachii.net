<template>
	<div class="link">
		<div class="l-title">{{ title }}</div>
		<a :href="path">
			<span :class="color">{{ id }}</span>
		</a>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Link extends Vue {
	@Prop()
	path?: string

	@Prop()
	title?: string

	@Prop()
	id?: string

	@Prop()
	color?: string
}
</script>

<style scoped>
.l-title {
	font-size: 24px;
	margin-bottom: 2px;
}

.l-title::before {
	content: '';
	display: inline-block;
	background: #333;
	width: 8px;
	height: 8px;
	margin-right: 8px;
	margin-top: -4px;
	vertical-align: middle;
	border-radius: 50%;
}

.l-title::after {
	content: '';
	display: inline-block;
	background: #333;
	width: 8px;
	height: 8px;
	margin-left: 8px;
	margin-top: -4px;
	vertical-align: middle;
	border-radius: 50%;
}

a {
	font-size: 18px;
}

/* ankerタグ内部のgreenクラスも同時に色が変わる */
a:hover > .green {
	color: #55D555;
	transition: color 200ms;
}

.green {
	color: #008000;
	transition: color 200ms;
}

a:hover > .brawn {
	color: #C09050;
	transition: color 200ms;
}

.brawn {
	color: #804000;
	transition: color 200ms;
}
</style>
