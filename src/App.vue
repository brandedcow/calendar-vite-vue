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
    <Calendar :dates="dates" />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import Header from "./components/Header.vue";
import Calendar from "./components/Calendar.vue";
import { getExtendedMonth, incMonth, decMonth } from "./utils/dates";
import store from "./store";

export default {
  components: {
    Header,
    Calendar,
  },
  setup() {
    const calendarViewOptions = ["Day", "Week", "Month", "Year"];
    const currDate = computed(() => store.state.currDate);
    const view = ref(2);
    const dates = computed(() =>
      getExtendedMonth(currDate.value).map((d) => new Date(d))
    );

    function inc() {
      store.dispatch("incrementMonth");
    }
    function dec() {
      store.dispatch("decrementMonth");
    }

    function handleViewSelection(selection) {
      view.value = selection;
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