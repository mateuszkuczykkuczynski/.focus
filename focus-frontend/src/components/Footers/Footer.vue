<template>
  <footer class="bg-[#1E1E1E] text-white">
    <div class="w-4/5 mx-auto py-8 flex flex-col md:flex-row justify-between items-center">
      <!-- Footer Logo and Description -->
      <div class="mb-6 md:mb-0">
        <div>
            <RouterLink to="/" class="text-5xl text-white font-bold custom-text-shadow">.focus</RouterLink>
        </div>
        <p class="text-gray-400 text-sm">Maximizing productivity, one session at a time.</p>
      </div>

      <!-- Quick Links -->
      <div class="flex flex-col md:flex-row gap-6">
        <div class="flex flex-col">
          <span class="font-semibold mb-2">Quick Links</span>
          <a href="/about" class="text-gray-400 text-sm hover:text-white">About Us</a>
          <a href="/features" class="text-gray-400 text-sm hover:text-white">Features</a>
          <a href="/pricing" class="text-gray-400 text-sm hover:text-white">Pricing</a>
          <a href="/faq" class="text-gray-400 text-sm hover:text-white">FAQ</a>
        </div>

        <!-- Contact Info -->
        <div class="flex flex-col">
          <span class="font-semibold mb-2">Contact</span>
          <span class="text-gray-400 text-sm">Email: contact@focus.com</span>
          <span class="text-gray-400 text-sm">Phone: +123 456 7890</span>
        </div>
      </div>

      <!-- Social Media Icons -->
      <div>
        <span class="font-semibold mb-2 block">Follow Us</span>
        <div class="flex gap-4">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <!-- Insert SVG code for Facebook Icon -->
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter">
            <!-- Insert SVG code for Twitter Icon -->
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram">
            <!-- Insert SVG code for Instagram Icon -->
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.custom-text-shadow {
  text-shadow: 3px 1px 1px gray;
}
</style>