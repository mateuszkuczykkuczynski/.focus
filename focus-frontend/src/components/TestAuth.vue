<template>
  <div>
    <div v-if="!authStore.isLoggedIn">
      <h3>Login</h3>
      <input v-model="username" placeholder="Username">
      <input v-model="password" placeholder="Password" type="password">
      <button @click="login">Login</button>
    </div>
    <div v-else>
      {{ authStore.loginMessage }}
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>


<script>
import { useAuthStore } from '@/stores/authUser'; // Adjust the path to where your store is located
import { ref } from "vue";

export default {
  name: 'AuthTestComponent',
  setup() {
    const authStore = useAuthStore();
    const username = ref('');
    const password = ref('');

    return {
      authStore,
      login: () => authStore.login(username.value, password.value),
      logout: authStore.logout,
      username,
      password,
    };
  },
};
</script>
