<script setup>
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore();

</script>

<template>
    <nav>
        <div>
            <a href="#">BOH</a>
            <button>
                <span>open main enu</span>
            </button>
            <div>
                <ul>

                    <li>
                        <router-link :to="{name : 'Home'}">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{name : 'AdvancedSearch'}">Advanced Search</router-link>
                    </li>

                   

                    <template v-if="!authStore.user">
                    <li>
                        <router-link :to="{name : 'Login'}">Login</router-link>
                    </li>
                    <li>
                        <router-link :to="{name : 'Register'}">Register</router-link>
                    </li>
                    </template>

                    <template v-else>
                        
                        <li>
                        <router-link :to="{name : 'Dashboard'}">Dashboard</router-link>
                        </li>
                        <li>
                        <router-link :to="{name : 'MyApartment'}">My Apartment</router-link>
                        </li>
                        <button @click="authStore.handleLogout"> Logout</button>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>