import { createContext, useContext, useState } from "react";

interface UserContext {
    setToken: (token:string) => void;
    getToken: () => string|null;
    logout: () => void;
    setIsAuth: (value:boolean) => void;
    isAuth: boolean;
    setIsLoading: (value:boolean) => void;
    isLoading: boolean;
}

const initialState: UserContext = {
    setToken: () => {}, 
    getToken: () => null,
    logout: () => {},
    setIsAuth: () => {},
    isAuth: false,
    setIsLoading: () => {},
    isLoading: true,
}

const UserContext = createContext<UserContext>(initialState)

export function UserContextProvider ({children}:{children:React.ReactNode}){
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    console.log("isAuth in UserContextProvider",isAuth);
    console.log("isLoading in UserContextProvider",isLoading);

    const setToken = (token:string) => {
        window.localStorage.setItem('token', token);
    }

    const getToken = () => {
        return window.localStorage.getItem('token');
    }

    const logout = () => {
        window.localStorage.removeItem('token');
    }


    return <UserContext.Provider value={{setToken, getToken, logout, setIsAuth, isAuth, setIsLoading, isLoading }}>
        {children}
    </UserContext.Provider>
}

export const useUserContext = () => {
    return useContext(UserContext)
}