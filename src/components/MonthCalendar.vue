<template>
  <div class="flex flex-col flex-grow bg-gray-100">
    <div class="flex">
      <div v-for="day in days" :key="day" class="w-1/7 flex justify-center">
        {{ day }}
      </div>
    </div>

    <div class="flex flex-wrap flex-grow">
      <div
        @click="onSetDate(date)"
        v-for="date in dates"
        :key="date"
        class="w-1/7 flex justify-center"
        :class="{
          today: isToday(date),
          selected: isSelected(date),
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
    onSetDate: Function,
  },
  setup(props) {
    const today = new Date();
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const isToday = (date) => isSameDay(date, today);
    const isSelected = (date) => isSameDay(date, props.currDate);
    const dates = computed(() =>
      getExtendedMonth(props.currDate).map((d) => new Date(d))
    );

    return {
      days,
      dates,
      isToday,
      isSelected,
    };
  },
};
</script>

<style scoped>
.today {
  @apply bg-gray-300;
}

.selected {
  @apply font-bold;
}
</style>