<template>
  <div
    class="h-auto mb-4 w-full p-3 border-gray-700 border rounded inline-block"
    @click="openModal"
    v-clickOutside="handleShrinkNote"
    :class="{
      expanded: isExpanded,
    }"
  >
    <div v-if="!isExpanded">
      <div>{{ title }}</div>
      <div>
        {{ content }}
      </div>
    </div>
    <div v-else class="flex flex-col">
      <input type="text" v-model="title" />
      <input type="text" v-model="content" />
    </div>
  </div>
</template>

<script>
import store from "../store";
import { clickOutside } from "../utils/directives/clickOutside";

export default {
  props: {
    id: Number,
    title: String,
    content: String,
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    handleShrinkNote() {
      const { id, title, content } = this;
      if (this.isExpanded) {
        store.dispatch("tasks/editItem", {
          id,
          title,
          content,
        });
      }

      this.isExpanded = false;
    },
    openModal() {
      this.isExpanded = true;
    },
  },
  directives: {
    clickOutside,
  },
};
</script>

<style scoped>
.expanded {
  position: absolute;
  margin: auto;
  width: 35%;
  left: 33%;
}
</style>