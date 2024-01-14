<template>
	<div v-if="isActive" id="HamburgerMenu" class="active">
		<Menu :isActive="isActive" @click="inverse()"/>
		<Hamburger :isActive="isActive" @click="inverse()"/>
	</div>
	<div v-else id="HamburgerMenu">
		<Menu :isActive="isActive" @click="inverse()"/>
		<Hamburger :isActive="isActive" @click="inverse()"/>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Hamburger from '@/components/Hamburger.vue'
import Menu from '@/components/Menu.vue'
@Component({
	components: {
		Hamburger,
		Menu,
	},
})
export default class HamburgerMenu extends Vue {
	isActive: boolean = false

	inverse() {
		this.isActive = !this.isActive
	}
}
</script>

<style scoped>
#HamburgerMenu {
	position: absolute;
	right: 5%;
	top: 20px;	
	z-index: 9;
}

#HamburgerMenu.active {
	position: fixed;
	right: 5%;
	top: 20px;
}
</style>
