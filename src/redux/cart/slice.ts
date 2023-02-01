import { createSlice } from '@reduxjs/toolkit'
import { calcTotalPrice } from '../../utils/helpers/calcTotalPrice'
import { ICartState } from './types'

const initialState: ICartState = {
  cart: [],
  totalPrice: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const findItem = state.cart.find((obj) => obj.image === action.payload.image)

      if (findItem) {
        findItem.quantity++
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }

      state.totalPrice = calcTotalPrice(state.cart)
    },
    removeToCart(state, action) {
      state.cart = state.cart.filter((i) => i.image !== action.payload)
      state.totalPrice = calcTotalPrice(state.cart)
    },
    decrementCount(state, action) {
      const findItem = state.cart.find((obj) => obj.image === action.payload)
      if (findItem && findItem.quantity > 1) {
        findItem && findItem.quantity--
      } else {
        state.cart = state.cart.filter((i) => i.image !== action.payload)
      }

      state.totalPrice = calcTotalPrice(state.cart)
    },
  },
})

export const { addToCart, removeToCart, decrementCount } = cartSlice.actions

export default cartSlice.reducer
