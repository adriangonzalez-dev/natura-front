
import { useProducts } from '../../hooks'
import { Card } from './Card'
import { IProducts } from './interfaces'
/* import { productsStore } from '../store/productStore' */


export const Products = () => {
  const { products } = useProducts()
  console.log(products)


  return (
    <div className='container m-auto p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-1 w-full'>
      {
        products.data.map((product:IProducts) => <Card key={product.id} product={product}/>)
      }    
    </div>
  )
}
