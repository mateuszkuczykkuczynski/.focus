<template>
  <div>
    <h3>Login</h3>
    <input v-model="username" placeholder="Username">
    <input v-model="password" placeholder="Password" type="password">
    <button @click="login">Login</button>
    <!-- The logout button has been removed -->
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/authUser';
import { ref } from "vue";

export default {
  name: 'Login',
  setup() {
    const authStore = useAuthStore();
    const username = ref('');
    const password = ref('');

    return {
      authStore,
      login: () => authStore.login(username.value, password.value),
      username,
      password,
    };
  },
};
</script>
