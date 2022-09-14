<template>
  <div class="container container_min">
    <div class="container_content">
      <div class="cart">
        <div v-if="checkout && checkout.line_items">
          <div class="title">Your Cart</div>
          <div v-if="checkout.line_items.length">
            <CheckoutItem
              v-for="(item, index) in checkout.line_items"
              :key="`item_${index}`"
              :item="item"
              class="mt-24"
              @remove="remove(index)"
              @update-quantity="updateQuantity($event, index)"
            />
          </div>
          <EmptyCheckoutItem class="mt-24" v-else />
          <div v-if="checkout.line_items.length" class="divider" />
          <div v-if="checkout.line_items.length" class="flex-row">
            <div>Shipping</div>
            <div class="bold-text">Free</div>
          </div>
          <div v-if="checkout.line_items.length" class="flex-row">
            <div class="subtitle">Total</div>
            <div class="price">£{{ checkout.total.toFixed(2) }}</div>
          </div>
          <div class="actions">
            <Button
              v-if="checkout.line_items.length"
              @click="toPayment()"
              :activate-spinner="loadingCheckout"
              :text="'Checkout'"
              :background="'transparent'"
              :text-color="'var(--primary)'"
            />
            <Button
              v-if="checkout.line_items.length && !loadingCheckout"
              @click="$router.push('/products/')"
              class="ml-8"
              :text="'Continue Shopping'"
            />
          </div>
        </div>
        <div class="spinner-wrapper" v-else>
          <Spinner />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Client from "shopify-buy";
export default {
  name: "Cart",
  data() {
    return {
      client: null,
      noCheckout: false,
      checkout: null,
      loadingCheckout: false,
    };
  },

  async mounted() {
    const checkout = await this.$store.dispatch("fetchCart");
    this.checkout = checkout;
  },
  methods: {
    async remove(index) {
      this.checkout = await this.$store.dispatch("updateLineItems", {
        product_id: "gid://shopify/ProductVariant/42728021131479",
        action: "set",
        colour: this.checkout.line_items[index].colour,
        quantity: 0,
      });
    },
    async toPayment() {
      this.loadingCheckout = true;
      this.client = Client.buildClient({
        domain: "georgetheepic.myshopify.com",
        storefrontAccessToken: "31f06b1c172e2ea3444dbb07fdc92d6e",
      });
      const checkout = await this.client.checkout.create();
      let line_items = [];
      this.checkout.line_items.forEach((item) =>
        line_items.push({
          variantId: item.product.shopify_id,
          quantity: item.quantity,
          customAttributes: [{ key: "Selected Colour", value: item.colour }],
        })
      );
      await this.client.checkout.addLineItems(checkout.id, line_items);
      window.location.replace(checkout.webUrl);
      this.loadingCheckout = false;
    },
    async updateQuantity(quantity, index) {
      this.checkout = await this.$store.dispatch("updateLineItems", {
        product_id: "gid://shopify/ProductVariant/42728021131479",
        action: "set",
        colour: this.checkout.line_items[index].colour,
        quantity,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/cart";
</style>