export interface ICardItem {
  slug?: string
  title: string
  description: string
  price: number
  image: string | null | undefined
  product_images: number[]
  color: { id: string; color: string }[]
  size: string
  weight: string
  carousel: { images: string }[]
}

export interface IMasterItem {
  name: string
  about: string
  phone: string
}
