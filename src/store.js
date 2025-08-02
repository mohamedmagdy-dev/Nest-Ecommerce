import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import categoriesReducer from "./features/categories/categoriesSlice";
import productsReducer from "./features/product/productSlice";
import wishlistReducer from "./features/wishlist/wishlistSlicer";
import compareReducer from "./features/compare/compareSlice";
import authReducer from "./features/auth/authSlicer";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    categories: categoriesReducer,
    products: productsReducer,
    wishlist: wishlistReducer,
    compare: compareReducer,
    auth: authReducer,
  },
});
