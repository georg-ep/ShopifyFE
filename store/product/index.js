export const actions = {
  async fetch(context, { uid }) {
    return await this.$axios.$get(`product/${uid}/`);
  },

  async list(context) {
    return await this.$axios.$get(`products/`);
  },
};