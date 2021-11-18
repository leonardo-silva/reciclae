import React, { 
    createContext, 
    ReactNode, 
    useContext, 
    useState } 
from "react";

import { strings } from "../global/strings/strings";

type User = {
    email: string;
    username: string;
    firstName: string;
    avatar: string;
    token: string;
}

type AuthContextData = {
    user: User;
    loading: boolean;
    signIn: () => Promise<void>;
    signOut: () => void;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User);
    const [loading, setLoading] = useState(false);
    // Just to test the user data (context) being passed 
    /*
    const [user, setUser] = useState<User>({
        id: '1',
        username: 'Leonardo',
        firstName: 'Leonardo',
        avatar: 'Leonardo',
        email: 'Leonardo',
        token: 'Leonardo'
    } as User);
    */

    async function signIn() {
        try {
            setLoading(true);

            // We set first name, token, and the rest (see type User) come from ...userInfo.data
            setTimeout(() => {
                setUser({
                    email: 'leonardo.silva@ifnmg.edu.br',
                    username: 'Leonardo Silva',
                    firstName: 'Leonardo',
                    avatar: 'https://github.com/leonardo-silva.png',
                    token: 'hjhjjjjsdheyyalkljrnbbgdajasdhakhdkajdhasdas'
                } as User);

                setLoading(false);
            }, 2000);

        } catch {
            throw new Error(strings.auth.authError);
        }
    }

    function signOut() {
        // Logout
        setUser({} as User);
    }

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            signIn,
            signOut
          }}>
            { children }
        </AuthContext.Provider>      
    )
}

// This is a hook!
function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export {
    AuthProvider,
    useAuth
}