import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import productsReducer from '../features/productsSlice'
import cartReducer from '../features/cartSlice'

const makeStore = () => {
  return configureStore({
    reducer: {
      products: productsReducer,
      cart: cartReducer
    },
  })
}

export const wrapper = createWrapper(makeStore, {debug: false})