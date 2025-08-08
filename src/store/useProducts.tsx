import { productsArr } from '@/lib/products'
import { create } from 'zustand'

interface ProductStore {
  products: {
    id?: number
    title?: string
    description?: string
    price?: number
    image?: string
    category?: string
  }[]
  addProduct: (product: Omit<Product, 'id'>) => void
  updateProduct: (product: Product) => void
  deleteProduct: (id: number) => void
}
export const useProducts = create<ProductStore>((set) => ({
  products: productsArr,
  addProduct: (state, action) => {
    state.push({
      id: products.length > 0 ? state[state.length - 1].id + 1 : 1,
      ...action.payload,
    })
  },
  updateProduct: (state, action) => {
    const product = state.find((product) => product.id === action.payload.id)
    if (product) {
      product.title = action.payload.title
      product.price = action.payload.price
      product.description = action.payload.description
      product.category = action.payload.category
    }
  },
  deleteProduct: (state, action) => {
    return state.filter((product) => product.id !== action.payload)
  },
}))
