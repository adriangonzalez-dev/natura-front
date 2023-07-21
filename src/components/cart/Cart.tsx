import { useNavigate } from "react-router-dom";
import { ItemCart } from "./ItemCart";
import { useAuth } from "../../hooks/useAuth";
import { useChart } from "../../hooks";

interface Props {
    handleCart: () => void;
}

export const Cart = ({handleCart}:Props) => {
    const {auth} = useAuth()
    const {chart} = useChart()
    const navigate = useNavigate()

    const handleSendCart = () => {
        if(auth.user){
            window.location.href='https://wa.me/541165233919'
            handleCart()
        } else {
            navigate('/auth/login')
            handleCart()
        }
    }
  return (
    <div
    className="fixed w-screen h-screen bg-black-opacity z-30 top-0 overflow-hidden flex items-center justify-center">
        <div
    className="relative w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
    aria-modal="true"
    role="dialog"
    tabIndex={-1}
    >
    <button 
    className="absolute end-4 top-4 text-gray-600 transition hover:scale-110"
    onClick={handleCart}>
        <span className="sr-only">Close cart</span>

        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-5 w-5"
        >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
        />
        </svg>
    </button>

    <div className="mt-4 space-y-6">
        <ul className="space-y-4">
            {
                chart.data?.length > 0 && chart.data.map((item,index)=> <ItemCart key={index} item={item}/>)
            }
        </ul>

        <div className="space-y-4 text-center">
        <div>
            <p>Total: ${chart.total}</p>
        </div>

        <div className="flex justify-center w-full gap-x-2">
            <button
                type="button"
                className="block w-1/2 rounded text-gray-700 px-5 py-3 text-sm   transition hover:bg-gray-200"
            >
                Vaciar carrito
            </button>

            <button
                type="button"
                onClick={handleSendCart}
                className="block w-1/2 rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
            >
                Realizar pedido
            </button>
        </div>

        <button
            onClick={handleCart}
            className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
        >
            Continue shopping
        </button>
        </div>
    </div>
    </div>
    </div>
  )
}
