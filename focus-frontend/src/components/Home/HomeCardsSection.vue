<template>
    <div class="flex justify-evenly">
        <!-- Card 1 - Time Management -->
        <FlippedCard frontTitle="Efficiency" backTitle="Time Management" backText="Streamlined session tracking for optimal focus and efficiency."/>

        <!-- Card 2 - Statistics & Analysis -->
        <FlippedCard frontTitle="Insight" backTitle="Insightful Statistics" backText="Detailed analytics to track and improve your productivity patterns."/>
    </div>
</template>
<script setup>
import FlippedCard from "@/components/Cards/FlippedCard.vue";
</script>