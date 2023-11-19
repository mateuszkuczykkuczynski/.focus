<script>

import {defineComponent} from "vue";
import HomeHeroSection from "@/components/Home/HomeHeroSection.vue";
import MainNavbar from "@/components/Navbar/MainNavbar.vue";

export default defineComponent({
  components: {MainNavbar, HomeHeroSection}
})


</script>

<template>
<MainNavbar/>
<div class="absolute top-[-50%] right-[-45%] w-[100vw] h-[200vh] bg-[#303030] rounded-full z-[-1]"></div>
<home-hero-section/>
<div class="w-full bg-[#1E1E1E]">
    <div class="w-4/5 mx-auto h-[80vh] py-16">
        <div class="text-center">
            <span class="text-white font-bold text-5xl">Why .focus?</span>
        </div>
        <div class="text-center my-7">
            <span class="text-white font-thin text-3xl">Reveal yourself</span>
        </div>
        <div class="flex justify-evenly">
            <div class="flip flex justify-evenly mt-24">
                <div class="group h-96 w-96 perspective-[1000px] relative">
                    <div class="flip-front h-full w-full rounded-xl shadow-xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <!-- Back of the Card -->
                        <div class=" absolute inset-0 flex justify-center items-center bg-[#141414] rounded-xl face transition-transform transform rotate-y-0">
                            <p class="text-7xl text-[#616161] transform rotate-90">.focus</p>
                        </div>
                        <!-- Front of the Card -->
                        <div class="flip-back absolute inset-0 flex flex-col justify-center items-center bg-[#141414] rounded-xl px-12 text-slate-200 face transition-transform transform rotate-y-180">
                            <h1>Helol</h1>
                            <p>dsadasd</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flip flex justify-evenly mt-24">
                <div class="group h-96 w-96 perspective-[1000px] relative">
                    <div class="flip-front h-full w-full rounded-xl shadow-xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <!-- Back of the Card -->
                        <div class=" absolute inset-0 flex justify-center items-center bg-[#141414] rounded-xl face transition-transform transform rotate-y-0">
                            <p class="text-7xl text-[#616161] transform rotate-90">.focus</p>
                        </div>
                        <!-- Front of the Card -->
                        <div class="flip-back absolute inset-0 flex flex-col justify-center items-center bg-[#141414] rounded-xl px-12 text-slate-200 face transition-transform transform rotate-y-180">
                            <h1>Helol</h1>
                            <p>dsadasd</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>