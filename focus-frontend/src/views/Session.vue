<template>
<div class="relative min-h-screen overflow-hidden">
  <div class="absolute top-32 right-32">
    <success-alert ref="successAlertRef" message="Session started"/>
  </div>
  <div class="absolute top-32 right-32">
    <error-alert ref="errorAlertRef" message="Please select session time"/>
  </div>

  <SecondaryNavbar/>
  <div class="flex justify-center items-center">
    <div class="text-center my-10">
      <h1 class="text-4xl font-bold text-[#303030]">Session time</h1>

      <!-- DROPDOWN MENU FOR SESSION TIME-->
      <div class="relative inline-block text-left my-5">
        <div>
          <button v-if="!selectedSession" @click="toggleDropdown" type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
            Select session time
            <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
          <button v-else @click="toggleDropdown" type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
            {{ selectedSession.time }} mins
            <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <div v-if="isDropdownOpen" class="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-10 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <div class="py-1" role="none">
            <template v-for="item in sessionTimes">
              <a v-if="item.time" @click="selectTimeForSession(item)" class="text-gray-700 block px-4 py-2 text-sm hover:font-bold" role="menuitem" tabindex="-1">{{ item.time }} mins</a>
            </template>
          </div>
        </div>
      </div>

      <!-- CLOCK CARDS -->
      <div class="flex justify-evenly items-center gap-20 my-5 z-5">
        <div class="gap-5 flex justify-evenly items-center">
          <div v-for="(item, index) in sessionTimerArray.slice(0,2)" :key="index" class="bg-[#303030] text-[250px] rounded-xl text-white py-5 px-10">{{item}}</div>
        </div>
        <div class="gap-5 flex justify-evenly items-center">
          <div v-for="(item, index) in sessionTimerArray.slice(2,4)" :key="index" class="bg-[#303030] text-[250px] rounded-xl text-white py-5 px-10">{{item}}</div>
        </div>
      </div>
      <!--  CLOCK BUTTONS    -->
      <div class="flex justify-evenly items-center gap-20 my-10">
        <button v-if="!isStarted" @click="startSession" class="w-full text-white bg-[#505050] hover:bg-[#505050] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Start session</button>
        <button v-else @click="stopSession" class="w-full text-white bg-[#505050] hover:bg-[#505050] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Stop session</button>
        <button @click="resetSession" class="w-full text-white bg-[#303030] hover:bg-[#505050] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Reset session</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import SecondaryNavbar from "@/components/Navbar/SecondaryNavbar.vue";
  import SuccessAlert from "@/components/Toasts/SuccessAlert.vue";
  import ErrorAlert from "@/components/Toasts/ErrorAlert.vue";


  export default {
    name: 'Session',
    components: {ErrorAlert, SuccessAlert, SecondaryNavbar},
    data() {
      return {
        selectedSession: null,
        selectedSessionId: null,
        sessionTimes: [
          {id: 1, time: 5, timeArray: [0,0,0,5]},
          {id: 2, time: 15, timeArray: [1,5,0,0]},
          {id: 3, time: 30, timeArray: [3,0,0,0]},
          {id: 4, time: 45, timeArray: [4,5,0,0]},
          {id: 5, time: 60, timeArray: [6,0,0,0]}
        ],
        sessionTimerArray: [0, 0, 0, 0],
        isStarted: false,
        intervalId: null,
        isDropdownOpen: false
      };
    },
    methods: {
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },
      selectTimeForSession(item) {
        this.selectedSession = item;
        this.selectedSessionId = item.id - 1;

        // Deep copy the timeArray of the selected session
        this.sessionTimerArray = JSON.parse(JSON.stringify(this.sessionTimes[this.selectedSessionId].timeArray));

        this.toggleDropdown();
      },
      startSession() {
        if(this.selectedSession === null) {
          this.$refs.errorAlertRef.displayAlert();
          return;
        }
        this.isStarted = true;
        this.$refs.successAlertRef.displayAlert();

        if (this.intervalId === null) {
          this.intervalId = setInterval(() => this.subtractTime(), 1000);
        }
      },
      stopSession(){
        this.isStarted = false;
        clearInterval(this.intervalId);
        this.intervalId = null;
      },
      subtractTime() {
        if (this.sessionTimerArray.every(val => val === 0)) {
          clearInterval(this.intervalId);
          this.intervalId = null;
          this.isStarted = false;
          this.sessionTimerArray = JSON.parse(JSON.stringify(this.sessionTimes[this.selectedSessionId].timeArray));

          return;
        }

        if (this.sessionTimerArray[3] > 0) {
          this.sessionTimerArray[3] -= 1;
        } else if (this.sessionTimerArray[2] > 0) {
          this.sessionTimerArray[3] = 9;
          this.sessionTimerArray[2] -= 1;
        } else if (this.sessionTimerArray[1] > 0) {
          this.sessionTimerArray[3] = 9;
          this.sessionTimerArray[2] = 5;
          this.sessionTimerArray[1] -= 1;
        } else if (this.sessionTimerArray[0] > 0) {
          this.sessionTimerArray[3] = 9;
          this.sessionTimerArray[2] = 5;
          this.sessionTimerArray[1] = 9;
          this.sessionTimerArray[0] -= 1;
        }
      },
      resetSession(){
        this.sessionTimerArray = JSON.parse(JSON.stringify(this.sessionTimes[this.selectedSessionId].timeArray));
      }
    }
  }
</script>