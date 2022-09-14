<template>
  <div class="container container_content">
    <div class="welcome">
      <Particles />
      <div class="content-container">
        <div class="content">
          <div class="site-header">
            <div class="title">The future of trending products</div>
            <div class="site-desc">
              <div class="hyphen" />
              Shop a new generation of your <span>favourite</span> items
            </div>
          </div>
          <div class="d-flex">
            <Button
              @click="$router.push('/products/')"
              class="button"
              :text="'What\'s Trending?'"
              :text-colour="'white'"
            />
          </div>
        </div>
        <div class="content">
          <div>
            <FeaturedProduct />
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
    const title = document.querySelectorAll(".site-header");
    const desc = document.querySelectorAll(".site-desc");
    const buttons = document.querySelectorAll(".button");

    [title, desc, buttons].forEach((arr) =>
      arr.forEach((item) => item.classList.remove("active"))
    );

    setTimeout(() => {
      title[0].classList.add("active");
      desc[0].classList.add("active");
      buttons.forEach((button) => button.classList.add("active"));
    }, 50);
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