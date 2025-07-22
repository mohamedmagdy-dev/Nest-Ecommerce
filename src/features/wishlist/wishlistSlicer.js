import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  whishItems: [],
  totalQuantity: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {},
  },
});

export const { addToWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
