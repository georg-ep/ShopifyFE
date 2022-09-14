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
              <!-- <div @click="$router.push('/affiliate/')" class="link">
                Become Affiliated
              </div> -->
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
                :error="$v.email"
                :rules="rules.email"
                :background="'black'"
                :color="'white'"
                :heading-color="'#CCCCCC'"
                :label="'Email'"
                :placeholder="'Enter your email'"
                :outline="'1px solid white'"
                class="mb-12"
              />
              <Button
                :text="'Sign up!'"
                class="mb-12"
                @click="subscribe"
                :background="'transparent'"
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
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Footer",
  data() {
    return {
      email: "",
      messageText: "",
      error: false,
      rules: {
        email: [
          { name: "required", text: "This field is required" },
          { name: "email", text: "Enter a valid email" },
        ],
      },
    };
  },
  validations: {
    email: {
      required,
      email,
    },
  },
  methods: {
    async subscribe() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
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
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/footer";
@import "~/assets/scss/pages/contact";
</style>