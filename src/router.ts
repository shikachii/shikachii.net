import Vue from 'vue'
import Router from 'vue-router'

import Content from './components/Content.vue'
import Info from './components/Info.vue'
import Links from './components/Links.vue'
import App from './App.vue'

Vue.use(Router)

const routes = [
	{ path: '/', component: Content },
	{ path: '/content1', component: Content },
	{ path: '/content2', component: Content },
	{ path: '/info', component: Info },
	{ path: '/links', component: Links },
]

const router = new Router({
	routes,
	mode: 'history'
})

export default router

