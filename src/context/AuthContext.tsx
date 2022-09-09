import { createContext, useState } from "react";
import AuthType from "./@types/AuthType";

export const AuthContext = createContext<AuthType | null>(null);

const AuthProvider = ({children}: any) => {
    const [auth, setAuth] = useState<any>({token: "", id: ""});

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;