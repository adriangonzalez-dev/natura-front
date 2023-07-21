import { useContext } from 'react'
import ProductsContext from '../context/products/ProductsContext'

export const useProducts = () => {
  return useContext(ProductsContext)
}
