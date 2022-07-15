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
      <ol>
        <li>Sign up for free</li>
        <div>Create an account using the form below</div>
        <li>Share your code</li>
        <div>Once you've done this, view your code in your profile</div>
        <li>Earn commissions</li>
        <div>
          Receive payments everytime someone makes a payment using your code
        </div>
      </ol>
      <div class="affiliate-form">
        <div class="flex-row flex-row_space mb-12">
          <Textfield
            :label="'First name'"
            :heading-color="'var(--secondary)'"
          />
          <Textfield
            :label="'Last name'"
            :heading-color="'var(--secondary)'"
            class="ml-8"
          />
        </div>
        <Textfield
          :label="'Email'"
          :heading-color="'var(--secondary)'"
          class="mb-24"
        />
        <Button :text="'Register'" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AffiliatePage",
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/affiliate";
</style>