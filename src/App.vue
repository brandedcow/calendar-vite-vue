<template>
  <div class="h-screen w-screen flex flex-col">
    <Header :date="currDate" :inc="inc" :dec="dec" />
    <Calendar :dates="dates" />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import Header from "./components/Header.vue";
import Calendar from "./components/Calendar.vue";
import { getExtendedMonth, incMonth, decMonth } from "./utils/dates";

export default {
  components: {
    Header,
    Calendar,
  },
  setup() {
    const currDate = ref(new Date());
    const dates = computed(() =>
      getExtendedMonth(currDate.value).map((d) => new Date(d))
    );

    function inc() {
      currDate.value = incMonth(currDate.value);
    }

    function dec() {
      currDate.value = decMonth(currDate.value);
    }

    return { currDate, dates, inc, dec };
  },
};
</script>

<style>
</style>