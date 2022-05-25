<template>
  <div v-if="type !== 'textarea'" :style="{ flex }" class="textfield">
    <input
      :style="styles"
      :class="{ 'textfield_with-icon': search }"
      :type="type"
      class="textfield"
      :placeholder="placeholder"
    />
    <div v-if="search" class="trailing-icon">
      <img class="ctw icon" src="~/assets/icons/search.svg" alt="search" />
    </div>
  </div>
  <div :style="{ flex }" class="textfield" v-else>
    <textarea :placeholder="placeholder" class="textfield" :style="styles" />
  </div>
</template>

<script>
export default {
  name: "Textfield",
  props: {
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
      default: "none",
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
    width: {
      type: String,
      default: "auto",
    },
  },
  computed: {
    styles() {
      return {
        flex: this.flex,
        height: this.height,
        outline: this.outline,
        width: this.width,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/textfield";
</style>