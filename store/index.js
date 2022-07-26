export const state = () => ({
  cart: null,
  modal: null,
});


export const mutations = {
  setCart(state, cart) {
    state.cart = cart;
  },
  setModal(state, modal) {
    state.modal = modal;
  }
};

export const actions = {
  async createAffiliate(context, payload) {
    return await this.$axios.$post(`affiliate/create/`, payload);
  },
  async fetchAffiliate(context, payload) {
    return await this.$axios.$post(`affiliate/fetch/`, payload);
  },
  async subscribe(context, payload) {
    return await this.$axios.$post(`subscribe/`, payload);
  },
  async postContact(context, payload) {
    return await this.$axios.$post(`contact/submission/`, payload);
  },
  async fetchCart(context) {
    const raw = await fetch(
      `${process.env.BASE_URL}fetch_cart/`, {
      method: "GET",
      credentials: "include",
    },
    );
    const data = await raw.json()
    context.commit("setCart", data);
    return data;
  },
  async updateLineItems(context, item) {
    let checkout = await fetch(`${process.env.BASE_URL}line_items/update/`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(item),
    });
    checkout = await checkout.json();
    context.commit("setCart", checkout);
    return checkout;
  },
};

export const getters = {
  cart: (state) => state.cart,
  modal: (state) => state.modal,
};