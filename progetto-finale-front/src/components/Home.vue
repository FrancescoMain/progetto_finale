<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from "../stores/auth"
import ApartmentList from './ApartmentList.vue';

const authStore = useAuthStore();

onMounted(async () => {

    await authStore.getUser()


});



</script>

<template>
    <div v-if="authStore.user">
        <h1>{{ authStore.user.name }}</h1>
        <p>{{ authStore.user.email }}</p>
        <p>asfd{{ authStore.isAuthenticated }}</p>
    </div>
    <div v-else>
        <h1>Go and Login</h1>
    </div>

    <ApartmentList/>
</template>