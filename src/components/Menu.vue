<template>
	<div id="menu">
		<div class="menu">
			<transition name="fade">
			<div class="shadow" v-if="isActive" @click="click()"></div>
			</transition>
			<transition name="slide">
			<div class="links" v-if="isActive">
				<ul>
					<li class="m-title">Menu</li>
					<li v-for="(link, index) in links" :key=index @click="click()">
						<router-link :to=link.path>
							{{ link.title }}
						</router-link>
					</li>
				</ul>
			</div>
			</transition>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
@Component
export default class Menu extends Vue {
	@Prop()
	public isActive: boolean = false

	links: object[] = [
		{ path: '/Info', title: 'Home' },
		{ path: '/Links', title: 'Links' },
		{ path: '/Works', title: 'Works' },
		{ path: '/IDs', title: 'IDs' },
		{ path: '/Contact', title: 'Contact' },
	]

	@Emit()
	public click(){}
}
</script>

<style scoped>
.links {
	position: fixed;
	right: 0px;
	top: 0;
	background: #eee;
	width: 280px;
	height: 100%;
	box-shadow: -2px 0px 10px 6px rgba(100,100,100,0.4);
}

.shadow {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 200ms;
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}

.slide-enter-active, .slide-leave-active {
	transition: right 200ms;
}

.slide-enter, .slide-leave-to {
	right: -280px;
}

ul {
	margin: initial;
	padding: initial;
	margin-left: 25px;
	width: 73%;
}

li {
	list-style-type: none;
	margin-left: 0px;
	margin-bottom: 20px;
}

.m-title {
	border-bottom: 1px solid rgba(100,100,100,0.4);
	color: #333;
	font-size: 24px;
	line-height: 36px;
	padding: 20px 0;
}

a {
	display: inline-block;
	margin-left: 0px;
	width: 100%;
	font-size: 22px;
	color: #333;
	text-decoration: none;
	border-bottom: 1px solid rgba(100,100,100,0.4);
	transition: color 200ms;
}

a:hover {
	color: #888;
	transition: color 200ms;
}
</style>
