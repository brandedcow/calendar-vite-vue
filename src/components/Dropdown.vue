<template>
  <div
    class="h-10 w-20 flex justify-center items-center border-gray-700 border rounded relative"
  >
    <button class="h-full w-full" @click="isOpen = !isOpen">
      {{ options[selected] }}
    </button>
    <div
      class="absolute right-0 top-10 z-5 bg-white shadow flex flex-col p-3 items-start"
      v-show="isOpen"
    >
      <button
        v-for="(option, idx) in options"
        :key="option"
        @click="handleClick(idx)"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    onClick: Function,
    selected: Number,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleClick(option) {
      this.onClick(option);
      this.isOpen = false;
    },
  },
};
</script>

<style>
</style>