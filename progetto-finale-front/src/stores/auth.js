import { defineStore } from "pinia";
import axios from "axios";


export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
        authErrors: []
    }),
    getters: {
        user: (state) => state.authUser,
        errors: (state) => state.authErrors,
        isAuthenticated: (state) => !!state.authUser, // Nuovo getter
    },
    actions: {
        async getToken() {
            await axios.get("/sanctum/csrf-cookie");

        },
        async getUser() {
            await this.getToken();
            const data = await axios.get('/api/user');
            this.authUser = data.data;
        },
        async handleLogin(data) {
            this.authErrors = [];
            await this.getToken();
            try {
                await axios.post('/login', {
                    email: data.email,
                    password: data.password
                });
                this.router.push('/');
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
        async handleRegister(data) {
            this.authErrors = [];

            await this.getToken();
            try {
                await axios.post('/register', {
                    name: data.name,
                    date_of_birth: data.dataOfBirth,
                    email: data.email,
                    password: data.password,
                    passord_confirmation: data.passord_confirmation,
                });
                this.router.push("/");
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
        async handleLogout() {
            await axios.post('/logout');
            this.authUser = null;
        },
        async handleForgotPassword(email) {
            this.getToken();
            try {
                await axios.post("/forgot-password", {
                    email: email,
                });
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }

        }
    },
});