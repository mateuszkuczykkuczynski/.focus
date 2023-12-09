<script setup>

import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";
</script>

<template>
    <nav class="flex items-center justify-between w-[80%] mx-auto my-5 z-10">
        <div>
            <RouterLink to="/" class="text-5xl text-[#303030] font-bold custom-text-shadow">.focus</RouterLink>
        </div>
        <ul class="flex items-center">
            <li class="mx-6">
                <RouterLink class="text-black"  to="/">Home</RouterLink>
            </li>
            <template v-if="user">
              <li class="mx-6">
                  <RouterLink class="text-black"  to="/">Contact</RouterLink>
              </li>
              <li class="mx-6">
                  <RouterLink class="text-black"  to="/reports">Reports</RouterLink>
              </li>
              <li class="mx-6">
                  <RouterLink to="/session" class="text-black">Session</RouterLink>
              </li>
              <li class="mx-6">
                  <RouterLink to="/statistics" class="text-black">Statistics</RouterLink>
              </li>
              <li class="mx-6">
                  <UserDropdown :user="user"/>
              </li>
            </template>
            <template v-else>
              <li class="mx-6">
                  <RouterLink to="/log-in" class="text-black font-bold">
                  Login
                  </RouterLink>
              </li>
              <li class="mx-6">
                <RouterLink to="/sign-up">
                  <button class="btn rounded-xl bg-[#303030] py-2 px-5 text-white">
                          Sign Up
                  </button>
                </RouterLink>
              </li>
            </template>

        </ul>
    </nav>
</template>
<script>
export default {
  name: 'SecondaryNavbar',
  data(){
    return {
      user: {
        username: 'Banti016'
      }
    }
  },
}
</script>
<style scoped>
.custom-text-shadow {
  text-shadow: 3px 1px 1px lightgray;
}
</style>