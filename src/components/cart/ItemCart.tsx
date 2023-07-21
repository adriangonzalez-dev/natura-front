import { ChartItems } from "../../context/chart/ChartContext"

interface Props {
    item: ChartItems
}

export const ItemCart = ({item}:Props) => {
  return (
    <li className="flex items-center gap-4">
            <img
            src={item.image}
            alt=""
            className="h-16 w-16 rounded object-cover"
            />

            <div>
            <h3 className="text-sm text-gray-900">{item.title}</h3>

            <dl className="mt-0.5 space-y-px text-sm text-gray-600">
                <div>
                <dt className="inline">Unidad: $</dt>
                <dd className="inline">{item.price}</dd>
                </div>

                <div>
                <dt className="inline">Cantidad: </dt>
                <dd className="inline">{item.quantity}</dd>
                </div>
            </dl>
            </div>
        </li>
  )
}
