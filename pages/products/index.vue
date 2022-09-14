<template>
  <div class="container">
    <div class="container_content">
      <div class="title ta-c">Our Products</div>
      <div class="products">
        <ProductItem
          v-for="(product, index) in products"
          :key="`product_${index}`"
          :id="`product_${index}`"
          class="product"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  head: {
    title: "Our Products",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "View a list of our current, trending products",
      },
    ],
  },
  async asyncData({ store }) {
    const products = (await store.dispatch("product/list")).results;
    return { products };
  },
  mounted() {
    const products = this.products;

    products.forEach((product, index) =>
      setTimeout(
        () =>
          document.getElementById(`product_${index}`).classList.add("active"),
        index * 100
      )
    );
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/products";
</style>