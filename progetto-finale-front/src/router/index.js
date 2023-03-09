import {createRouter, createWebHistory } from "vue-router";

import { createApp } from 'vue'

import App from '../../src/app.vue'
import { useAuthStore } from "../stores/auth"
import { createPinia } from 'pinia'


import Home from '../components/Home.vue'
import AdvancedSearch from '../components/AdvancedSearch.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
const authStore = useAuthStore();

const routes = [
        {path: '/', name: 'Home', component: Home},
        {path: '/advancedsearch', name: 'AdvancedSearch', component: AdvancedSearch},
        {path: '/login', name: 'Login', component: () => import("../components/Login.vue")},
        {path: '/register', name: 'Register', component: () => import("../components/Register.vue")},
        {
            path: "/dashboard",
            name: "Dashboard",
            component: () => import("../components/Dashboard.vue"),
            beforeEnter: async  (to, from, next) => {
                await authStore.getUser(); // chiamata a getUser per verificare l'autenticazione
                if (authStore.isAuthenticated) {
                    console.log(authStore.isAuthenticated);
                    next(); // Se l'utente è autenticato, lascia accedere alla rotta
                } else {
                    next("/login"); // Se l'utente non è autenticato, reindirizza alla pagina di login
                    console.log(authStore.isAuthenticated);

                }
            },
        },
        {
            path: "/myapartment",
            name: "MyApartment",
            component: () => import("../components/MyApartment.vue"),
            beforeEnter: async  (to, from, next) => {
                await authStore.getUser(); // chiamata a getUser per verificare l'autenticazione
                if (authStore.isAuthenticated) {
                    console.log(authStore.isAuthenticated);
                    next(); // Se l'utente è autenticato, lascia accedere alla rotta
                } else {
                    next("/login"); // Se l'utente non è autenticato, reindirizza alla pagina di login
                    console.log(authStore.isAuthenticated);

                }
            },
        },

        


];

const router = createRouter({
    history: createWebHistory(),
    routes 
})

export default router;