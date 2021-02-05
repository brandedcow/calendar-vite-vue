<template>
  <div class="flex-grow flex flex-col">
    <div>
      {{ dayOfWeek }}
      {{ date }}
    </div>
    <NoteEventInput class="self-center" :onBlur="handleBlurInput" />
    <div class="flex-grow">Notes & Events</div>
  </div>
</template>

<script>
import { computed } from "vue";
import { format } from "date-fns";

import store from "../store";
import NoteEventInput from "./NoteEventInput.vue";

export default {
  components: {
    NoteEventInput,
  },
  props: {
    currDate: Date,
  },
  methods: {
    handleBlurInput(payload) {
      console.log("blur", payload);
      store.dispatch("tasks/addItem", payload);
    },
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