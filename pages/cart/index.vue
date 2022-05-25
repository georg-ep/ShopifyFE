<template>
  <div class="container">
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
            <div class="subtitle">Total</div>
            <div class="price">£{{ checkout.total.toFixed(2) }}</div>
          </div>
          <div v-if="checkout.line_items.length" class="bold-text">
            Free shipping included
          </div>
          <div class="actions">
            <Button
              v-if="checkout.line_items.length"
              @click="toPayment()"
              :text="'Checkout'"
            />
            <Button
              v-if="checkout.line_items.length"
              @click="$router.push('/product/pen/')"
              :outline="true"
              :text-color="'var(--primary)'"
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
    };
  },

  async mounted() {
    const checkout = await this.$store.dispatch("fetchCart");
    console.log(checkout);
    this.checkout = checkout;
  },

  // async mounted() {
  //   if (Object.keys(this.$route.query).includes("checkout_id")) {
  //     this.client = Client.buildClient({
  //       domain: "georgetheepic.myshopify.com",
  //       storefrontAccessToken: "31f06b1c172e2ea3444dbb07fdc92d6e",
  //     });
  //     const id = this.$route.query.checkout_id;
  //     this.checkout = await this.client.checkout.fetch(id);
  //   } else {
  //     this.noCheckout = true;
  //   }
  // },
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
      const checkoutId = this.checkout.id;
      const lineItemsToUpdate = [
        { id: this.checkout.lineItems[idx].id, quantity },
      ];

      this.checkout = await this.client.checkout.updateLineItems(
        checkoutId,
        lineItemsToUpdate
      );
      window.open(this.checkout.webUrl, "_blank");
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