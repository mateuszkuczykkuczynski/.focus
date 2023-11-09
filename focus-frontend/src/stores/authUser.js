import { defineStore } from 'pinia';
import axios from 'axios';
import router from "@/router";
import { getJwtCreateUrl } from '@/config/api';
import jwtDecode from 'jwt-decode';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: localStorage.getItem('accessToken') || null,
    refreshToken: localStorage.getItem('refreshToken') || null,
  }),
    getters: {
    isAccessTokenValid: (state) => {
      if (!state.accessToken) return false;
      const { exp } = jwtDecode(state.accessToken);
      return Date.now() < exp * 1000;
    },
  },
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
        const url = getJwtCreateUrl();
        const response = await axios.post(url, {
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

// Set up Axios interceptor
axios.interceptors.request.use(async (config) => {
  const authStore = useAuthStore();
  if (authStore.accessToken && !authStore.isAccessTokenValid) {
    const newAccessToken = await authStore.refreshToken();
    config.headers['Authorization'] = `JWT ${newAccessToken}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});