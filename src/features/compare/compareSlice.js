import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  compareItems: [],
  itemsQuantity: 0,
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addToCompare: (state, action) => {
      const item = action.payload;
      const existing = state.compareItems.find((i) => i.id === item.id);
      if (!existing) {
        state.compareItems.push(item);
        state.itemsQuantity++;
      }
    },
    removeFromCompare: (state, action) => {
      const item = action.payload;
      const existing = state.compareItems.find((i) => i.id === item.id);
      if (existing) {
        state.itemsQuantity--;
        state.compareItems = state.compareItems.filter(
          (item) => item.id !== existing.id
        );
      }
    },
    clearCompare: (state) => {
      state.compareItems = [];
      state.itemsQuantity = 0;
    },
  },
});

export const { addToCompare, removeFromCompare, clearCompare } =
  compareSlice.actions;

export default compareSlice.reducer;
