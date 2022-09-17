<template>
  <div
    :style="[
      styles,
      { color: textColor },
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
      type: String,
      default: "var(--primary)",
    },
    textColor: {
      type: String,
      default: "white",
    },
    activateSpinner: {
      type: Boolean,
      default: false,
    },
    fontSize: {
      type: String,
      default: "16px",
    },
    color: {
      type: String,
      default: "var(--primary)",
    },
    disabled: {
      type: Boolean,
      default: false,
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
    background: {
      type: String,
      default: "var(--primary)"
    },
    text: {
      type: String,
      default: "",
    },
  },
  computed: {
    styles() {
      const styles = {
        background: this.background,
        color: this.textColor,
        width: this.width,
        height: this.height,
        padding: this.padding,
        'font-size': this.fontSize,
      };

      if (this.outline || this.activateSpinner) {
        styles["color"] = this.color;
        styles["border"] = `1px solid ${this.outline}`;
      }

      if (this.disabled) {
        styles["background"] = "#c8c8c8";
        styles["color"] = "white";
        styles["border"] = "none";
      }

      return styles;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/button.scss";
</style>