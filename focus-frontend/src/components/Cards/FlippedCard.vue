<template>
<div class="flip flex justify-evenly mt-10">
    <div class="group h-96 w-96 perspective-[1000px] relative">
        <div class="flip-front h-full w-full rounded-xl bg-gradient-to-b from-[#1E1E1E] from-10% to-[#0f0f0f] shadow-lg shadow-[#545454] transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <!-- Back of the Card -->
            <div class="absolute inset-0 flex justify-center items-center bg-[#141414] rounded-xl face transition-transform transform rotate-y-0">
              <p class="text-7xl text-[#616161] transform rotate-90">{{ frontTitle }}</p>
            </div>
            <!-- Front of the Card -->
            <div class="flip-back absolute inset-0 flex flex-col justify-center items-center bg-[#141414] rounded-xl px-12 text-slate-200 face transition-transform transform rotate-y-180">
              <h1>{{ backTitle }}</h1>
              <p>{{ backText }}</p>
            </div>
        </div>
    </div>
</div>
</template>
<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  frontTitle: String,
  backTitle: String,
  backText: String,
})
</script>
