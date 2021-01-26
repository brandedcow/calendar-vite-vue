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
import { ref, computed, watch } from "vue";
import Header from "./components/Header.vue";
import Calendar from "./components/Calendar.vue";
import { getExtendedMonth, incMonth, decMonth } from "./utils/dates";

export default {
  components: {
    Header,
    Calendar,
  },
  setup() {
    const calendarViewOptions = ["Day", "Week", "Month", "Year"];
    const currDate = ref(new Date());
    const view = ref(2);
    const dates = computed(() =>
      getExtendedMonth(currDate.value).map((d) => new Date(d))
    );

    function inc() {
      currDate.value = incMonth(currDate.value);
    }

    function dec() {
      currDate.value = decMonth(currDate.value);
    }

    function handleViewSelection(selection) {
      view.value = selection;
    }

    watch(view, () => {
      console.log("changed to ", view.value);
    });

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