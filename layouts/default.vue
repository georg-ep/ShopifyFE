<template>
  <div>
    <div class="banner">
      <div>FREE WORLDWIDE SHIPPING, WE GOT YOU ❤️</div>
    </div>
    <BurgerMenu @close="show = false" :show="show" />
    <Nav @toggle="show = !show" :cart="cart" :show-menu="show" />
    <nuxt-child :client="client" />
    <Footer />
  </div>
</template>

<script>
import Client from "shopify-buy";
import BurgerMenu from "~/components/modals/BurgerMenu.vue";

export default {
  name: "DefaultLayout",
  components: {
    BurgerMenu,
  },
  data() {
    return {
      show: false,
      client: null,
      cart: null,
    };
  },
  async mounted() {
    this.cart = await this.$store.dispatch("fetchCart");
    
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/layouts/default";
</style>