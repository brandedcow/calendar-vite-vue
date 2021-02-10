<template>
  <div
    class="h-auto mb-4 w-full p-3 border-gray-700 border rounded inline-block"
  >
    <div>{{ title }}</div>
    <div>
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
  },
};
</script>

<style>
</style>