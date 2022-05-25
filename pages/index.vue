<template>
  <div class="container">
    <div class="container_content">
      <Welcome />
      <Banner :data="cols" :content-align="'center'" />
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      cols: [
        {
          title: "Limited Offer",
          desc: "Take advantage of a limited discount: the offer ends today!",
          image: require("~/assets/icons/sale-tag.svg"),
        },
        {
          title: "Dispatch within 24 hours",
          desc: "Packages are dispatched within 24 hours. Delivery is free until tonight!",
          image: require("~/assets/icons/delivery-van.svg"),
        },
        {
          title: "25,000+ customers",
          desc: "We have 25,000+ satisfied customers since 2017.",
          image: require("~/assets/icons/users.svg"),
        },
      ],
    };
  },
  computed: {},
};
</script>
