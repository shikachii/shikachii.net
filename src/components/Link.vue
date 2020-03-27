<template>
	<div class="link">
		<a :href="path">{{ title }}</a>
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
}
</script>

<style scoped>
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

</style>
