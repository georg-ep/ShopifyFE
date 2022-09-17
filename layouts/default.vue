<template>
  <div>
  <Modals />
    <div class="banner">
      <div>FREE WORLDWIDE SHIPPING</div>
    </div>
    <BurgerMenu @close="show = false" :show="show" />
    <Nav @toggle="show = !show" :show-menu="show" />
    <nuxt-child id="body" :client="client" />
    <Footer />
  </div>
</template>

<script>
import BurgerMenu from "~/components/modals/BurgerMenu.vue";
import Modals from "~/components/modals/index.vue";
export default {
  name: "DefaultLayout",
  components: {
    BurgerMenu,
    Modals,
  },
  data() {
    return {
      show: false,
      client: null,
    };
  },
  async mounted() {
    await this.$store.dispatch("fetchCart");
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/layouts/default";
</style>