import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  whishItems: [],
  totalQuantity: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const item = action.payload;
      const existing = state.whishItems.find((i) => i.id === item.id);
      if (existing) {
        existing.quantity++;
      } else {
        state.whishItems.push({ ...item, quantity: 1 });
      }
      state.totalQuantity++;
    },
    removeFromWishlist: (state, action) => {
      const product = action.payload;
      const existing = state.whishItems.find((p) => p.id === product.id);
      if (existing) {
        state.totalQuantity -= existing.quantity;
        state.whishItems = state.whishItems.filter(
          (item) => item.id !== product.id
        );
      }
    },
    increaseQuantity: (state, action) => {
      const product = action.payload;
      const existing = state.whishItems.find((p) => p.id === product.id);
      if (existing) {
        existing.quantity++;
      }
      state.totalQuantity++;
    },
    decreaseQuantity: (state, action) => {
      const product = action.payload;
      const existing = state.whishItems.find((p) => p.id === product.id);
      if (existing) {
        existing.quantity--;
        state.totalQuantity--;
        if (existing.quantity == 0) {
          state.whishItems = state.whishItems.filter(
            (item) => item.id !== product.id
          );
        }
      }
    },

    clearWishlist: (state) => {
      state.whishItems = [];
      state.totalQuantity = 0;
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  increaseQuantity,
  decreaseQuantity,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
