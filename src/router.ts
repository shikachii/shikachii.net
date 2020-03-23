import Vue from 'vue'
import Router from 'vue-router'

import Content from './components/Content.vue'
import Info from './components/Info.vue'
import Links from './components/Links.vue'
import Works from './components/Works.vue'
import IDs from './components/IDs.vue'
import Contact from './components/Contact.vue'
import App from './App.vue'

Vue.use(Router)

const routes = [
	{ path: '/', component: Content },
	{ path: '/content', component: Content },
	{ path: '/info', component: Info },
	{ path: '/links', component: Links },
	{ path: '/Works', component: Works },
	{ path: '/IDs', component: IDs },
	{ path: '/Contact', component: Contact },
]

const router = new Router({
	routes,
	mode: 'history'
})

export default router

