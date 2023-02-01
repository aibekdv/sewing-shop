import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import logger from 'redux-logger'
import product from './product/slice'
import user from './user/slice'
import cart from './cart/slice'

export const store = configureStore({
  reducer: { product, user, cart },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()
