<template>
  <div>
    <RatingInfo
      v-if="modal && modal.type === 'rating-info'"
      :data="modal.data"
    />
  </div>
</template>

<script>
import RatingInfo from "~/components/modals/RatingInfo.vue";
export default {
  name: "Modals",
  components: {
    RatingInfo,
  },
  watch: {
    modal(data) {
      // const body = document.getElementsByTagName("body")[0];
      const body = document.getElementById("body");
      if (data) {
        body.style.overflowY = "hidden";
      } else {
        body.style.overflowY = "scroll";
      }
    },
  },
  computed: {
    modal() {
      return this.$store.getters.modal;
    },
  },
};
</script>