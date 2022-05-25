<template>
  <div class="container">
    <div class="container_content-smaller">
      <div class="contact">
        <div class="title">Contact Us</div>
        <div class="top-row">
          <Textfield
            :width="'100%'"
            :flex="1"
            :placeholder="'Name'"
            :outline="`1px solid var(--primary)`"
          />
          <Textfield
            :width="'100%'"
            :flex="2"
            :placeholder="'Email'"
            :outline="`1px solid var(--primary)`"
          />
        </div>
        <Textfield
          :width="'100%'"
          :placeholder="'Phone number'"
          :outline="`1px solid var(--primary)`"
        />
        <Textfield
          :width="'100%'"
          :type="'textarea'"
          :height="'400px'"
          :placeholder="'Message'"
          :outline="`1px solid var(--primary)`"
        />
        <div class="button-wrapper">
          <Button :text="'Send Message'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/contact";
</style>