<template>
  <div class="container">
    <div class="container_content-smaller">
      <div id="faq" class="faq">
        <div class="title ta-c">FAQ</div>
        <div class="header">What payment methods do you accept?</div>
        <div class="desc">
          We accept payment via AMEX, APPLE PAY, DISCOVER, ELO, PAY, JCB, OPAY,
          MASTERCARD and VISA.
        </div>
        <div class="desc">
          No credit card information is ever saved by GoShopTheMarket and it remains
          the private property of the cardholder at all times before, during,
          and after the product purchase. Please note that all payments are
          charged in USD.
        </div>

        <div class="header">
          What should I do if I'm getting an error when placing an error?
        </div>
        <div class="desc">
          Please double check you've filled out all of your billing details
          properly including your full name, email address, full shipping
          address and phone number associated with the form of payment. If you
          continue having issues, please email us or DM us on our socials and
          we'll do our best to assist you!
        </div>

        <div class="header">
          How long will my it take for my order to dispatch?
        </div>

        <div class="desc">
          We try to dispatch your order as quickly as possible. If you order
          Thursday, You will receive the tracking information in 1-2 days.
          However, any order between Friday-Sunday will have their tracking
          numbers on Monday mornings!
        </div>

        <div class="header">
          How long will my order take to deliver after it has been placed?
        </div>

        <div class="desc">
          We try to dispatch your order as quickly as possible. But, because of
          the influx of orders we usually receive, 3-6 weeks is the standard
          time.
        </div>
        <div class="header">Where is my order confirmation?</div>
        <div class="desc">
          Once you have placed an order, you should receive an email
          confirmation to the email address you provided. If for some reason,
          you did not receive this email, please check your spam folder before
          contacting our Customer Experience team.
        </div>
        <div class="header">Where do you ship?</div>
        <div class="desc">
          We ship worldwide completely FREE! You will receive a tracking number
          once your order has been shipped.
        </div>

        <div class="header">
          Will my parcel be charged additional custom and import charges?
        </div>

        <div class="desc">
          Custom or Import Charges are charged once an item has arrived in its
          destination country. Unfortunately, we have no control over what these
          charges are, as Import and Custom policies vary from country to
          country. We would advise that you find out what these charges may be
          before you place your order.
        </div>

        <div class="header">What do I do if my order is missing?</div>

        <div class="desc">
          All of our shipments include Tracking with Delivery Confirmation. If
          the tracking information confirms that the item has been delivered to
          your order address but you have not received your order, please
          contact us at support@goshopthemarket.com
        </div>

        <div class="header">What is your returns and exchange policy?</div>

        <div class="desc">
          We really hope you love every purchase! All products are checked
          carefully prior to shipping. Please refer to our refund and exchange
          policy for more information. Please contact our Customer Experience
          team for any further questions
        </div>

        <div class="header">
          Will you be restocking items that have been sold out?
        </div>

        <div class="desc">
          Some of the items on our website sell out quickly, however, we
          regularly update our site so it's worth checking back. You may also
          enter your email address to be notified when a product is back in
          stock.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQ",
  mounted() {
    setTimeout(
      () => document.getElementById("faq").classList.add("active"),
      50
    );
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/faq";
</style>