import { Link } from "react-router-dom"
import { IProducts } from "./interfaces"
import { toast } from 'sonner';
import { useChart } from "../../hooks";
import { TypesChart } from "../../context/chart/reducer";


interface Props {
  product: IProducts
}

export const Card = ({product}: Props) => {
 
  const {dispatchChart} = useChart()

  const setItemToChart = (product:IProducts | undefined) => {
    dispatchChart({type:TypesChart.ADD_TO_CHART, payload:product})
    toast.success('Producto agregado al carrito')
}
  

  return (
    <div className="group relative block overflow-hidden">
  <button
    className="absolute end-4 top-4 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
  >
    <span className="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>
    <Link to={`productos/${product?.id}`}>

      <img
        src={product?.image}
        alt=""
        loading="lazy"
        className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="relative border border-gray-100 bg-white p-6">
        <span
          className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"
        >
          {product?.category}
        </span>

        <h3 className="mt-4 text-lg font-medium text-gray-900">{product?.title}</h3>

        <p className="mt-1.5 text-lg text-gray-700">${product?.price?.toLocaleString('es-ES', {
                                                                      minimumFractionDigits: 2,
                                                                      maximumFractionDigits: 2
                                                                    })}</p>
      </div>
    </Link>

      <button
        onClick={() => setItemToChart(product)}
        className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
      >
        Agregar al carrito
      </button>
  </div>
  )
}
