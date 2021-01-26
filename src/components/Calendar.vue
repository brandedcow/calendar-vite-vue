<template>
  <div class="flex flex-col flex-grow">
    <div class="flex">
      <div v-for="day in days" :key="day" class="w-1/7 flex justify-center">
        {{ day }}
      </div>
    </div>

    <div class="flex flex-wrap flex-grow">
      <div v-for="date in dates" :key="date" class="w-1/7 flex justify-center">
        {{ date.getDate() }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dates: Array,
  },
  setup() {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return {
      days,
    };
  },
};
</script>

<style>
</style>