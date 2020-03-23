<template>
	<div id="header">
		<div class="view">
			<div id="title" class="info">
				<!--
				<router-link to="/">shikachii.net</router-link>
				-->
				shikachii.net
			</div>
			<!--
			<div class="nav info">
				<ul>
					<li><router-link to="/info">Info</router-link></li>
					<li><router-link to="/links">Links</router-link></li>
				</ul>
			</div>
			-->
			<HamburgerMenu></HamburgerMenu>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HamburgerMenu from '@/components/HamburgerMenu.vue'
@Component({
	components: {
		HamburgerMenu,
	},
})
export default class Header extends Vue {}
</script>

<style scoped>
#header {
	background: #3d3d3d;
	color: #eee;
	width: 100%;
	padding: 20px 0px;
	box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.4);
}
#title {
	font-size: 24px;
	display: inline-block;
	line-height: 36px;
}
.nav {
	float: right;
}
li {
	list-style: none;
	display: inline;
	margin-right: 20px;
	line-height: 36px;
}
ul {
	margin: initial;
	padding: initial;
}
a {
	color: #eee;
	text-decoration: none;
}
</style>
