<template>
  <div :style="styles" class="lds-roller">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  props: {
    height: {
      type: String,
      default: "80px",
    },
    width: {
      type: String,
      default: "80px",
    },
  },
  computed: {
    styles() {
      return {
        width: this.width,
        height: this.height
      };
    },
  },
};
</script>

<style lang="Scss" scoped>
@import "~/assets/scss/components/spinner.scss";
</style>