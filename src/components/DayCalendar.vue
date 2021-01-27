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
import { format } from "date-fns";

export default {
  props: {
    currDate: Date,
  },
  setup(props) {
    const dayOfWeek = format(props.currDate, "EEE");
    const date = props.currDate.getDate();

    return {
      date,
      dayOfWeek,
    };
  },
};
</script>

<style>
</style>