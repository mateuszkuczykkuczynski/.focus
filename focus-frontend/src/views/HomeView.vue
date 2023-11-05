<template>
  <main>
    <TheWelcome />
    <!-- Add a logout button -->
    <button @click="logout">Logout</button>
  </main>
</template>

<script setup>
import { useAuthStore } from '@/stores/authUser';
import TheWelcome from '../components/TheWelcome.vue';

// Use the auth store
const authStore = useAuthStore();

// Define the logout function
const logout = () => {
  authStore.logout();
};
</script>
