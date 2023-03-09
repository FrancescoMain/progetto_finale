<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
const form = ref({
    name: '',
    dataOfBirth: '',
    email: '',
    password: '',
    passord_confirmation: ''
})


</script>

<template>

<form @submit.prevent="authStore.handleRegister(form)">
        <input type="text" v-model="form.name" placeholder="Name">
        <div v-if ="authStore.errors.name">
            <span>
                {{ authStore.errors.name[0] }}
            </span>
        </div>

        <input type="text" v-model="form.dataOfBirth" placeholder="dataOfBirth">

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
    

        <button type="submit">Register</button>
</form>

</template>