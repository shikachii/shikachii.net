<template>
	<div class="content">
		<div class="title">Title</div>
	{{message}}
		<button @click="show()">show</button>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Content extends Vue {
	@Prop()
	public message?: string

	show(){
		alert(this.message)
	}

}
</script>

<style scoped>
.content {
	color: #333;
}

.title {
	font-size: 36px;
	border-bottom: 1px solid #CCC;
}
</style>
