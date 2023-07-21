/* eslint-disable @typescript-eslint/no-empty-function */
import { Dispatch, createContext } from "react";
import { IUser } from "../../components/auth/interface";

interface AuthContextType {
    auth: {
      user: IUser | null,
      isLogged: boolean,
    };
    dispatchAuth: Dispatch<any>; // O utiliza el tipo adecuado para tus acciones
  }

export const AuthContext = createContext<AuthContextType>({
    auth: {
        user: null,
        isLogged: false,
    },
    dispatchAuth: () => {},
});