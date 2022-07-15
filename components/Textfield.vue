<template>
  <div class="textfield-wrapper">
    <div :style="{ color: headingColor }" v-if="label" class="label">
      {{ label }}
    </div>
    <div
      v-if="type !== 'textarea'"
      :style="{ flex, background, padding: 0 }"
      class="textfield"
    >
      <input
        :style="styles"
        :class="{ 'textfield_with-icon': search }"
        :type="type"
        class="textfield"
        v-model="input"
        :placeholder="placeholder"
      />
      <div v-if="search" class="trailing-icon">
        <img class="ctw icon" src="~/assets/icons/search.svg" alt="search" />
      </div>
    </div>
    <div :style="{ flex, padding: 0 }" class="textfield" v-else>
      <textarea
        :placeholder="placeholder"
        v-model="input"
        class="textfield"
        :style="styles"
      />
    </div>
    <div class="error" :class="error ? 'error_show' : 'error_hide'">
      {{ errorText }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Textfield",
  props: {
    model: {
      type: [String, Number],
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    headingColor: {
      type: String,
      default: "white",
    },
    error: {
      type: [String, Boolean],
      default: false,
    },
    background: {
      type: String,
      default: "white",
    },
    search: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
    outline: {
      type: String,
      default: "0 0 0 1px var(--primary)",
    },
    flex: {
      type: Number,
      default: 1,
    },
    height: {
      type: String,
      default: "auto",
    },
    placeholder: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "auto",
    },
    width: {
      type: String,
      default: "auto",
    },
  },
  computed: {
    errorText() {
      return typeof this.error === "boolean" ? "" : this.error;
    },
    input: {
      get() {
        return this.model;
      },
      set(value) {
        this.$emit("update:model", value);
      },
    },
    styles() {
      const styles = {
        color: this.color,
        background: this.background,
        flex: this.flex,
        height: this.height,
        "box-shadow": this.outline,
        width: this.width,
        "input::placeholder": this.color,
      };
      if (this.error) {
        styles["box-shadow"] = "0 0 0 1px red";
      }
      return styles;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/textfield";
</style>