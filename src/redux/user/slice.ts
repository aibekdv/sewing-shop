import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { $api } from '../../utils/config/base'
import { API_URL } from '../../utils/helpers/getEnv'
import { AuthUser, IUserState, Status, UserLogin } from './types'

export const login = createAsyncThunk<string, UserLogin>('user/login', async (params) => {
  const { data } = await $api.post(API_URL + 'account/login/', params)
  localStorage.setItem('token', data.access)
  localStorage.setItem('refresh', data.refresh)
  return data
})

export const register = createAsyncThunk<string, AuthUser>('user/register', async (params) => {
  const { username, email, password, passwordConfirm } = params
  const { data } = await $api.post(API_URL + 'account/register/', {
    username,
    email,
    password,
    'password_confirm': passwordConfirm,
  })
  return data
})

export const checkAuth = createAsyncThunk('user/checkauth', async (params: { refresh: string }) => {
  const { data } = await $api.post<{ access: string; refresh: string }>(
    'account/api/token/refresh/',
    { refresh: params.refresh },
  )
  localStorage.setItem('token', data.access)
})

const initialState: IUserState = {
  user: {} as AuthUser,
  isAuth: false,
  status: Status.LOADING,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Extra reducers for signin
    builder.addCase(login.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(login.rejected, (state) => {
      state.status = Status.ERROR
    })
    builder.addCase(login.fulfilled, (state) => {
      state.status = Status.SUCCESS
      state.isAuth = true
    })
    // Extra reducers for signup
    builder.addCase(register.pending, (state) => {
      state.status = Status.LOADING
      state.user = {} as AuthUser
    })
    builder.addCase(register.rejected, (state) => {
      state.status = Status.ERROR
      state.user = {} as AuthUser
    })
    builder.addCase(register.fulfilled, (state) => {
      state.status = Status.SUCCESS
    })
    // Extra reducers for check auth
    builder.addCase(checkAuth.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(checkAuth.rejected, (state) => {
      state.status = Status.ERROR
    })
    builder.addCase(checkAuth.fulfilled, (state) => {
      state.status = Status.SUCCESS
      state.isAuth = true
    })
  },
})

export default userSlice.reducer
