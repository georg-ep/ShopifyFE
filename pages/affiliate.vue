<template>
  <div class="container mb-24">
    <div class="container_content-smaller">
      <div class="title ta-c title_nm mt-24">Become an Affiliate</div>
      <div class="title_secondary ta-c mb-24">
        Thanks for taking an interest on becoming an affiliate
      </div>
      <div class="title_secondary underline">
        You might be asking, what's in it for me?
      </div>
      <div class="title_secondary mb-24">
        You'll be rewarded with <span class="standout">10%</span> of any
        purchase someone makes with your code
      </div>
      <div class="title_secondary">Follow the steps below to get started</div>
      <ol class="mb-48">
        <li>Sign up for free</li>
        <div>Create an account using the form below</div>
        <li>Share your code</li>
        <div>Once you've done this, view your code in your profile</div>
        <li>Earn commissions</li>
        <div>
          Receive payments everytime someone makes a payment using your code
        </div>
      </ol>
      <div class="affiliate-form mb-24">
        {{ formType }}
        <div v-if="isRegister" class="flex-row flex-row_space mb-12">
          <Textfield
            :model.sync="firstName"
            :error="$v.firstName"
            :rules="rules.firstName"
            :label="'First name'"
            :heading-color="'var(--secondary)'"
          />
          <Textfield
            :error="$v.lastName"
            :model.sync="lastName"
            :rules="rules.lastName"
            :label="'Last name'"
            :heading-color="'var(--secondary)'"
            class="ml-8"
          />
        </div>
        <Textfield
          :error="$v.email"
          :rules="rules.email"
          :custom-errors="customEmailErrors"
          :model.sync="email"
          :label="'Email'"
          :heading-color="'var(--secondary)'"
          class="mb-24"
        />
        <Button @click="submit()" :text="buttonText" />
        <div>
          {{ redirectText[0] }}
          <span @click="updateForm()" class="login-here pointer">{{
            redirectText[1]
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  name: "AffiliatePage",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      formType: "register",
      customEmailErrors: [],
      existingEmail: "",
      rules: {
        firstName: [{ name: "required", text: "This field is required" }],
        lastName: [{ name: "required", text: "This field is required" }],
        email: [
          { name: "required", text: "This field is required" },
          { name: "email", text: "Please enter a valid email" },
        ],
      },
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    firstName: {
      required,
    },
    lastName: {
      required,
    },
  },
  computed: {
    redirectText() {
      return this.isLogin
        ? { 0: "Already have an account?", 1: "Login here" }
        : { 0: "Dont have an account?", 1: "Register here" };
    },
    buttonText() {
      return this.isLogin ? "Login" : "Register";
    },
    isLogin() {
      return this.formType === "login";
    },
    isRegister() {
      return this.formType === "register";
    },
  },
  watch: {
    email(val) {
      if (this.existingEmail) {
        if (val !== this.existingEmail) this.customEmailErrors = [];
        else
          this.customEmailErrors.push({
            text: "An affiliate with this email is already registered, please login",
          });
      }
    },
  },
  methods: {
    updateForm() {
      if (this.formType === "login") {
        return (this.formType = "register");
      }
      this.formType = "login";
    },
    async submit() {
      this.$v.$touch();
      if (!this.$v.$invalid && this.existingEmail !== this.email) {
        this.customEmailErrors = [];
        const payload = {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
        };
        try {
          await this.$store.dispatch("createAffiliate", payload);
        } catch (e) {
          if (e.response && e.response.data) {
            if (e.response.data.detail.includes("email")) {
              this.customEmailErrors.push({
                text: "An affiliate with this email is already registered, please login",
              });
              this.existingEmail = this.email;
            }
          }
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/affiliate";
</style>