<template>
  <div class="container">
    <div class="container_content">
      <div class="product">
        <div class="images">
          <ImageCatalog />
        </div>
        <div class="info">
          <div class="title">{{ title }}</div>
          <div class="reviews">
            <img
              src="~/assets/icons/star.svg"
              class="star ctb"
              v-for="(star, index) in reviews.stars"
              :key="`star_${index}`"
            />
            <div class="count">({{ reviews.count }})</div>
          </div>
          <div class="price">
            <div class="discount-label">50% off</div>
            <div class="original">{{ price.original }}</div>
            <div class="current">{{ price.current }}</div>
          </div>
          <ColourSelector
            class="mt-24"
            :data="colourData"
            @update-colour="colour = $event.name"
          />
          <div class="mt-48 mb-24 d-flex d-flex_a-center">
            <Dropdown
              :items="items"
              :value="quantity"
              :label="'Quantity'"
              @update="quantity = $event"
            />
            <Button
              class="ml-24"
              :width="'100%'"
              :padding="'13px'"
              :text="cartText"
              :activate-spinner="buttonSpinner"
              @click="createCheckout"
            />
          </div>
          <div class="mb-48 header header_ta-c header_uline">
            LIMITED OFFER - Buy 2 for 20% off!
          </div>
          <div class="info-container">
            <div class="header">The ultimate ADHD cure</div>
            <div class="description">
              We get it, no one wants to sit through hours of lessons, lectures
              and meetings. That's why our team have introduced
              <span class="bold">The Market Pen</span>
            </div>
            <video id="video" class="gif" autoplay muted loop>
              <source
                type="video/mp4"
                src="~/assets/videos/pen/pen-video-1.mp4"
              />
            </video>
          </div>
          <div class="info-container">
            <div class="header">What does it do?</div>
            <div class="description">
              The magnetic pen is a bunch of magnetic components which can be
              taken apart.
              <div>The combinations of these magnets is endless.</div>
            </div>
            <div class="description">
              Also included are stylus tips to be used on any of your digital
              devices
            </div>
            <div class="description">
              Countless ways to create new designs, shapes and unique
              masterpieces!
            </div>
            <img class="gif" src="~/assets/videos/pen/pen-video-2.jpeg" />
          </div>
          <div class="info-container">
            <div class="header">Special offer is live!</div>
            <div class="description">Desc</div>
            <img class="gif" src="~/assets/videos/pen/pen-video-3.jpeg" />
          </div>
          <div class="info-container">
            <div class="header">Special offer is live!</div>
            <div class="description">Desc</div>
            <img class="gif" src="~/assets/videos/pen/pen-video-4.gif" />
          </div>
          <div class="info-container">
            <div class="header">Special offer is live!</div>
            <div class="description">Desc</div>
            <img class="gif" src="~/assets/videos/pen/pen-video-5.gif" />
          </div>
          <div class="info-container">
            <div class="header">Special offer is live!</div>
            <div class="description">Desc</div>
            <img class="gif" src="~/assets/videos/pen/pen-video-6.gif" />
          </div>
          <div class="info-container">
            <div class="header">Special offer is live!</div>
            <div class="description">Desc</div>
            <img class="gif" src="~/assets/videos/pen/pen-video-7.gif" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  props: {
    client: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      title: "The Market Pen ™",
      price: {
        original: "£44.99",
        current: "£24.99",
      },
      buttonSpinner: false,
      colour: "Colourful",
      quantity: 1,
      colourData: [
        {
          name: "Colourful",
          colour: "#D2B5D3",
        },
        {
          name: "Gold",
          colour: "#FFD600",
        },
        {
          name: "Silver",
          colour: "#C0C0C0",
        },
        {
          name: "Black",
          colour: "black",
        },
      ],
      cartText: "Add to Cart",
      reviews: {
        stars: 5,
        count: 70,
      },
    };
  },
  mounted() {
    document.getElementById("video").play();
  },
  computed: {
    items() {
      return Array(10)
        .fill()
        .map((_, i) => i + 1);
    },
  },
  methods: {
    async createCheckout() {
      this.buttonSpinner = true;

      await this.$store.dispatch("updateLineItems", {
        quantity: this.quantity,
        colour: this.colour,
        product_id: "gid://shopify/ProductVariant/42728021131479",
      });

      this.$router.push(`/cart/`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/product-detail";
</style>