<template>
  <div class="flex justify-between gap-20">
    <div v-if="hours !== '00'" class="flex justify-between gap-5">
      <!-- Divs for Minutes -->
      <div class="bg-[#303030] text-[250px] rounded-xl text-white py-5 px-10">
        {{ hours[0] }}
      </div>
      <div class="bg-[#303030] text-[250px] rounded-xl text-white py-5 px-10">
        {{ hours[1] }}
      </div>
    </div>
    <div class="flex justify-between gap-5">
      <!-- Divs for Minutes -->
      <div class="bg-[#303030] text-[250px] rounded-xl text-white py-5 px-10">
        {{ minutes[0] }}
      </div>
      <div class="bg-[#303030] text-[250px] rounded-xl text-white py-5 px-10">
        {{ minutes[1] }}
      </div>
    </div>
    <div class="flex justify-between gap-5">
      <!-- Divs for Seconds -->
      <div class="bg-[#303030] text-[250px] rounded-xl text-white py-5 px-10">
        {{ seconds[0] }}
      </div>
      <div class="bg-[#303030] text-[250px] rounded-xl text-white py-5 px-10">
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