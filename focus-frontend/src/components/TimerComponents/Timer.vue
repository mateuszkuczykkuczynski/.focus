<template>
  <div class="flex flex-wrap justify-between gap-5 md:gap-20">
    <div v-if="hours !== '00'" class="flex justify-between gap-5">
      <!-- Divs for Hours -->
      <div class="timer-card">
        {{ hours[0] }}
      </div>
      <div class="timer-card">
        {{ hours[1] }}
      </div>
    </div>
    <div class="flex justify-between gap-5">
      <!-- Divs for Minutes -->
      <div class="timer-card">
        {{ minutes[0] }}
      </div>
      <div class="timer-card">
        {{ minutes[1] }}
      </div>
    </div>
    <div class="flex justify-between gap-5">
      <!-- Divs for Seconds -->
      <div class="timer-card">
        {{ seconds[0] }}
      </div>
      <div class="timer-card">
        {{ seconds[1] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  props: {
    sessionTimer: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      currentTime: this.sessionTimer,
      intervalId: null,
    }
  },
  watch: {
    sessionTimer(newVal) {
      this.currentTime = newVal;
    }
  },
  computed: {
    hours() {
      const totalHours = Math.floor(this.currentTime / 3600);
      return String(totalHours).padStart(2, '0');
    },
    minutes() {
      const totalMinutes = Math.floor((this.currentTime % 3600) / 60);
      return String(totalMinutes).padStart(2, '0');
    },
    seconds() {
      const totalSeconds = this.currentTime % 60;
      return String(totalSeconds).padStart(2, '0');
    }
  },
  methods: {
    startTimer() {
      this.intervalId = setInterval(() => {
        if (this.currentTime > 0) {
          this.currentTime--;
        } else {
          clearInterval(this.intervalId);
          this.intervalId = null;
          this.playEndSessionSound();
          this.resetSession();
          this.$emit('session-ended');
        }
      }, 1000);

    },
    stopTimer() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    },
    resetSession(){
      this.currentTime = this.sessionTimer;
    },
    playEndSessionSound(){
      const audio = new Audio('/sounds/session-end.mp3');
      audio.play().catch(e=>console.error('Error playing sound: ', e));
    }
  },
}
</script>
<style>
.timer-card {
  background-color: #303030;
  color: white;
  border-radius: 1rem;
  padding: 1rem 2rem;
  min-width: 15vw; /* Adjust this value as needed */
  font-size: 20vw; /* Adjust this value for font scaling */
  text-align: center;
}
@media (min-width: 768px) {
  .timer-card {
    min-width: 15rem; /* Adjust for larger screens */
    font-size: 15rem; /* Adjust font size for larger screens */
  }
}
</style>
