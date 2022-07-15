<template>
  <div class="info-container">
    <div class="header">{{ section.title }}</div>
    <div class="description" v-html="section.content" />
    <img class="gif" :src="section.file" />
  </div>
</template>

<script>
export default {
  name: "ProductSection",
  props: {
    section: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/product-detail";
</style>