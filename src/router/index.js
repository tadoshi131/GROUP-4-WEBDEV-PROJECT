import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Peley from '../views/Peley.vue'
import Barcellano from '../views/Barcellano.vue'
import Lara from '../views/Lara.vue'
import Oli from '../views/Oli.vue'
import Brutas from '../views/Brutas.vue'
import Enciso from '../views/Enciso.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/peley',
    name: 'peley',
    component: Peley
  },
  {
    path: '/barcellano',
    name: 'barcellano',
    component: Barcellano
  },
  {
    path: '/lara',
    name: 'lara',
    component: Lara
  },
  {
    path: '/oli',
    name: 'oli',
    component: Oli
  },
  {
    path: '/brutas',
    name: 'brutas',
    component: Brutas
  },
    {
    path: '/enciso',
    name: 'enciso',
    component: Enciso
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
