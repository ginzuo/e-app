<template>
    <div class="min-h-screen flex items-center justify-center bg-emerald-100">
        <div class="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
            <NuxtLink to="/dashboard" class="text-red-600 text-sm font-semibold">Back</NuxtLink>
            <h2 class="text-emerald-900 text-2xl font-bold text-center mb-6">Login</h2>

            <form @submit.prevent="handleLogin">
                <div class="mb-4">
                    <label for="email" class="block text-emerald-700 font-semibold mb-1">Email</label>
                    <input
                        v-model="email"
                        type="email"
                        id="email"
                        class="w-full px-4 py-2 border border-emerald-300 rounded-lg focus:outline-none focus:border-emerald-500"
                        placeholder="Enter your email"
                    />
                </div>

                <div class="mb-6">
                    <label for="password" class="block text-emerald-700 font-semibold mb-1">Password</label>
                    <input
                        v-model="password"
                        type="password"
                        id="password"
                        class="w-full px-4 py-2 border border-emerald-300 rounded-lg focus:outline-none focus:border-emerald-500"
                        placeholder="Enter your password"
                    />
                </div>

                <button
                    type="submit"
                    class="w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-700 transition duration-200"
                >
                    Login
                </button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleLogin = () => {
    if (email.value && password.value) {
        console.log('Login details:', email.value, password.value)
    }
}
</script>
