export const actions = {
  async fetch(context, { uid }) {
    return await this.$axios.$get(`product/${uid}/`);
  },
};