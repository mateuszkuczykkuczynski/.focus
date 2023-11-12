<template>
<div class="relative min-h-screen bg-gray-100 overflow-hidden">
  <SecondaryNavbar/>
  <div class="mt-32 z-10 relative flex justify-center items-center">
    <div class="w-[500px]">
      <div class="bg-white shadow-lg border border-gray-300 rounded-lg max-w-sm py-4 mx-10 sm:p-6 lg:p-8">
        <form class="space-y-6 w-100" action="#">
          <h3 class="text-xl font-medium text-gray-900">Sign in</h3>
          <div>
            <button type="button" class="w-[100%] text-white bg-[#303030] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
              <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
              Sign in with Google
            </button>
          </div>
          <div>
            <label for="email" class="text-sm font-medium text-gray-900 block mb-2">Your email</label>
            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required="">
          </div>
          <div>
            <label for="username" class="text-sm font-medium text-gray-900 block mb-2">Username</label>
            <input type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="FocusMaster" required="">
          </div>
          <div>
              <label for="password" class="text-sm font-medium text-gray-900 block mb-2">Your password</label>
              <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="">
          </div>
          <button type="submit" class="w-full text-white bg-[#303030] hover:bg-[#505050] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register account</button>
        </form>
      </div>
    </div>
  </div>

  <div class="absolute z-1 top-0 right-0 bg-black opacity-90 w-[55vw] h-[220vh] rotate-[55deg]"></div>
  <div class="absolute z-1 top-0 right-0 bg-black opacity-90 w-[40vw] h-[220vh] rotate-[55deg]"></div>
</div>
</template>

<script>
  import axios from 'axios';
  import Navbar_second from "@/components/Navbar/SecondaryNavbar.vue";
  import SecondaryNavbar from "@/components/Navbar/SecondaryNavbar.vue";

  export default {
    name: 'Sign Up',
    components: {SecondaryNavbar}
  }
</script>