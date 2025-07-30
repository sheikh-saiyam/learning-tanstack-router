import { productsArr } from '@/lib/products'
import { create } from 'zustand'

interface ProductStore {
  product: {
    id?: number
    title?: string
    description?: string
    price?: number
    image?: string
    category?: string
  }
}
export const useProducts = create<ProductStore>({
  products: productsArr,
})
