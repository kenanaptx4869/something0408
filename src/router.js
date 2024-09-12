import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from './components/scheme.vue'
import otherView from './components/other.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/other', component: otherView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;