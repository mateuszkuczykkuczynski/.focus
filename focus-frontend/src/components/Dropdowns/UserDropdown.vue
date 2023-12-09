<template>
  <li class="relative">
    <button @click="toggleDropdown" class="bg-black text-white px-4 py-1 rounded-xl flex items-center gap-3">
      <!-- SVG icon and username (kept from your original code) -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
      </svg>
      {{ user.username }}
    </button>

    <!-- Dropdown Menu -->
    <div v-if="isDropdownOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg shadow-[#202020] z-20">
      <RouterLink to="/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</RouterLink>
      <RouterLink to="/logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</RouterLink>
    </div>
  </li>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'UserDropdown',
  props: {
    user: Object
  },
  setup() {
    const isDropdownOpen = ref(false);

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    return { isDropdownOpen, toggleDropdown };
  }
}
</script>
