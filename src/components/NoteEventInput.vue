<template>
  <div v-click-outside="handleShrinkInput">
    <div
      tabindex="1"
      v-if="!isExpanded"
      ref="noteEventInput"
      class="border border-gray-700 rounded py-2 px-4 text-gray-400"
      @click="handleExpandInput"
      @keydown.enter="handleExpandInput"
    >
      Add a note or event
    </div>
    <div v-else class="border border-gray-700 rounded py-2 px-4 flex flex-col">
      <input
        ref="titleInput"
        class="p-2 w-full"
        type="text"
        placeholder="Title"
      />
      <textarea
        ref="contentInput"
        cols="30"
        placeholder="Add a note or event"
        class="p-2 w-full"
        :style="{ resize: 'none', maxHeight: '50vh' }"
        @input="autoExpand"
      ></textarea>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const titleInput = ref(null);
    const contentInput = ref(null);
    const noteEventInput = ref(null);
    const isExpanded = ref(false);

    function handleExpandInput() {
      isExpanded.value = true;
    }

    function handleShrinkInput() {
      isExpanded.value = false;
    }

    watch(
      isExpanded,
      () => {
        if (contentInput.value) {
          contentInput.value.focus();
        }
      },
      {
        flush: "post",
      }
    );

    return {
      titleInput,
      contentInput,
      noteEventInput,
      isExpanded,
      handleExpandInput,
      handleShrinkInput,
    };
  },
  methods: {
    autoExpand(event) {
      const ele = event.target;

      ele.style.height = "inherit";

      var computed = window.getComputedStyle(ele);
      var height =
        parseInt(computed.getPropertyValue("border-top-width"), 10) +
        parseInt(computed.getPropertyValue("padding-top"), 10) +
        ele.scrollHeight +
        parseInt(computed.getPropertyValue("padding-bottom", 10)) +
        parseInt(computed.getPropertyValue("border-bottom-width", 10));

      ele.style.height = height + "px";
    },
  },
  directives: {
    "click-outside": {
      mounted(el, binding) {
        el.clickOutsideEvent = function (event) {
          if (!el.contains(event.target)) {
            binding.value();
          }
        };
        document.body.addEventListener("mousedown", el.clickOutsideEvent);
      },
      unmounted(el) {
        document.body.removeEventListener("mousedown", el.clickOutsideEvent);
      },
    },
  },
};
</script>

<style scoped>
</style>