<template>
  <div class="flex-grow flex flex-col">
    <div>
      {{ dayOfWeek }}
      {{ date }}
    </div>
    <NoteEventInput class="self-center" />
    <div class="flex-grow">Notes & Events</div>
  </div>
</template>

<script>
import { computed } from "vue";
import { format } from "date-fns";

import NoteEventInput from "./NoteEventInput.vue";

export default {
  components: {
    NoteEventInput,
  },
  props: {
    currDate: Date,
  },
  setup(props) {
    const dayOfWeek = computed(() => format(props.currDate, "EEE"));
    const date = computed(() => props.currDate.getDate());

    return {
      date,
      dayOfWeek,
    };
  },
};
</script>

<style>
</style>