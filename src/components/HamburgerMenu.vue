<template>
	<div id="HamburgerMenu">
		<div class="menu">
			<transition name="fade">
			<div class="shadow" v-if="isActive" @click="inverse()"></div>
			</transition>
			<transition name="slide">
			<div class="links" v-if="isActive">
				<ul>
					<li class="m-title">Menu</li>
					<li v-for="(link, index) in links" :key=index @click="inverse()">
						<router-link :to=link.path>
							{{ link.title }}
						</router-link>
					</li>
				</ul>
			</div>
			</transition>
		</div>

		<div v-if="isActive" class="hamburger active" @click="inverse()">
			<div></div>
			<div></div>
		</div>
		<div v-else class="hamburger" @click="inverse()">
			<div></div>
			<div></div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class HamburgerMenu extends Vue {
	isActive: boolean = false

	links: object[] = [
		{ path: '/Info', title: 'Home' },
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
	position: relative;
	right: 0px;
	top: 0px;	
	width: 24px;
	height: 36px;
}

.hamburger div {
	position: absolute;
	left: 0;
	width: 100%;
	height: 2px;
	background: #eee;
}

.hamburger.active div {
	background: #333;
	transition: color 200ms;
}

.hamburger div:nth-of-type(1) {
	top: 12px;
	transform: rotate(0deg);
}

.hamburger div:nth-of-type(2) {
	bottom: 12px;
	transform: rotate(0deg);
}

.hamburger.active div:nth-of-type(1) {
	-webkit-transform: translateY(5px) rotate(-45deg);
	transform: translateY(5px) rotate(-45deg);
	transition: all 200ms;
}

.hamburger.active div:nth-of-type(2) {
	-webkit-transform: translateY(-5px) rotate(45deg);
	transform: translateY(-5px) rotate(45deg);
	transition: all 200ms;
}

.links {
	position: fixed;
	right: 0px;
	top: 0;
	background: #eee;
	width: 250px;
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
	z-index: -999;
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
	right: -250px;
}

ul {
	margin: initial;
	padding: initial;
	margin-top: 80px;
}

li {
	list-style-type: none;
	margin-left: 20px;
	margin-bottom: 12px;
}

.m-title {
	border-bottom: 1px solid #333;
	color: #333;
	font-size: 30px;
}

a {
	display: inline-block;
	margin-left: 10px;
	width: 90%;
	font-size: 26px;
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
