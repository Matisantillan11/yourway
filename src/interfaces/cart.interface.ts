import { Product } from "./interfaces";

export interface CartItemContext {
  id: string
  product: Product
  quantity: number
}