import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import categoriesReducer from "./features/categories/categoriesSlice";
import productsReducer from "./features/product/productSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    categories: categoriesReducer,
    products: productsReducer,
  },
});
