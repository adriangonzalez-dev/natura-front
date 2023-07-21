import { createBrowserRouter } from  "react-router-dom";
import { DetailProduct } from "../components/detail/DetailProduct";
import { Layout } from "../components/layouts/Layout";
import { Home } from "../components/home/Home";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "auth",
                children: [
                    {
                        path: "login",
                        element: <Login/>
                    },
                    {
                        path:"registro",
                        element: <Register/>
                    }
                ]
            },
            {
                path:"perfil",
                element: <h1>Perfil</h1>
            },
            {
                path: "productos/:id",
                element: <DetailProduct/>
            },
            {
                path:"checkout",
                element: <h1>Checkout</h1>
            },
            {
                path: "*",
                element: <h1>404</h1>
            }
        ]
    },
])