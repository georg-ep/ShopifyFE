<template>
  <div
    :style="[
      styles,
      { color: activateSpinner ? 'var(--primary)' : textColor },
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
    fontSize: {
      type: String,
      default: "16px",
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
        'font-size': this.fontSize,
      };
      if (this.outline || this.activateSpinner) {
        delete styles["background"];
        styles["color"] = this.color;
        styles["box-shadow"] = `0 0 0 1px ${this.color}`;
      }
      return styles;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/button.scss";
</style>