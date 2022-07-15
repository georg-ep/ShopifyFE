<template>
  <div class="scaffold">
    <div class="content">
      <div class="top-row">
        <div v-if="title">
          {{ title }}
        </div>
        <img
          @click="closeModal"
          class="close pointer"
          src="~/assets/icons/close.svg"
        />
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ScaffoldModal",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    closeModal() {
      this.$store.commit("setModal", null);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/modals/scaffold";
</style>