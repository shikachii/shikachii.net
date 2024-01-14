import Vue from 'vue'
import Router from 'vue-router'

import Content from './components/Content.vue'
import Info from './components/Info.vue'
import Links from './components/Links.vue'
import Works from './components/Works.vue'
import Careers from '@/views/Careers.vue';
import IDs from './components/IDs.vue'
import Contact from './components/Contact.vue'
import App from './App.vue'

Vue.use(Router)

const routes = [
  { path: '/', component: Info },
  { path: '/content', component: Content },
  { path: '/info', component: Info },
  { path: '/links', component: Links },
  { path: '/works', component: Works },
  { path: '/careers', component: Careers },
  // { path: '/ids', component: IDs },
  { path: '/contact', component: Contact },
]

const router = new Router({
	routes,
	mode: 'history'
})

export default router

