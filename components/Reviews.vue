<template>
  <div>
    <div class="breakline" />
    <div class="header header_ta-l mb-24">Here's what our customers think</div>
    <masonry
      :cols="{ default: 4, 1170: 3, 700: 2, 400: 1 }"
      :gutter="12"
      id="ratings"
      class="ratings mb-24"
    >
      <RatingTile
        class="tile mb-12"
        v-for="review in reviews"
        :key="`review_${review}`"
        :review="review"
      />
    </masonry>
  </div>
</template>

<script>
export default {
  name: "Reviews",
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/reviews";
</style>