<template>
  <div class="items">
    <div class="bg-fill" />
    <div class="container container_content">
    <div class="items-wrapper">
        <div
          class="item-col"
          :style="alignContent"
          v-for="(item, index) in data"
          :key="`col_${index}`"
        >
          <img
            class="image ctb"
            :style="item.styles ? item.styles.image : ''"
            v-if="item.image"
            :src="item.image"
            alt=""
          />
          <div class="info">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="desc">
              {{ item.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    contentAlign: {
      type: String,
      default: "left",
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    alignContent() {
      const config = {
        center: "justify-content: center",
        left: "justify-content: flex-start",
        right: "justify-content: flex-end",
      };
      return config[this.contentAlign];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/banner";
</style>