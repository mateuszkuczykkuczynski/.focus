<script setup>
</script>

<template>
<div class="flex h-[80vh] w-4/5 mx-auto justify-center items-center">
    <div class="w-1/2 flex flex-col space-y-6">
        <div class="text-[#303030] text-7xl font-bold">.Maximize</div>
        <div class="my-5 mx-20">
            <div class="text-gray-400 text-5xl font-bold">Productivity</div>
        </div>

        <div class="text-[#303030] text-7xl font-bold">.Minimize</div>
        <div class="my-5 mx-20">
            <div class="text-gray-400 text-5xl font-bold">Burnout</div>
        </div>
        <button class="bg-[#1E1E1E] text-white mt-5 px-8 py-3 rounded-xl w-[20%]">Start focus</button>
    </div>

    <div class="w-1/2 relative">
        <div class="flex justify-end z-10 space-y-4">
            <div>
                <!-- Your character illustration -->
                <div class="mt-10">
                    <img src="@/assets/img/hero.svg">
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<style scoped>

</style>