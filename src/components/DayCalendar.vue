<template>
  <div class="flex-grow flex flex-col">
    <div>
      {{ dayOfWeek }}
      {{ date }}
    </div>
    <NoteEventInput class="self-center" :onBlur="handleBlurInput" />
    <div class="flex-grow noteContainer p-3">
      <Note
        v-for="task in tasks"
        :key="task.id"
        :id="task.id"
        :title="task.title"
        :content="task.content"
      />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { format } from "date-fns";

import store from "../store";
import NoteEventInput from "./NoteEventInput.vue";
import Note from "./Note.vue";

export default {
  components: {
    NoteEventInput,
    Note,
  },
  props: {
    currDate: Date,
  },
  methods: {
    handleBlurInput(payload) {
      console.log("user", store.state.user.user);
      store.dispatch("tasks/addItem", {
        user: store.state.user.user.uid,
        ...payload,
      });
    },
  },
  setup(props) {
    const dayOfWeek = computed(() => format(props.currDate, "EEE"));
    const date = computed(() => props.currDate.getDate());
    const tasks = computed(() => store.state.tasks.tasks);

    return {
      date,
      dayOfWeek,
      tasks,
    };
  },
};
</script>

<style>
.noteContainer {
  column-count: 5;
  column-fill: balance;
}
@media (max-width: 1600px) {
  .noteContainer {
    column-count: 4;
  }
}
@media (max-width: 1200px) {
  .noteContainer {
    column-count: 3;
  }
}
@media (max-width: 800px) {
  .noteContainer {
    column-count: 2;
  }
}
@media (max-width: 400px) {
  .noteContainer {
    column-count: 1;
  }
}
</style>