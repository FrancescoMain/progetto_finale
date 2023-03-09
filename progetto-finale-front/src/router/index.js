import {createRouter, createWebHistory } from "vue-router";

import Home from '../components/Home.vue'
import AdvancedSearch from '../components/AdvancedSearch.vue'

const routes = [
        {   path: '/', name: 'Home', component: Home},
        {   path: '/advancedsearch', name: 'AdvancedSearch', component: AdvancedSearch},
        {   path: '/login', name: 'Login', component: () => import("../components/Login.vue")},
        {   path: '/register', name: 'Register', component: () => import("../components/Register.vue")},
        {   path: '/dashboard', name: 'Dashboard', component: () => import("../components/Dashboard.vue")},
        {   path: '/apartments/:id', name: 'SingleApartment', component: () => import("../components/SingleApartment.vue") },

        


];

const router = createRouter({
    history: createWebHistory(),
    routes 
})

export default router;