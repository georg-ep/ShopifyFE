<template>
  <div class="featured-product">
    <div class="label">Current Bestseller</div>
    <div class="warning">Trending and selling out fast</div>
    <img class="image" src="~/assets/images/pens/1.png" alt="" />
    <Button @click="toRoute" :text="'View'" :outline="true" :text-color="'var(--primary)'" />
  </div>
</template>

<script>
export default {
  name: "FeaturedProduct",
  methods: {
    toRoute() {
      this.$router.push("/product/pen/");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/featured-product";
</style>