<template>
  <div class="container">
    <div class="container_content-smaller">
      <div id="contact" class="contact">
        <div class="title">Contact Us</div>
        <div
          class="message"
          :class="[`message_success`, { message_visible: success }]"
        >
          Thanks for contacting us, we'll be in touch shortly
        </div>
        <div class="top-row" :class="{ 'top-row_slide-down': emailError }">
          <Textfield
            :model.sync="name"
            :error="$v.name"
            :rules="rules.name"
            :placeholder="'Name'"
          />
          <Textfield
            class="email-field"
            :error="$v.email"
            :model.sync="email"
            :rules="rules.email"
            :placeholder="'Email'"
          />
        </div>
        <Textfield
          class="mb-12"
          :model.sync="phone"
          :placeholder="'Phone number'"
        />
        <Textfield
          :type="'textarea'"
          :error="$v.message"
          :rules="rules.message"
          :model.sync="message"
          :height="'200px'"
          :placeholder="'Message'"
        />
        <div class="button-wrapper">
          <Button @click="postMessage" :text="'Send Message'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Contact",
  data() {
    return {
      rules: {
        name: [{ name: "required", text: "This field is required" }],
        message: [{ name: "required", text: "This field is required" }],
        email: [
          { name: "required", text: "This field is required" },
          { name: "email", text: "Please enter a valid email" },
        ],
      },
      name: "",
      email: "",
      phone: "",
      message: "",
      emailError: false,
      success: false,
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    message: {
      required,
    },
    name: {
      required,
    },
  },
  mounted() {
    setTimeout(
      () => document.getElementById("contact").classList.add("active"),
      100
    );
  },
  methods: {
    async postMessage() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        try {
          await this.$store.dispatch("postContact", {
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message,
          });
          this.success = true;
          const fields = ["name", "phone", "email", "message"];
          fields.forEach((field) => delete this[field]);
          setTimeout(() => this.success = false, 5000);
        } catch (e) {
          console.log(e.response);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/contact";
</style>