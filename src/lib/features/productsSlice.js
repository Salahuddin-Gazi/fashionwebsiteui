import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  newArrivals: [],
  bigDeal: [],
  product: {}
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      return {
        ...state,
        items: [...action.payload]
      }; // Replace state with new products
    },
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    setCurrentProduct: (state, action) => {
      return {
        ...state,
        product: action.payload
      }
    },
    setNewArrivals: (state, action) => {
      return {
        ...state,
        newArrivals: [...action.payload]
      };
    },
    setBigDeal: (state, action) => {
      return {
        ...state,
        bigDeal: [...action.payload]
      };
    }
  },
});

// Action creators are generated for each case reducer function
export const { setProducts, addProduct, setNewArrivals, setBigDeal, setCurrentProduct } = productsSlice.actions;

export default productsSlice.reducer;