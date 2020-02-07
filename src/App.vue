<template>
  <div id="app">
		<myheader></myheader>
		<ul>
			<li v-for="item in items" :key="item.message">
				{{ item.message }}
			</li>
		</ul>
		<button @click="push()">push</button>

		<p v-if="msg.length > 0">{{ msg }}</p>
		<p v-else>no text</p>
		<input type="text" v-model="msg">
		<button @click="clear()">clear</button>
  </div>
</template>

<script>
import myheader from './components/myheader'

export default {
	components: {
		myheader
	},
	data() {
		return {
			items: [
				{ message: 'Foo' },
				{ message: 'Bar' }
			],
			msg: 'Hello, World!'
		}
	},
	methods: {
		clear() {
			this.msg = ''
		},
		push(){
			this.items.push({ message: 'New' })
		}
	}
}
</script>

<style>
li {
	font-size: 24px;
}
</style>
