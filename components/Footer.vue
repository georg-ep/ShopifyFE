<template>
  <div id="footer" class="fill-bg">
    <div class="container">
      <div class="container_content">
        <div class="footer">
          <div class="columns">
            <div class="flex-col">
              <div class="heading">INFO</div>
              <div class="link">FAQ</div>
              <div class="link">Contact Us</div>
              <div class="link">Track Your Order</div>
              <div class="link">Become Affiliated</div>
              <div class="link">Terms Of Service</div>
              <div class="link">Return/Refund Policy</div>
              <div class="link">Shipping and Delivery Policy</div>
            </div>
            <div class="flex-col">
              <div class="heading">CONTACT</div>
              <div class="link">support@goshopthemarket.com</div>
            </div>
            <div class="flex-col">
              <div class="heading">SIGN UP & SAVE</div>
              <div class="link">Coming Soon!</div>
            </div>
          </div>
          <div class="flex-row">
            <div class="copyright">Copyright © 2022 GoShopTheMarket.</div>
            <div class="d-flex">
              <img
                class="payment-icon"
                src="~/assets/icons/payments/amex.svg"
                alt="amex"
              />
              <img
                class="payment-icon"
                src="~/assets/icons/payments/apple-pay.svg"
                alt="apple-pay"
              />
              <img
                class="payment-icon"
                src="~/assets/icons/payments/mastercard.svg"
                alt="mastercard"
              />
              <img
                class="payment-icon"
                src="~/assets/icons/payments/visa.svg"
                alt="visa"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  mounted() {},
  methods: {
    positionFooter() {
      let elem = document.getElementById("footer");
      let rect = elem.getBoundingClientRect();
      console.log(rect.y, rect.height, window.screen.height);
      if (rect.y + rect.height < window.screen.height) {
        elem.style.position = "absolute";
        elem.style.bottom = 0;
      } else {
        elem.style.position = "relative";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/footer";
</style>