<template>
<div class="relative min-h-screen overflow-hidden">
  <div class="absolute top-32 right-32">
    <SuccessAlert ref="successAlertRef"/>
  </div>
  <div class="absolute top-32 right-32">
    <ErrorAlert ref="errorAlertRef"/>
  </div>
  <div>
      <CustomSessionTimeModal ref="customSessionTimeModalRef" @addItem="appendItemToSessionTimes"/>
  </div>

  <SecondaryNavbar/>
  <div class="flex justify-center items-center">
    <div class="text-center my-10">
      <h1 class="text-4xl font-bold text-[#303030]">Session time</h1>

      <!-- DROPDOWN MENU FOR SESSION TIME-->
      <div class="relative inline-block text-left my-5">
        <div class="w-[200px]">
          <button v-if="!selectedSession" @click="toggleDropdown" type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
            Select session time
            <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/>
            </svg>
          </button>
          <button v-else @click="toggleDropdown" type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
            {{ selectedSession.humanTime }}
            <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <div v-if="isDropdownOpen" class="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-10 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <div class="py-1" role="none">
            <template v-for="sessionTime in sessionTimes">
              <a v-if="sessionTime" @click="selectTimeForSession(sessionTime)" class="text-gray-700 block px-4 py-2 text-sm hover:font-bold" role="menuitem" tabindex="-1">
                {{ sessionTime.humanTime }}
              </a>
            </template>

            <a class="text-gray-700 block px-4 py-2 text-sm hover:font-bold" role="menuitem" tabindex="-1" @click="openCustomTimeModal()">Custom</a>
          </div>
        </div>
      </div>

      <!-- TimerComponents Component -->
      <div class="flex justify-evenly items-center gap-10 my-5 z-5">
        <Timer :sessionTimer="sessionTimer" ref="timerRef" @session-ended="handleSessionEnd()"/>
      </div>

      <!--  CLOCK BUTTONS    -->
      <div class="flex justify-evenly items-center gap-20 my-10">
        <button v-if="!isStarted" @click="startSession()" class="w-full text-white bg-[#505050] hover:bg-[#505050] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Start session</button>
        <button v-else @click="stopSession()" class="w-full text-white bg-[#505050] hover:bg-[#505050] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Stop session</button>
        <button @click="resetSession()" class="w-full text-white bg-[#303030] hover:bg-[#505050] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Reset session</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import SecondaryNavbar from "@/components/Navbar/SecondaryNavbar.vue";
  import SuccessAlert from "@/components/Toasts/SuccessAlert.vue";
  import ErrorAlert from "@/components/Toasts/ErrorAlert.vue";
  import CustomSessionTimeModal from "@/components/Modals/CustomSessionTimeModal.vue";
  import Timer from "@/components/TimerComponents/Timer.vue";


  export default {
    name: 'Session',
    components: {Timer, ErrorAlert, SuccessAlert, SecondaryNavbar, CustomSessionTimeModal},
    data() {
      return {
        selectedSession: null,
        sessionTimes: [
          {humanTime: "5s", time: 5},
          {humanTime: "5m", time: 5 * 60},
          {humanTime: "15m", time: 15 * 60},
          {humanTime: "30m", time: 30 * 60},
          {humanTime: "45m", time: 45 * 60},
          {humanTime: "60m", time: 60 * 60},
          {humanTime: "1h30m", time: 90 * 60},
        ],
        sessionTimer: 0,
        isStarted: false,
        isDropdownOpen: false,
        successMessage: "",
        errorMessage: "",
      };
    },
    methods: {
      openCustomTimeModal() {
        this.$refs.customSessionTimeModalRef.openModal();
      },
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },
      selectTimeForSession(selectedSession) {
        this.selectedSession = selectedSession;
        this.sessionTimer = selectedSession.time;
        this.displayAlert("success", `Session time set to ${selectedSession.humanTime}`);
        this.toggleDropdown();
      },
      appendItemToSessionTimes(customTime) {
        let humanTime = `${customTime.hours}h ${customTime.minutes}m ${customTime.seconds}s`;
        let timeInSeconds = (customTime.hours * 60 * 60) + (customTime.minutes * 60) + customTime.seconds;
        this.displayAlert("success", `Added custom session: ${humanTime}`)
        this.sessionTimes.push({humanTime: humanTime, time: timeInSeconds});
      },
      startSession(){
        if(this.isStarted === false){
          this.isStarted = true;
          this.displayAlert("success", "Session started")
          this.$refs.timerRef.startTimer();
        }else{
          this.$refs.errorAlertRef.displayAlert();
        }
      },
      stopSession(){
        if(this.isStarted === true){
          this.isStarted = false;
          this.displayAlert("success", "Session stopped")
          this.$refs.timerRef.stopTimer();
        }else{
          this.$refs.errorAlertRef.displayAlert();
        }
      },
      displayAlert(type, message) {
        if (type === "success") {
          this.$refs.successAlertRef.setMessage(message);
          this.$refs.successAlertRef.displayAlert();
        } else if (type === "error") {
          this.$refs.errorAlertRef.setMessage(message);
          this.$refs.errorAlertRef.displayAlert();
        }
      },
      resetSession(){
        this.$refs.timerRef.resetSession();
        this.displayAlert("success", "Session reset");
      },
      handleSessionEnd(){
        this.isStarted = false;
        this.displayAlert("success", "Your session has ended");
      }
    }
  }
</script>