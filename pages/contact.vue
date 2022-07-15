<template>
  <div class="container">
    <div class="container_content-smaller">
      <div id="contact" class="contact">
        <div class="title">Contact Us</div>
        <div
          class="message"
          :class="[`message_${message}`, { message_visible: message }]"
        >
          {{ messageText }}
        </div>
        <div class="top-row" :class="{ 'top-row_slide-down': emailError }">
          <Textfield
            :model.sync="data.name"
            :error="errors.name"
            :placeholder="'Name'"
          />
          <Textfield
            class="email-field"
            :error="errors.email"
            :model.sync="data.email"
            :placeholder="'Email'"
          />
        </div>
        <Textfield
          :error="errors.phone"
          class="mb-12"
          :model.sync="data.phone"
          :placeholder="'Phone number'"
        />
        <Textfield
          :type="'textarea'"
          :error="errors.message"
          :model.sync="data.message"
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
export default {
  name: "Contact",
  data() {
    return {
      errors: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      data: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      message: null,
      emailError: false,
    };
  },
  computed: {
    messageText() {
      return this.message === "success"
        ? "Thanks for contacting us, we'll be in touch shortly"
        : "Please check the form for errors";
    },
  },
  mounted() {
    setTimeout(
      () => document.getElementById("contact").classList.add("active"),
      100
    );
  },
  methods: {
    reset() {
      Object.keys(this.errors).forEach((key) => (this.errors[key] = false));
      this.emailError = false;
    },
    validate() {
      let err = false;
      this.reset();
      Object.keys(this.errors).forEach((key) => {
        if (!this.data[key]) {
          this.$set(this.errors, key, true);
          err = true;
        }
      });
      if (err) this.message = "error";

      console.log(this.errors);
      console.log(err);
      return !err;
    },
    async postMessage() {
      if (!this.validate()) return;
      try {
        await this.$store.dispatch("postContact", this.data);
        Object.keys(this.data).forEach((key) => delete this.data[key]);
        this.message = "success";
      } catch (e) {
        if (e.response.data.detail.includes("email")) {
          this.errors.email = e.response.data.detail;
          this.emailError = true;
        }
        console.log(e.response);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/contact";
</style>