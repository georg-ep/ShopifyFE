<template>
  <div v-if="images" class="image-catalog">
    <img v-if="selected" class="featured" :src="loadImage(selected)" alt="" />
    <div class="items">
      <img
        v-for="(image, index) in images"
        :key="`image_${index}`"
        :class="{ 'option_selected': sIndex === index }"
        class="option"
        :src="loadImage(image)"
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
    dirName: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      images: [],
      selected: null,
      sIndex: 0,
    };
  },
  mounted() {
    // TODO implement prop as part of the path
    require
      .context(`~/assets/images/pens/`, false, /\.png$/)
      .keys()
      .forEach((key) => {
        this.images.push(key.split("/")[1]);
      });
    this.selected = this.images[0];
    this.sIndex = 0;
  },
  computed: {
    loadImage() {
      return (image) => require(`~/assets/images/pens/${image}`);
    },
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