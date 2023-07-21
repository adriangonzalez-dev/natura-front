import axios,{ AxiosResponse } from 'axios'

const url = import.meta.env.VITE_BACKEND_URL;

const service = axios.create({
    baseURL: `${url}/products`,
})

export const productsService = {
    allProducts():Promise<AxiosResponse<any>> {
        return service.get('/')
    },
}