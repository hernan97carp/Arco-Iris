import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/shared/pages/HomePage.vue'
import AboutPage from '@/shared/pages/AboutPage.vue'
import ServicesPage from '@/shared/pages/ServicesPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Public
    { path: '/', name: 'inicio', component: HomePage },
    { path: '/sobreNosotros', name: 'sobre', component: AboutPage },
    { path: '/servicios', name: 'servicios', component: ServicesPage },

    // Default
    { path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home' }) }
  ]
})

export default router
