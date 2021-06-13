import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue';
import Current from '../views/Current.vue';
import Air from '../views/Air.vue';
import Forecast from '../views/Forecast.vue';

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
    path: '/forecast',
    name: 'Forecast',
    component: Forecast
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router