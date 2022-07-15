<template>
  <ScaffoldModal class="content">
    <div :class="{ content_flex: data.image }">
      <img v-if="data.image" class="media-content" :src="data.image" alt="thumbnail" />
      <div class="right-content">
        <div class="row-wrapper">
          <div class="name">
            {{ data.name }}
          </div>
          <img src="~/assets/icons/info.svg" class="info pointer" />
        </div>
        <div class="star-wrapper mb-24">
          <img
            src="~/assets/icons/star.svg"
            class="star ctb"
            v-for="i in data.stars"
            :key="`star_${i}`"
          />
        </div>
        <div class="description">
          {{ data.description }}
        </div>
      </div>
    </div>
  </ScaffoldModal>
</template>

<script>
import ScaffoldModal from "~/components/modals/ScaffoldModal.vue";
export default {
  name: "RatingInfo",
  components: {
    ScaffoldModal,
  },
  computed: {
    data() {
      return this.$store.getters.modal.data;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/modals/rating-info";
</style>