<template>
  <div
    class="image-catalog"
    :class="{ 'image-catalog_align-spinner': !loaded }"
  >
    <img
      id="featured"
      class="featured"
      :class="{ featured_loaded: imageLoaded }"
      :src="selected ? selected.image : null"
      alt=""
      @load="updateLoaded()"
    />
    <div class="items">
      <img
        v-for="(image, index) in images"
        :key="`image_${index}`"
        :class="{
          option_selected: sIndex === index,
          option_loaded: imageLoaded,
        }"
        class="option"
        :src="image.image"
        @load="updateLoaded()"
        alt=""
        @click="updateSelected(index, image)"
      />
    </div>
    <div class="spinner-wrapper" v-if="!loaded">
      <div class="loading-text mb-12">Loading Images...</div>
      <Spinner />
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
      imageLoaded: false,
      imagesLoaded: 0,
    };
  },
  computed: {
    loaded() {
      return this.imageLoaded && this.selected;
    },
  },
  methods: {
    updateLoaded() {
      this.imagesLoaded++;
      if (this.imagesLoaded === this.images.length + 1) {
        this.imageLoaded = true;
      }
    },
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