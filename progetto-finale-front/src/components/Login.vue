<script setup>
import {ref} from 'vue';
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();



const form = ref({
    email: '',
    password: ''
})


</script>

<template>
    <form @submit.prevent="authStore.handleLogin(form)">
        <input type="email" v-model="form.email" placeholder="Email">
        <div v-if ="authStore.errors.email">
            <span>
                {{ authStore.errors.email[0] }}
            </span>
        </div>
        <input type="password" v-model="form.password" placeholder="Password">
        <div v-if ="authStore.errors.password">
            <span>
                {{ authStore.errors.password[0] }}
            </span>
        </div>
        <button type="submit">Login</button>
    </form>
</template>