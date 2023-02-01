export interface ICartState {
  cart: ICartItem[]
  totalPrice: number
}
export interface ICartItem {
  slug: string
  title: string
  description: string
  price: number
  image: string
  address?: string
  quantity: number
}
