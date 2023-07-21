import { AuthProvider } from "./auth/AuthProvider";
import { ChartProvider } from "./chart/ChartProvider";
import { ProductsProvider } from "./products/ProductsProvider"


interface Props {
  children: React.ReactNode;
}

export const GlobalProvider = ({children}:Props) => {
  return (
    <ProductsProvider>
      <ChartProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </ChartProvider>
    </ProductsProvider>
  )
}
