import Vue from 'vue'
import Router from 'vue-router'

import Content from './components/content.vue'

Vue.use(Router)

const routes = [
	{ path: '/content1', component: Content },
	{ path: '/content2', component: Content }
]

const router = new Router({
	routes,
	mode: 'history'
})

export default router

