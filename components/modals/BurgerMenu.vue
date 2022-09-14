<template>
  <div>
    <div
      @click="$emit('close')"
      class="fill-bg"
      :class="{ 'fill-bg_active': show }"
    />
    <div class="modal" :class="{ modal_active: show }">
      <div class="modal_content">
        <div class="links">
          <div
            @click="toLink(link.route)"
            class="link"
            v-for="(link, index) in links"
            :key="`link_${index}`"
          >
            {{ link.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BurgerMenu",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      links: [
        { name: "Home", route: "/" },
        { name: "Products", route: "/products/" },
        { name: "Become an Affiliate", route: "/affiliate" },
        { name: "FAQs", route: "/faq" },
        { name: "Cart", route: "/cart" },
        { name: "Contact", route: "/contact" },
      ],
    };
  },
  methods: {
    toLink(route) {
      this.$router.push(route);
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/modals/menu";
</style>