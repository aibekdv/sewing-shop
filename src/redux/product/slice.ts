import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { $api } from '../../utils/config/base'
import { IProductState, ICardItem, Status } from './types'

export const fetchProducts = createAsyncThunk<ICardItem[]>(
  'product/fetchProductsStatus',
  async () => {
    const { data } = await $api.get<ICardItem[]>('market/product')
    return data
  },
)

const initialState: IProductState = {
  cards: [],
  status: Status.LOADING, // loading | success | error
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = Status.LOADING
      state.cards = []
    })
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = Status.ERROR
      state.cards = []
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.cards = action.payload
      state.status = Status.SUCCESS
    })
  },
})

export default productSlice.reducer
