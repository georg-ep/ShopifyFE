<template>
  <div
    :style="[
      styles,
      { padding: activateSpinner ? '11px 0' : padding },
      { width: activateSpinner ? '100%' : width },
      { color: activateSpinner ? 'var(--primary)' : textColor }
    ]"
    @click="$emit('click')"
    class="button"
  >
    <div>{{ text }}</div>
    <ButtonSpinner class="ml-24" v-if="activateSpinner" />
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    outline: {
      type: Boolean,
      default: false,
    },
    textColor: {
      type: String,
      default: "white",
    },
    activateSpinner: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "var(--primary)",
    },
    padding: {
      type: String,
      default: "auto",
    },
    width: {
      type: String,
      default: "auto",
    },
    height: {
      type: String,
      default: "auto",
    },
    text: {
      type: String,
      default: "",
    },
  },
  computed: {
    styles() {
      const styles = {
        background: this.color,
        color: this.textColor,
        width: this.width,
        height: this.height,
        padding: this.padding,
      };
      if (this.outline || this.activateSpinner) {
        delete styles["background"];
        styles["color"] = this.color;
        styles["border"] = `1px solid ${this.color}`;
      }
      return styles;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/button.scss";
</style>