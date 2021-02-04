<template>
  <div class="flex h-16 items-center justify-around">
    <!-- <div>Planner</div> -->
    <button
      class="h-10 w-20 flex justify-center items-center border-gray-700 rounded border hover:bg-gray-200"
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
      class="hover:bg-gray-300"
      :options="calendarViewOptions"
      :onClick="onViewSelection"
      :selected="calendarView"
    />

    <button
      class="h-10 w-20 rounded bg-purple-400 hover:bg-purple-300"
      @click="onLoginClick"
      v-if="isLoggedIn"
    >
      Sign In
    </button>
    <button
      class="h-10 w-20 rounded bg-gray-400 hover:bg-gray-300"
      @click="onLogoutClick"
      v-else
    >
      Log Out
    </button>
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
    onLoginClick: Function,
    isLoggedIn: Boolean,
    onLogoutClick: Function,
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