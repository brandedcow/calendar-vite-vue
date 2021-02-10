export const clickOutside = {
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
}