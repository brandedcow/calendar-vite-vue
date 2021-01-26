<template>
  <div class="flex justify-start h-16 items-center">
    <div>Calendar</div>
    <div>
      <button class="h-10 w-10" @click="dec">&#10094;</button>
      <button class="h-10 w-10" @click="inc">&#10095;</button>
    </div>
    <div>{{ monthYear }}</div>
  </div>
</template>

<script>
import { format } from "date-fns";

export default {
  props: {
    date: Date,
    inc: Function,
    dec: Function,
  },
  computed: {
    monthYear() {
      return format(this.date, "MMMM y");
    },
  },
};
</script>

<style>
</style>