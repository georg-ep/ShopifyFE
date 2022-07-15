<template>
  <div v-if="images && selected" class="image-catalog">
    <img class="featured" :src="selected.image" alt="" />
    <div class="items">
      <img
        v-for="(image, index) in images"
        :key="`image_${index}`"
        :class="{ 'option_selected': sIndex === index }"
        class="option"
        :src="image.image"
        alt=""
        @click="updateSelected(index, image)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageCatalog",
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.selected = this.images[0];
  },
  data() {
    return {
      selected: null,
      sIndex: 0,
    };
  },
  methods: {
    updateSelected(index, image) {
      this.sIndex = index;
      this.selected = image;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/image-catalog";
</style>