<template>
  <div class="container container_content">
    <div class="welcome">
      <div class="bg-fill" />
      <div class="content">
        <div class="site-name">
          <div>Go Shop The Market</div>
          <img class="site-icon" src="~/assets/icons/market.svg" alt="" />
        </div>
        <div class="site-desc">
          Shop your <span>favourite</span>, trending products
        </div>
        <div class="d-flex">
          <Button
            @click="$router.push('/product/pen/')"
            class="button"
            :text="'Shop now'"
          />
        </div>
        <div @click="$router.push('/product/pen/')" class="alert-banner">
          <div>
            <span class="trending">TRENDING</span> Our new
            <span>Market Pen</span> is currently going viral and selling out
            quickly! Click here to get more information
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  mounted() {
    const title = document.querySelectorAll(".site-name");
    const desc = document.querySelectorAll(".site-desc");
    const buttons = document.querySelectorAll(".button");
    title[0].classList.add("active");
    desc[0].classList.add("active");
    buttons.forEach((button) => button.classList.add("active"));
  },
  methods: {
    scroll() {
      document.querySelector(".image-catalog").scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/welcome";
</style>