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
    <div class="error" :class="hasError ? 'error_show' : 'error_hide'">
      <div v-for="(rule, index) in rules" :key="`rule_${index}`">
        <div v-if="!error[rule.name] || !model">
          {{ rule.text }}
        </div>
      </div>
      <div
        v-for="(error, index) in customErrors"
        :key="`custom-error_${index}`"
      >
        {{ error.text }}
      </div>
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
    customErrors: {
      type: Array,
      default: () => [],
    },
    headingColor: {
      type: String,
      default: "white",
    },
    error: {
      type: [String, Boolean, Object],
      default: false,
    },
    rules: {
      type: Array,
      default: () => [],
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
      default: "1px solid var(--primary)",
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
    hasError() {
      return (this.rules && this.error.$error) || this.customErrors.length;
    },
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
        border: this.outline,
        width: this.width,
        "input::placeholder": this.color,
      };
      if (this.hasError) {
        styles.border = "1px solid red";
      }
      return styles;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/textfield";
</style>