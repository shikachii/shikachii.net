<template>
	<div id="contact" class="content">
		<div class="title">Contact</div>
		<div class="description">
			<ul>
				<li>
					<div class="c-title">Twitter</div>
					<div class="c-url"><a href="https://twitter.com/intent/tweet?screen_name=shikachii">@shikachii</a></div>
				</li>
				<li>
					<div class="c-title">Discord</div>
					<div class="c-url"><a href="javascript:void(0)">shikachii#6088</a></div>
				</li>
				<li>
					<div class="c-title">Email</div>
					<div class="c-url"><a href="mailto:shikachii095@gmail.com">shikachii095@gmail.com</a></div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Contact extends Vue { }
</script>

<style scoped>
ul {
	list-style: none;
	padding: initial;
}

li {
	margin-bottom: 20px;
}

a {
	font-size: 18px;
}

.c-title {
	font-size: 24px;
	margin-bottom: 2px;
}

.c-title::before {
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

.c-title::after {
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
</style>
