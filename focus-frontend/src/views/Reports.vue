<script setup>
import SecondaryNavbar from "@/components/Navbar/SecondaryNavbar.vue";
import ReportCalendar from "@/components/Calendars/ReportCalendar.vue";
</script>

<template>
<SecondaryNavbar/>
<div class="w-[80%] mx-auto my-20">
    <h1 class="text-4xl font-bold text-[#303030]">Reports</h1>

    <div class="flex justify-between items-center my-10">
      <ReportCalendar/>
      <div>b</div>
    </div>
</div>
</template>

<style scoped>
</style>