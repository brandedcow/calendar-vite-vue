<template>
  <div class="flex h-16 items-center justify-around">
    <div>Planner</div>
    <button
      class="h-10 w-20 flex justify-center items-center border-gray-700 rounded border"
      @click="handleTodayClick"
    >
      Today
    </button>
    <div>
      <button class="h-10 w-10" @click="dec">&#10094;</button>
      <button class="h-10 w-10" @click="inc">&#10095;</button>
    </div>
    <div>{{ monthYear }}</div>
    <Dropdown
      :options="calendarViewOptions"
      :onClick="onViewSelection"
      :selected="calendarView"
    />
  </div>
</template>

<script>
import store from "../store";
import { format } from "date-fns";
import Dropdown from "./Dropdown.vue";

export default {
  props: {
    date: Date,
    inc: Function,
    dec: Function,
    calendarViewOptions: Array,
    onViewSelection: Function,
    calendarView: Number,
  },
  components: {
    Dropdown,
  },
  computed: {
    monthYear() {
      return format(this.date, "MMMM y");
    },
  },
  methods: {
    handleTodayClick() {
      store.dispatch("calendar/setToday");
    },
  },
};
</script>

<style>
</style>