import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Portfolio from '../views/Portfolio.vue'
import Processes from '../views/Processes.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Services',
    name: 'Services',
    component: Services
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/Processes',
    name: 'Processes',
    component: Processes
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
