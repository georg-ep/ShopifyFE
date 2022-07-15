<template>
  <div class="bg-fill">
    <div id="particle-container">
      <div v-for="i in 1000" :key="i" class="particle" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "Particles",
  mounted() {
    const container = document.getElementById("particle-container");

    container.classList.remove("active");

    setTimeout(() => container.classList.add("active"), 50);
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/welcome";
</style>