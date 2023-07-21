import axios,{ AxiosResponse } from 'axios'
import { IResponseLogin } from '../components/auth/interface';

const url = import.meta.env.VITE_BACKEND_URL;

const service = axios.create({
    baseURL: url,
})

interface ArgsRegister {
    username: string
    email: string
    password: string
}

export const authService = {
    login(email: string, password: string):Promise<AxiosResponse<IResponseLogin>> {
        return service.post('/auth/login', {email, password})
    },
    register({username, email, password}:ArgsRegister):Promise<AxiosResponse<IResponseLogin>> {
        return service.post('/auth/register', {username, email, password})
    }
}