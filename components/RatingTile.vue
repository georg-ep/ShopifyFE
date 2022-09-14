<template>
  <div @click="handleModal" class="rating-tile pointer">
    <img class="image" v-if="review.image" :src="review.image" />
    <div class="content">
      <div class="name">{{ review.name }}</div>
      <div class="rating mb-12">
        <img
          src="~/assets/icons/star.svg"
          class="star ctb"
          v-for="i in review.stars"
          :key="`s_f-star_${i}`"
        />
        <img
          src="~/assets/icons/unfilled-star.svg"
          class="star ctb"
          v-for="i in unfilledStars"
          :key="`s_u-star_${i}`"
        />
      </div>
      <div class="description mb-12">{{ review.description }}</div>
      <div class="info" v-if="review.item_type">
        Item type
        <div class="type">
          {{ review.item_type }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RatingTile",
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
  computed: {
    unfilledStars() {
      return 5 - +this.review.stars;
    },
    modal() {
      return this.$store.getters.modal;
    },
  },
  methods: {
    handleModal() {
      if (this.modal) {
        return this.$store.commit("setModal", null);
      }
      this.$store.commit("setModal", {
        type: "rating-info",
        data: this.review,
      });
    },
   },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/rating-tile";
</style>