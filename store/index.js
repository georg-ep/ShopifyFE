const BASE_URL = "http://localhost:80/api/";
export const actions = {
  async updateCart(context, payload) {
    return await fetch(`${BASE_URL}update_cart/`, { body: JSON.stringify(payload), method: "PATCH", credentials: "include" });
  },
  async fetchCart(context) {
    const raw = await fetch(
      `${BASE_URL}fetch_cart/`, {
      method: "GET",
      credentials: "include",
    },
    );
    return raw.json();
  },
  async updateLineItems(context, item) {
    const checkout = await fetch(`${BASE_URL}line_items/update/`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(item),
    });
    return checkout.json();
  },
};