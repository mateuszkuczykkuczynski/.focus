<script>

import {defineComponent} from "vue";
import HomeHeroSection from "@/components/Home/HomeHeroSection.vue";
import MainNavbar from "@/components/Navbar/MainNavbar.vue";
import ProductivityToolsSection from "@/components/Home/ProductivityToolsSection.vue";
import TestimonialsSection from "@/components/Home/TestimonialsSection.vue";
import HomeCardsSection from "@/components/Home/HomeCardsSection.vue";
import HomeCTASection from "@/components/Home/HomeCTASection.vue";
import Footer from "@/components/Footers/Footer.vue";

export default defineComponent({
  components: {
    Footer,
    HomeCTASection,
    HomeCardsSection,
    TestimonialsSection,
    ProductivityToolsSection,
    MainNavbar,
    HomeHeroSection,
  }
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
        <HomeCardsSection/>
   </div>

    <ProductivityToolsSection/>

    <TestimonialsSection/>

    <HomeCTASection/>
</div>
<Footer/>
</template>