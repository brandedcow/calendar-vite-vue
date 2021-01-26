<template>
  <div class="flex flex-col flex-grow bg-gray-100">
    <div class="flex">
      <div v-for="day in days" :key="day" class="w-1/7 flex justify-center">
        {{ day }}
      </div>
    </div>

    <div class="flex flex-wrap flex-grow">
      <div
        v-for="date in dates"
        :key="date"
        class="w-1/7 flex justify-center"
        :class="{
          today: isToday(date),
        }"
      >
        {{ date.getDate() }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { isSameDay } from "date-fns";
import { getExtendedMonth } from "../utils/dates";

export default {
  props: {
    currDate: Date,
  },
  setup(props) {
    const today = new Date();
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const isToday = (date) => isSameDay(date, today);
    const dates = computed(() =>
      getExtendedMonth(props.currDate).map((d) => new Date(d))
    );

    return {
      days,
      dates,
      isToday,
    };
  },
};
</script>

<style scoped>
.today {
  @apply font-bold;
}
</style>