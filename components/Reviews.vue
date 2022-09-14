<template>
  <div>
    <div class="breakline" />
    <div class="flex-row flex-row_space">
      <div class="header header_ta-l mb-24">
        Here's what our customers think
      </div>
      <Button
        :background="'white'"
        :text-color="'black'"
        :text="'Write a review'"
        :outline="'#ECE6E6'"
        :padding="'0 20px'"
        :height="'40px'"
      />
    </div>
    <masonry
      :cols="{ default: 4, 1170: 3, 700: 2, 400: 1 }"
      :gutter="12"
      id="ratings"
      class="ratings mb-24"
    >
      <RatingTile
        class="tile mb-12"
        v-for="(review, index) in reviews"
        :key="`review_${index}`"
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