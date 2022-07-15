<template>
  <div class="checkout-item">
    <div class="item-col">
      <img class="thumbnail" :src="thumbnail" alt="thumbnail" />
      <div class="product-info">
        <div class="title">{{ item.product.name }}</div>
        <div v-if="item.colour" class="field">
          Colour <strong>{{ item.colour.name }}</strong>
        </div>
        <div class="field total">
          Price <strong>£{{ item.product.price }}</strong>
        </div>
      </div>
    </div>
    <div class="item-col item-col_space">
      <Dropdown
        :value="item.quantity"
        @update="$emit('update-quantity', $event)"
        :label="'Quantity'"
        :items="items"
      />
      <div class="header-field">
        <div class="subtitle_black">Sub-total</div>
        <div class="subtitle">
          <span class="original">£{{ subTotalInitial }}</span> £{{
            subTotalReduced
          }}
        </div>
      </div>
      <img
        @click="$emit('remove')"
        class="close"
        src="~/assets/icons/close.svg"
        alt="close"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutItem",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      thumbnail: require("~/assets/images/pens/1.png"),
    };
  },
  computed: {
    items() {
      return Array(10)
        .fill()
        .map((_, i) => i + 1);
    },
    subTotalInitial() {
      return parseFloat(
        this.item.product.compare_at_price * this.item.quantity
      ).toFixed(2);
    },
    subTotalReduced() {
      return parseFloat(this.item.product.price * this.item.quantity).toFixed(
        2
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/checkout-item";
</style>