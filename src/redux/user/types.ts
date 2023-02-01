export interface IUserState {
  user: AuthUser
  isAuth: boolean
  status: Status
}

export type AuthUser = {
  username: string
  email?: string
  password: string
  passwordConfirm?: string
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type UserLogin = {
  username: string
  password: string
}
