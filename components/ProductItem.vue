<template>
  <div class="product">
    <img
      v-if="product.images"
      @click="toProduct"
      class="image pointer"
      :src="product.images[0].image"
      alt="thumbnail"
    />
    <div class="product_content">
      <div @click="toProduct" class="name pointer">
        {{ product.name }}
      </div>
      <div class="compare_at_price">£{{ product.compare_at_price }}</div>
      <div class="current_price">£{{ product.price }}</div>
      <div class="buttons mt-12">
        <div class="wrapper">
          <Button
            :text="'Add to cart'"
            :font-size="'16px'"
            :padding="'2px 10px'"
            class="button"
            @click="addToCart"
          />
          <Button
            :text="'Details'"
            :outline="'black'"
            :background="'white'"
            :text-color="'var(--primary)'"
            :font-size="'16px'"
            :padding="'2px 10px'"
            class="button"
            @click="$router.push(`/products/${product.slug}/`)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toProduct() {
      this.$router.push(`/products/${this.product.slug}/`);
    },
    async addToCart() {
      await this.$store.dispatch("updateLineItems", {
        quantity: 1,
        product_id: this.product.shopify_id,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/product-item.scss";
</style>