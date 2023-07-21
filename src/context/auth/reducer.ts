import { IUser } from '../../components/auth/interface'

export interface authState {
    user: IUser | null,
    isLogged: boolean
}

export const initialState:authState = {
    user: null,
    isLogged: false,
}

export const TypesAuth = {
    LOGIN:'LOGIN',
    LOGOUT:'LOGOUT'

}

export const reducer = (state: authState, action: any) => {
    switch (action.type) {
        case TypesAuth.LOGIN:
            return {
                ...state,
                user: action.payload,
                isLogged: true
            }
        case TypesAuth.LOGOUT:
            return {
                ...state,
                user: null,
                isLogged: false
            }
        default:
            return state
    }
}