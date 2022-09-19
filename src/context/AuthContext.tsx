import { createContext, useState } from "react";
import { Session } from "./@types/AuthType";
import AuthType from "./@types/AuthType";

export const AuthContext = createContext<AuthType | null>(null);

const AuthProvider = ({children}: any) => {
    const [auth, setAuth] = useState<Session>({token: "", id: ""});

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;