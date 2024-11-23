import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, size, color, quantity } = action.payload;

      // Find the item based on id, size, and color
      const itemIndex = state.items.findIndex(
        (item) =>
          item.id === id &&
          item.size === size &&
          item.color === color
      );

      if (itemIndex >= 0) {
        // Item with the same id, size, and color exists, update quantity
        state.items[itemIndex].quantity += quantity;
      } else {
        // Add a new item to the cart
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity || 1, // Default to 1 if no quantity provided
        });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
