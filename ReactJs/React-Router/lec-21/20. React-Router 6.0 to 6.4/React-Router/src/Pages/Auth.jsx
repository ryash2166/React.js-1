// authenticator with Protected Router (Save in Utitles)


import { useState,useContext,createContext, Children } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const login = (user) => {
        setUser(user)
    }

    const logout = (user) => {
        setUser(null)
    }

    return(
        <>
            <div>
                <AuthContext.Provider value={{user , login , logout}}>
                    {children}
                </AuthContext.Provider>
            </div>
        </>
    )
}

export const UseAuth = () => {
    return useContext(AuthContext)
}