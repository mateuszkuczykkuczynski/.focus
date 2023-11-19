<script setup>

</script>

<template>
    <nav class="flex items-center justify-between w-[80%] mx-auto my-5 z-10">
        <div>
            <RouterLink to="/" class="text-5xl text-[#303030] font-bold">.focus</RouterLink>
        </div>
        <ul class="flex items-center">
            <li class="mx-6">
                <RouterLink class="text-black"  to="/">Home</RouterLink>
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
        </ul>
    </nav>
</template>

<style scoped>

</style>