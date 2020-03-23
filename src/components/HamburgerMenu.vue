<template>
	<div id="HamburgerMenu">
		<div class="menu">
			<transition name="fade">
			<div class="shadow" v-if="isActive" @click="inverse()"></div>
			</transition>
			<transition name="slide">
			<div class="links" v-if="isActive">
				<ul>
					<li v-for="(link, index) in links" :key=index @click="inverse()">
						<router-link :to=link.path>
							{{ link.title }}
						</router-link>
					</li>
				</ul>
			</div>
			</transition>
		</div>
		<div class="hamburger" @click="inverse()">三</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class HamburgerMenu extends Vue {
	isActive: boolean = false

	links: object[] = [
		{ path: '/', title: 'Home' },
		{ path: '/Links', title: 'Links' },
		{ path: '/Works', title: 'Works' },
		{ path: '/IDs', title: 'IDs' },
	]

	inverse() {
		this.isActive = !this.isActive
	}
}
</script>

<style scoped>
#HamburgerMenu {
	position: fixed;
	right: 5%;
	top: 20px;	
}

.hamburger {
	color: #888;
	position: relative;
	right: 0px;
	top: 0px;	
	font-size: 24px;
	line-height: 36px;
}

.hamburger.active {
	color: #333;
	transition: color 200ms;
}

.links {
	position: fixed;
	right: 0px;
	top: 0;
	background: #eee;
	width: 370px;
	height: 100%;
}

.shadow {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
	z-index: -999;
}

.menu-enter-active, .menu-leave-active {
	transition: opacity 400ms;
}

.menu-enter, .menu-leave-to {
	opacity: 0;
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
	right: -380px;
}

ul {
	margin: initial;
	padding: initial;
	margin-top: 80px;
}

li {
	list-style-type: none;
	margin-left: 30px;
	margin-bottom: 8px;
}

a {
	color: #333;
	text-decoration: none;
	transition: color 200ms;
}

a:hover {
	color: #888;
	transition: color 200ms;
}
</style>
