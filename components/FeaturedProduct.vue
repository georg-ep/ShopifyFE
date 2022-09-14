<template>
  <div class="featured-product">
    <div class="label">Current Bestseller</div>
    <div class="warning">Trending and selling out fast</div>
    <img class="image" src="~/assets/images/pens/1.png" alt="" />
    <Button @click="toRoute" :text="'View'" :text-color="'white'" />
  </div>
</template>

<script>
export default {
  name: "FeaturedProduct",
  methods: {
    toRoute() {
      this.$router.push("/products/pen/");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/featured-product";
</style>