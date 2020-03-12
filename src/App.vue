<template>
  <div id="app">
		<myheader></myheader>
		<!--
		<ul>
			<li v-for="(item, index) in items" :key="index">
				{{ item.message }}
			</li>
		</ul>
		<button @click="push()">push</button>

		<p v-if="msg.length > 0">{{ msg }}</p>
		<p v-else>no text</p>
		<input type="text" v-model="msg">
		<button @click="clear()">clear</button>
		-->

		<Info class="view" />
		<Links class="view" />
		<Contact class="view" />

		<router-view :message="msg" class="view"></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import myheader from './components/header.vue'
import Info from './components/Info.vue'
import Links from './components/Links.vue'
import Contact from './components/Contact.vue'

@Component({
  components: {
    myheader,
		Info,
		Links,
		Contact,
  },
})
export default class App extends Vue {
	items: object[] = [
		{ message: 'Foo' },
		{ message: 'Bar' },
	]
	public msg: string = 'Hello, World!'
	
	clear() {
		this.msg = ''
	}

	push(){
		this.items.push({ message: 'New' })
	}
}
</script>

<style>
body {
	background: #eee;
	color: #333;
	margin: initial;
}
li {
	font-size: 24px;
}
.view {
	width: 80%;
	margin: 0 auto;
}

.content {
	margin-top: 40px;
	width: 400px;
	text-align: center;
}

.title {
	font-size: 36px;
}

a {
	color: #333;
	text-decoration: none;
	transition: color 500ms;
}

a:hover {
	color: #888;
	transition: color 500ms;
}

.description {
	font-size: 18px;
	margin-top: 20px;
}

</style>
