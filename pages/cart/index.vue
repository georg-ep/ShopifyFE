<template>
  <div class="container container_min">
    <div class="container_content">
      <div class="title">Your Cart</div>
      <div class="cart" v-if="checkout && checkout.line_items">
        <CheckoutItem
          v-for="(item, index) in checkout.line_items"
          :key="`item_${index}`"
          :item="item"
          @remove="remove(index)"
          @update-quantity="updateQuantity($event, index)"
        />
        <EmptyCheckoutItem class="mt-24" v-if="!checkout.line_items.length" />
        <div v-if="checkout.line_items.length" class="cart_summary">
          <div class="title_sub">Order Summary</div>
          <div class="section" :class="{ section_inactive: promoAmount }">
            <div class="subtitle mb-8">Promo Code</div>
            <Textfield
              :model.sync="promo"
              :font-size="'14px'"
              :background="'#F5F5F5'"
              :height="'35px'"
              :error="$v.promo"
              :rules="rules.promo"
              :custom-errors="customPromoErrors"
            />
            <Button
              @click="activatePromo"
              :activate-spinner="loadingPromo"
              :text="'Apply'"
              :background="'transparent'"
              :text-color="'var(--primary)'"
              class="mt-12"
              :height="'30px'"
            />
          </div>
          <div class="flex-row mt-12">
            <div>Shipping</div>
            <div class="bold-text">Free</div>
          </div>
          <div
            :class="promoAmount ? 'promo_active' : 'promo'"
            class="flex-row mt-12"
          >
            <div>Promotion Active</div>
            <div class="bold-text">{{ promoAmount * 100 }}%</div>
          </div>
          <Button
            v-if="promoAmount"
            :text="'Remove'"
            :background="'transparent'"
            :text-color="'var(--error)'"
            :outline="'var(--error)'"
            :padding="'0'"
            class="mb-24"
            @click="removePromotion"
          />
          <div class="flex-row mt-12">
            <div class="subtitle">Total</div>
            <div class="flex-row">
              <div :class="promoAmount ? 'compare-at mr-8' : 'bold-text'">
                £{{ checkout.total.toFixed(2) }}
              </div>
              <div v-if="promoAmount" class="bold-text">
                £{{ totalAfterPromo }}
              </div>
            </div>
          </div>
          <div class="actions">
            <Button
              @click="toCheckout()"
              :activate-spinner="loadingCheckout"
              :text="'Checkout'"
              :background="'transparent'"
              :text-color="'var(--primary)'"
            />
            <Button
              @click="$router.push('/products/')"
              class="ml-8"
              :text="'Continue Shopping'"
            />
          </div>
        </div>
      </div>
      <div class="spinner-wrapper" v-else>
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script>
import Client from "shopify-buy";
import { required } from "vuelidate/lib/validators";

export default {
  name: "Cart",
  data() {
    return {
      client: null,
      noCheckout: false,
      checkout: null,
      shopifyCheckout: null,
      loadingCheckout: false,
      customPromoErrors: [],
      failedPromos: [],
      promoAmount: 0,
      promo: "",
      loadingPromo: false,
      rules: { promo: [{ name: "required", text: "This field is required" }] },
    };
  },
  validations: {
    promo: {
      required,
    },
  },

  async mounted() {
    const checkout = await this.$store.dispatch("fetchCart");
    this.checkout = checkout;
  },
  watch: {
    promo() {
      if (this.failedPromos.includes(this.promo)) {
        return this.customPromoErrors.push({
          text: "This promo code is invalid",
        });
      }
      this.customPromoErrors = [];
    },
  },
  computed: {
    totalAfterPromo() {
      const total = this.checkout.total.toFixed(2);
      const reduction = total * this.promoAmount;
      return total - reduction;
    },
  },
  methods: {
    async removePromotion() {
      this.promoAmount = 0;
      await this.client.checkout.removeDiscount(this.shopifyCheckout.id);
    },
    async remove(index) {
      this.checkout = await this.$store.dispatch("updateLineItems", {
        product_id:
          "gid://shopify/ProductVariant/" +
          this.checkout.line_items[index].product.shopify_id,
        action: "set",
        colour: this.checkout.line_items[index].colour,
        quantity: 0,
      });
    },
    async activatePromo() {
      this.$v.$touch();
      if (!this.$v.$invalid && !this.failedPromos.includes(this.promo)) {
        this.loadingPromo = true;
        await this.toCheckout(false);
        try {
          const checkout = await this.client.checkout.addDiscount(
            this.shopifyCheckout.id,
            this.promo
          );
          if (!checkout.discountApplications.length) {
            this.customPromoErrors.push({ text: "This promo code is invalid" });
            this.failedPromos.push(this.promo);
            this.promoAmount = 0;
          } else {
            this.promoAmount =
              checkout.discountApplications[0].value.percentage / 100;
          }
          this.loadingPromo = false;
        } catch (e) {
          console.log(e);
        }
      }
    },
    async toCheckout(redirect = true) {
      if (redirect) this.loadingCheckout = true;
      this.client = Client.buildClient({
        domain: "goshopthemarket.myshopify.com",
        storefrontAccessToken: "b3d3d56e43e47f0e731d53954c8bc02c",
      });
      if (!this.shopifyCheckout) {
        this.shopifyCheckout = await this.client.checkout.create();
      }
      if (redirect) {
        let line_items = [];
        this.checkout.line_items.forEach((item) =>
          line_items.push({
            variantId:
              "gid://shopify/ProductVariant/" + item.product.shopify_id,
            quantity: item.quantity,
            // customAttributes: [{ key: "Selected Colour", value: item.colour }],
          })
        );

        try {
          await this.client.checkout.addLineItems(
            this.shopifyCheckout.id,
            line_items
          );
        } catch (e) {
          console.log(e);
          return;
        }
        window.location.replace(this.shopifyCheckout.webUrl);
        this.loadingCheckout = false;
      }
    },
    async updateQuantity(quantity, index) {
      this.checkout = await this.$store.dispatch("updateLineItems", {
        product_id: this.checkout.line_items[index].product.shopify_id,
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