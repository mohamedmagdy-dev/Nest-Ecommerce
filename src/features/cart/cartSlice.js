import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
  coupon: "",
  couponAmount: "",
  discount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.cartItems.find((p) => p.id === item.id);
      if (existing) {
        existing.quantity++;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
      updateCoupon(state);
      state.totalQuantity++;
      state.totalPrice += item.price;
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      const existing = state.cartItems.find((p) => p.id === product.id);
      if (existing) {
        state.totalQuantity -= existing.quantity;
        state.totalPrice -= existing.price * existing.quantity;
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== product.id
        );
        updateCoupon(state);
      }
    },
    increaseQuantity: (state, action) => {
      const item = action.payload;
      const existing = state.cartItems.find((p) => p.id === item.id);
      if (existing) {
        existing.quantity++;
      }
      state.totalQuantity++;
      state.totalPrice += item.price;
      updateCoupon(state);
    },
    decreaseQuantity: (state, action) => {
      const product = action.payload;
      const existing = state.cartItems.find((p) => p.id === product.id);
      if (existing) {
        existing.quantity--;
        state.totalQuantity--;
        state.totalPrice -= product.price;
        updateCoupon(state);
        if (existing.quantity == 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== product.id
          );
        }
      }
    },
    applyCoupon: (state, action) => {
      if (state.cartItems.length > 0) {
        state.coupon = action.payload.code;
        state.couponAmount = action.payload.discount;
        state.discount = (state.totalPrice * state.couponAmount) / 100;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
      state.coupon = "";
      state.couponAmount = 0;
      state.discount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  applyCoupon,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

function updateCoupon(state) {
  if (state.coupon) {
    state.discount = (state.totalPrice * state.couponAmount) / 100;
  }
}
