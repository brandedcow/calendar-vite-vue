<template>
  <div>
    <div>
      {{ dayOfWeek }}
      {{ date }}
    </div>
    <input
      type="text"
      class="border-gray-700 border rounded"
      placeholder="Add note or event"
    />
  </div>
</template>

<script>
import { computed } from "vue";
import { format } from "date-fns";

export default {
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