import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { initialState, reducer } from './reducer';

interface Props {
    children: React.ReactNode;

}

export const AuthProvider = ({children}:Props) => {

    const [auth, dispatchAuth] = useReducer(reducer, initialState)
  return (
    <AuthContext.Provider value={{auth, dispatchAuth}}>
        {children}
    </AuthContext.Provider>
  )
}
