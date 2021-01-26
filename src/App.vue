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
    <Calendar :dates="dates" :currDate="currDate" />
  </div>
</template>

<script>
import { computed } from "vue";
import Header from "./components/Header.vue";
import Calendar from "./components/Calendar.vue";
import { getExtendedMonth } from "./utils/dates";
import store from "./store";

export default {
  components: {
    Header,
    Calendar,
  },
  setup() {
    const calendarViewOptions = ["Day", "Week", "Month", "Year"];
    const currDate = computed(() => store.state.currDate);
    const view = computed(() => store.state.calendarView);
    const dates = computed(() =>
      getExtendedMonth(store.state.currDate).map((d) => new Date(d))
    );

    function inc() {
      store.dispatch("incrementMonth");
    }
    function dec() {
      store.dispatch("decrementMonth");
    }

    function handleViewSelection(selection) {
      store.dispatch("setCalendarView", selection);
    }

    return {
      currDate,
      view,
      dates,
      inc,
      dec,
      calendarViewOptions,
      handleViewSelection,
    };
  },
};
</script>

<style>
</style>