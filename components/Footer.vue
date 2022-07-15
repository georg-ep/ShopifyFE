<template>
  <div id="footer" class="fill-bg">
    <div class="container">
      <div class="container_content">
        <div class="footer">
          <div class="columns">
            <div class="flex-col">
              <div class="heading">INFO</div>
              <div @click="$router.push('/faq/')" class="link">FAQ</div>
              <div @click="$router.push('/contact/')" class="link">
                Contact Us
              </div>
              <div @click="$router.push('/affiliate/')" class="link">
                Become Affiliated
              </div>
              <div @click="$router.push('/terms/')" class="link">
                Terms Of Service
              </div>
              <div @click="$router.push('/faqs/')" class="link">
                Return/Refund Policy
              </div>
              <div @click="$router.push('/faqs/')" class="link">
                Shipping and Delivery Policy
              </div>
            </div>
            <div class="flex-col">
              <div class="heading">CONTACT</div>
              <div class="link">support@goshopthemarket.com</div>
            </div>
            <div class="flex-col">
              <div class="heading">SIGN UP & SAVE</div>
              <Textfield
                :model.sync="email"
                :background="'black'"
                :color="'white'"
                :heading-color="'#CCCCCC'"
                :error="error"
                :label="'Email'"
                :placeholder="'Enter your email'"
                :outline="'0 0 0 1px white'"
                class="mb-12"
              />
              <Button
                :text="'Sign up!'"
                class="mb-12"
                :outline="true"
                @click="subscribe"
              />
              <div
                class="message"
                :class="[
                  `message_${error ? 'error' : 'success'}`,
                  { message_visible: messageText },
                ]"
              >
                {{ messageText }}
              </div>
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
  data() {
    return {
      email: "",
      messageText: "",
      error: false,
    };
  },
  mounted() {},
  computed: {
    validateEmail() {
      return (email) =>
        String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    },
  },
  methods: {
    resetMessage() {
      setTimeout(() => {
        this.error = false;
        this.messageText = "";
      }, 4000);
    },
    async subscribe() {
      this.error = false;
      this.messageText = "";
      if (!this.validateEmail(this.email)) {
        this.error = true;
        this.messageText = "Please enter a valid email";
        this.resetMessage();
        return;
      }
      try {
        await this.$store.dispatch("subscribe", { email: this.email });
        this.messageText = "Thanks for subscribing";
        this.email = "";
      } catch (e) {
        this.error = true;
        console.log("error", e, e.response);
        if (e.response && e.response.data && e.response.data.detail) {
          this.messageText = e.response.data.detail;
        } else {
          this.messageText = "An unknown error occurred";
        }
      } finally {
        this.resetMessage();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/footer";
@import "~/assets/scss/pages/contact";
</style>