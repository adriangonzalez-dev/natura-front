import { useEffect, useReducer } from "react"
import ProductsContext from "./ProductsContext"
import { TypesProducts, productInitialState, productsReducer } from "./reducer"
import { productsService } from "../../services/productsServices"

interface Props {
    children: React.ReactNode
}

export const ProductsProvider = ({children}:Props) => {
    const [products, dispatchProducts] = useReducer(productsReducer, productInitialState)
    
    const getProducts = async () => {
        try {
            const {data} = await productsService.allProducts()
            dispatchProducts({type:TypesProducts.GET_PRODUCTS, payload:data.products})
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
        getProducts()
    },[])
    
    return (
        <ProductsContext.Provider value={{products, dispatchProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}
