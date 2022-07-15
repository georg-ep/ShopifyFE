<template>
  <div class="nav">
    <div class="container">
      <div class="container_content">
        <div class="nav-row">
          <img
            @click="$emit('toggle')"
            class="burger-menu ctw"
            :src="menuSrc"
            alt="burger-menu"
          />
          <div @click="$router.push('/')" class="logo">GoShopTheMarket</div>
          <!-- <Textfield
            class="tf"
            :flex="1"
            :search="true"
            :placeholder="'Search for a product'"
          /> -->
          <div style="flex: 1" class="links">
            <div
              v-for="(link, index) in links"
              :key="`link_${index}`"
              class="link"
              @click="$router.push(link.route)"
            >
              {{ link.name }}
            </div>
          </div>
          <div class="trailing-icons d-flex">
            <div class="d-flex discount">
              <img class="icon ctw" src="~/assets/icons/sale-tag.svg" alt="" />
              <div>
                <div>USE CODE <span class="sale">SAVE10</span> AT CHECKOUT</div>
              </div>
            </div>
            <div class="cart-wrapper">
              <div
                v-if="cart && cart.total_cart_items > 0"
                class="cart-wrapper_label"
              >
                {{ cart.total_cart_items }}
              </div>
              <img
                @click="$router.push('/cart')"
                class="cart"
                src="~/assets/icons/shopping-cart.svg"
                alt="shopping-cart"
              />
            </div>
          </div>
        </div>
        <div class="sale-mobile">
          <img class="sale-icon ctw" src="~/assets/icons/sale-tag.svg" alt="" />
          <div>
            <div>USE CODE <span class="sale">SAVE10</span> AT CHECKOUT</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    showMenu: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      links: [
        { name: "Products", route: "/product/pen/" },
        { name: "Become an Affiliate", route: "/affiliate" },
        { name: "FAQs", route: "/faq" },
        { name: "Contact", route: "/contact" },
      ],
    };
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
    menuSrc() {
      return this.showMenu
        ? require("~/assets/icons/close.svg")
        : require("~/assets/icons/burger-menu.svg");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/nav";
</style>