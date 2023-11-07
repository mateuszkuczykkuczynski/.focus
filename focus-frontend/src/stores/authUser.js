import { defineStore } from 'pinia';
import axios from 'axios';
import router from "@/router";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: localStorage.getItem('accessToken') || null,
    refreshToken: localStorage.getItem('refreshToken') || null,
  }),
  actions: {
  setTokens(data) {
    localStorage.setItem('accessToken', data.access);
    localStorage.setItem('refreshToken', data.refresh);
    this.accessToken = data.access;
    this.refreshToken = data.refresh;
    axios.defaults.headers.common['Authorization'] = `JWT ${data.access}`;
  },
  clearTokens() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.accessToken = null;
    this.refreshToken = null;
    delete axios.defaults.headers.common['Authorization'];
  },

  async login(username, password) {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/jwt/create', {
        username,
        password,
      });

      const { access, refresh } = response.data;
        this.setTokens({ access, refresh });
      await router.push('/');
      } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed: ' + error);
      }
    },

   async logout() {
    this.clearTokens();
    await router.push('/log-in');
    },
  },
});

