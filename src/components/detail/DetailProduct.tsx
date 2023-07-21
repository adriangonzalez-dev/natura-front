import {useParams} from 'react-router-dom'
import { IProducts } from '../products/interfaces';
import { useEffect, useState } from 'react';
import { toast } from 'sonner'
import { useChart, useProducts } from '../../hooks';
import { TypesChart } from '../../context/chart/reducer';

export const DetailProduct = () => {
    const {products} = useProducts()
    const {dispatchChart} = useChart()

    const {id} = useParams<{id:string}>();
    const [product,setProduct] = useState<IProducts>();
    const getProduct = async () => {
        if(!id){
            return <div>no existe el id</div>
        }
        const findProduct = products.data.find(product => product.id === +id);
        setProduct(findProduct)
    }

    const setItemToChart = (product:IProducts | undefined) => {
        dispatchChart({type: TypesChart.ADD_TO_CHART, payload:product})
        toast.success('Producto agregado al carrito')
    }
    
    useEffect(() => {
        getProduct()
        return () => {
            setProduct(undefined)
        }
    },[product])
  return (
      <section>
          <div className="relative mx-auto max-w-screen-xl px-4 py-8">
              <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                  <div className="grid grid-cols-1 gap-4">
                      <img
                          alt={product?.title}
                          src={product?.image}
                          className="aspect-square w-full rounded-xl object-cover"
                      />

                  </div>

                  <div className="sticky top-0">
                      <strong
                          className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
                      >
                          {product?.category}
                      </strong>

                      <div className="mt-8 flex justify-between">
                          <div className="max-w-[35ch] space-y-2">
                              <h1 className="text-xl font-bold sm:text-2xl">
                                  {product?.title}
                              </h1>

                          </div>

                          <p className="text-lg font-bold">${product?.price}</p>
                      </div>

                      <div className="mt-4">
                          <div className="prose max-w-none">
                              <p>
                                  {product?.description}
                              </p>
                          </div>

                      </div>

                      <form className="mt-8 w-full">
                          <div className="mt-8 flex justify-end md:justify-center items-center space-x-4 md:gap-4">
                    

                              <button
                                  type="button"
                                  onClick={()=>setItemToChart(product)}
                                  className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                              >
                                  Agregar al carrito
                              </button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </section>
  )
}
