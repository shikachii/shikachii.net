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

		<!--
		<Info class="view" />
		<Links class="view" />
		<Works class="view" />
		<IDs class="view" />
		<Contact class="view" />
		-->

		<router-view class="view" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import myheader from '@/components/header.vue'
import Info from '@/components/Info.vue'
import Links from '@/components/Links.vue'
import Contact from '@/components/Contact.vue'
import Works from '@/components/Works.vue'
import IDs from '@/components/IDs.vue'

@Component({
  components: {
    myheader,
		Info,
		Links,
		Contact,
		Works,
		IDs,
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
	font-family: sans-serif;
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
	margin-bottom: 40px;
	max-width: 800px;
	text-align: center;
}

.title {
	font-size: 36px;
}

.title::before {
	content: "";
	display: inline-block;
	background: #333;
	width: 50px;
	height: 2px;
	margin-right: 8px;
	vertical-align: middle;
	margin-top: -4px;
}

.title::after {
	content: "";
	display: inline-block;
	background: #333;
	width: 50px;
	height: 2px;
	margin-left: 8px;
	vertical-align: middle;
	margin-top: -4px;
}

a {
	color: #333;
	text-decoration: none;
	transition: all 200ms;
}

a:hover {
	color: #888;
	transition: all 200ms;
}

.description {
	font-size: 18px;
	margin-top: 20px;
}

</style>
