import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue';
import Current from '../views/Current.vue';
import Air from '../views/Air.vue';
import Daily from '../views/Daily.vue';
import Hourly from '../views/Hourly.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/current',
    name: 'Current',
    component: Current
  },
  {
    path: '/air',
    name: 'Air',
    component: Air
  },
  {
    path: '/daily',
    name: 'Daily',
    component: Daily
  },
  {
    path: '/hourly',
    name: 'Hourly',
    component: Hourly
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router