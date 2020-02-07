import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'
import HelloWorld from './components/header.vue'

Vue.use(Router)

const routes = [
	{ path: '/', component: App },
	{ path: '/hello', component: HelloWorld }
]

const router = new Router({
	routes,
	mode: 'history'
})

export default router

