<template>
  <div class="selector">
    <div>
      Colour: <span class="featured-colour">{{ data[selected].name }}</span>
    </div>
    <div class="colours">
      <div
        :style="{ background: colour.colour }"
        class="option"
        v-for="(colour, index) in data"
        :key="`color_${index}`"
        @click="updateColour(index)"
        :class="{ selected: index === selected }"
      >
        <div class="label">{{ colour.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColourSelector",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    updateColour(index) {
      this.selected = index;
      this.$emit("update-colour", this.data[index]);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/colour-selector";
</style>