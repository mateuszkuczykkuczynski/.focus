<template>
<div class="border-2 border-[#303030] rounded-xl px-10">
  <div class="flex flex-col items-center p-4">
    <div class="flex justify-between w-full mb-4">
        <button @click="goToPreviousMonth" class="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
        </button>
        <h2 class="text-xl font-semibold">{{ selectedMonth.name }} {{ currentDate.getFullYear() }}</h2>
        <button @click="goToNextMonth" class="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </button>
    </div>
    <div class="grid grid-cols-7 gap-4 w-full">
      <div v-for="day in dayNames" :key="day" class="py-2 text-center font-semibold text-sm">
        {{ day }}
      </div>

      <!-- Empty cells if the month doesn't start on Monday -->
      <div v-for="n in firstDayOfMonthIndex" :key="`empty-${n}`" class="py-2 text-center"></div>

      <!-- Days of the month -->
      <button
        v-for="day in selectedMonth.monthDaysCount"
        :key="day"
        class="p-2 text-center border rounded-3xl"
        :class="{ 'bg-[#303030] text-white': isSelectedDate(day)}"
        @click="selectDate(day)">
        {{ day }}
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ReportCalendar',
  data() {
    const currentDate = new Date();
    return {
      currentDate: currentDate,
      selectedDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()), // Initialize selectedDate to today
      dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    };
  },
  computed: {
    selectedMonth() {
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const monthNumber = this.currentDate.getMonth();
      const monthName = monthNames[monthNumber];
      const monthDaysCount = new Date(this.currentDate.getFullYear(), monthNumber + 1, 0).getDate();

      return {
        number: monthNumber + 1, // 1-12
        name: monthName,
        monthDaysCount: monthDaysCount
      };
    },
    firstDayOfMonthIndex() {
      const firstDayDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
      return (firstDayDate.getDay() + 6) % 7; // Adjust for European week starting on Monday
    }
  },
  methods: {
    selectDate(day) {
      this.selectedDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);
    },
    isSelectedDate(day) {
      return this.selectedDate.getDate() === day &&
             this.selectedDate.getMonth() === this.currentDate.getMonth() &&
             this.selectedDate.getFullYear() === this.currentDate.getFullYear();
    },
    goToPreviousMonth() {
      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth();
      this.currentDate = new Date(year, month - 1, 1);
    },
    goToNextMonth() {
      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth();
      this.currentDate = new Date(year, month + 1, 1);
    },
  }
}
</script>
