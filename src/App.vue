<template>
  <div class="h-screen w-screen flex flex-col">
    <Header
      :date="currDate"
      :inc="inc"
      :dec="dec"
      :calendarViewOptions="calendarViewOptions"
      :onViewSelection="handleViewSelection"
      :calendarView="view"
    />
    <router-view :currDate="currDate" :onSetDate="handleSetDate"></router-view>
  </div>
</template>

<script>
import { computed } from "vue";
import Header from "./components/Header.vue";
import MonthCalendar from "./components/MonthCalendar.vue";
import store from "./store";
import router from "./router";

export default {
  components: {
    Header,
    MonthCalendar,
  },
  setup() {
    const calendarViewOptions = ["Day", "Week", "Month", "Year"];
    const currDate = computed(() => store.state.calendar.currDate);
    const view = computed(() => store.state.calendar.calendarView);

    function inc() {
      store.dispatch("calendar/incrementMonth");
    }
    function dec() {
      store.dispatch("calendar/decrementMonth");
    }

    function handleViewSelection(selection) {
      store.dispatch("calendar/setCalendarView", selection);
      router.push(`/${calendarViewOptions[selection].toLowerCase()}`);
    }

    function handleSetDate(date) {
      store.dispatch("calendar/setDate", date);
    }

    return {
      currDate,
      view,
      inc,
      dec,
      calendarViewOptions,
      handleViewSelection,
      handleSetDate,
    };
  },
};
</script>

<style>
</style>