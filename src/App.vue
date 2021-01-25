<template>
  <div class="h-screen w-screen flex flex-col">
    <div>Calendar</div>
    <Calendar :today="currDate" />
  </div>
</template>

<script setup>
import Calendar from "./components/Calendar.vue";

let currDate = new Date();
</script>

<style>
</style>