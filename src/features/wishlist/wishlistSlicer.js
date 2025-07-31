import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishItems: [],
  totalQuantity: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const item = action.payload;
      const existing = state.wishItems.find((i) => i.id === item.id);
      if (!existing) {
        state.wishItems.push({ ...item, quantity: 1 });
      }
      state.totalQuantity++;
    },
    removeFromWishlist: (state, action) => {
      const product = action.payload;
      const existing = state.wishItems.find((p) => p.id === product.id);
      if (existing) {
        state.totalQuantity -= existing.quantity;
        state.wishItems = state.wishItems.filter(
          (item) => item.id !== product.id
        );
      }
    },
    increaseQuantity: (state, action) => {
      const product = action.payload;
      const existing = state.wishItems.find((p) => p.id === product.id);
      if (existing) {
        existing.quantity++;
      }
      state.totalQuantity++;
    },
    decreaseQuantity: (state, action) => {
      const product = action.payload;
      const existing = state.wishItems.find((p) => p.id === product.id);
      if (existing) {
        existing.quantity--;
        state.totalQuantity--;
        if (existing.quantity == 0) {
          state.wishItems = state.wishItems.filter(
            (item) => item.id !== product.id
          );
        }
      }
    },

    clearWishlist: (state) => {
      state.wishItems = [];
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
