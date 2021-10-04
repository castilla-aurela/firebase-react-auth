import React, { ues} from 'react'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children}) {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}
