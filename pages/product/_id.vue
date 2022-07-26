<template>
  <div v-if="product" class="container">
    <div class="container_content">
      <div class="product">
        <div class="left-side">
          <ImageCatalog :images="product.images" class="mb-24" />
        </div>
        <div class="info">
          <div class="title">{{ product.name }}</div>
          <div class="reviews">
            <img
              src="~/assets/icons/star.svg"
              class="star ctb"
              v-for="(star, index) in Math.ceil(product.average_rating)"
              :key="`star_${index}`"
            />
            <div @click="scroll()" class="count">
              ({{ product.reviews.length }})
            </div>
          </div>
          <div class="price">
            <div v-if="product.reduction_perc" class="discount-label">
              {{ product.reduction_perc }}% off
            </div>
            <div class="original">£{{ product.compare_at_price }}</div>
            <div class="current">£{{ product.price }}</div>
          </div>
          <ColourSelector
            v-if="product.colours"
            class="mt-24"
            :data="product.colours"
            @update-colour="colour = $event.name"
          />
          <div class="mt-48 mb-24 d-flex d-flex_a-center">
            <Dropdown
              :items="items"
              :value="quantity"
              :label="'Quantity'"
              @update="quantity = $event"
            />
            <Button
              class="ml-24"
              :width="'100%'"
              :text="cartText"
              :activate-spinner="buttonSpinner"
              :text-colour="'white'"
              @click="createCheckout"
            />
          </div>
          <ProductSection
            v-for="(section, index) in product.sections"
            :key="`section_${index}`"
            :section="section"
          />
        </div>
      </div>
      <Reviews v-if="product.reviews" :reviews="product.reviews" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  async asyncData({ store, route }) {
    const product = await store.dispatch("product/fetch", {
      uid: route.params.id,
    });
    const colour = product.colours[0];
    return {
      product,
      colour,
      quantity: 1,
      cartText: "Add to Cart",
      buttonSpinner: false,
    };
  },
  computed: {
    items() {
      return Array(10)
        .fill()
        .map((_, i) => i + 1);
    },
  },
  methods: {
    scroll() {
      const reviews_container = document.getElementById("ratings");
      const y = reviews_container.getBoundingClientRect().top - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    },
    async createCheckout() {
      this.buttonSpinner = true;

      this.res = await this.$store.dispatch("updateLineItems", {
        quantity: this.quantity,
        colour: this.colour,
        product_id: this.product.shopify_id,
      });

      this.$router.push(`/cart/`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/product-detail";
</style>