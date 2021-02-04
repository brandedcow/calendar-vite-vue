<template>
  <div
    id="modal"
    class="w-screen h-screen bg-blue-300 opacity-40 top-0 left-0 flex justify-center items-center"
    v-show="isModalOpen"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style scoped>
#modal {
  position: absolute;
  z-index: 5;
}
</style>