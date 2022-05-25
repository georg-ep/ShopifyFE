<template>
  <div class="field-wrapper">
    <div class="field" @click="toggleDropdown">
      <div>
        <div class="label">{{ label }}</div>
        <div class="selected">{{ value }}</div>
      </div>
      <img
        class="chevron"
        :class="{ chevron_rotate: show }"
        src="~/assets/icons/chevron-down.svg"
        alt="chevron-down"
      />
    </div>
    <div class="dropdown-wrapper">
      <div class="dropdown" :id="_uid">
        <div
          @click="selectItem(index)"
          v-for="(item, index) in items"
          :key="`item_${index}`"
          class="item"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {  
      type: [Number, String],
      default: "",
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    selectItem(idx) {
      this.toggleDropdown();
      this.$emit("update", this.items[idx]);
    },
    toggleDropdown() {
      this.show = !this.show;
      const dropdown = document.getElementById(this._uid);
      dropdown.classList.toggle("active");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/dropdown";
</style>