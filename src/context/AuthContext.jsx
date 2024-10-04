import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState(false)
    const [userPayload, setUserPayload] = useState(null)

    const login = (jwtToken) => {
        localStorage.setItem('token', jwtToken)
        const payload = jwtDecode(jwtToken)
        setIsAuth(true)
        setUserPayload(payload)
    }

    const logout = () => {
        localStorage.removeItem('token')
        setIsAuth(false)
        setUserPayload(null)
    }

    useEffect( () => {
        const token = localStorage.getItem('token')
        if(token){
            const payload = jwtDecode(token)
            setIsAuth(true)
            setUserPayload(payload)
        }
    }, [] )

    const data = {
        isAuth,
        userPayload,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    ) 
}