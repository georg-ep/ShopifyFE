<template>
  <div class="checkout-item empty-cart">
    <div>
      <div class="empty-cart_title">Your cart is empty</div>
      <div class="empty-cart_desc">
        Add items to your cart in order to checkout
      </div>
      <Button
        @click="$router.push('/product/pen/')"
        :outline="true"
        :text-color="'var(--primary)'"
        class="mt-24"
        :font-size="'14px'"
        :text="'Shop Products'"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "EmptyCheckoutItem",
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/checkout-item";
</style>