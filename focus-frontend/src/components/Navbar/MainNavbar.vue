<script setup>

</script>

<template>
    <nav class="flex items-center justify-between w-[80%] mx-auto my-5 z-10">
        <div>
            <RouterLink to="/" class="text-5xl text-[#303030] font-bold">.focus</RouterLink>
        </div>
        <ul class="flex items-center">
            <li class="mx-6">
                <RouterLink class="text-white"  to="/">Home</RouterLink>
            </li>
            <li class="mx-6">
                <RouterLink class="text-white"  to="/reports">Reports</RouterLink>
            </li>
            <li class="mx-6">
                <RouterLink to="/session" class="text-white">Session</RouterLink>
            </li>
            <li class="mx-6">
                <RouterLink to="/statistics" class="text-white">Statistics</RouterLink>
            </li>
            <li class="mx-6">
                <RouterLink to="/log-in" class="text-white">Login</RouterLink>
            </li>
            <li class="mx-6">
                <RouterLink to="/sign-up" class="">
                    <button class="btn rounded-xl bg-white py-2 px-5 text-[#303030]">
                        Sign Up
                    </button>
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>

</style>